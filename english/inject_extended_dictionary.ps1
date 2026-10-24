$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$appJsPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\app.js"
$extendedPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\parts\extended_dictionary.js"

$appContent = [System.IO.File]::ReadAllText($appJsPath, [System.Text.Encoding]::UTF8)
$extendedCode = [System.IO.File]::ReadAllText($extendedPath, [System.Text.Encoding]::UTF8).Trim()

# 1. Place EXTENDED_CORE_DICTIONARY before WORD_KNOWLEDGE_BASE, and Object.assign after WORD_KNOWLEDGE_BASE
if (-not $appContent.Contains("EXTENDED_CORE_DICTIONARY")) {
    $kbIdx = $appContent.IndexOf("const WORD_KNOWLEDGE_BASE = {")
    $kbEndIdx = $appContent.IndexOf("  function inferPartOfSpeech(clean) {")
    
    if ($kbIdx -ge 0 -and $kbEndIdx -gt $kbIdx) {
        $beforeKb = $appContent.Substring(0, $kbIdx)
        $kbAndRest = $appContent.Substring($kbIdx, $kbEndIdx - $kbIdx)
        $afterKb = $appContent.Substring($kbEndIdx)

        $appContent = $beforeKb + $extendedCode + "`r`n`r`n" + $kbAndRest + "`r`n  Object.assign(WORD_KNOWLEDGE_BASE, EXTENDED_CORE_DICTIONARY);`r`n`r`n" + $afterKb
        Write-Host "Inserted EXTENDED_CORE_DICTIONARY and merged into WORD_KNOWLEDGE_BASE"
    } else {
        Write-Error "Could not find WORD_KNOWLEDGE_BASE bounds in app.js"
        exit 1
    }
}

# 2. Add Auto-Repair mechanism in loadState
$loadStatePattern = "  function loadState() {"
if ($appContent.Contains($loadStatePattern) -and -not $appContent.Contains("// AUTO-REPAIR LEGACY PLACEHOLDERS")) {
    $repairCode = @"
  function loadState() {
    // AUTO-REPAIR LEGACY PLACEHOLDERS: Fix words like International, Exhibition that were saved with old templates
    function repairWordEntry(w) {
      if (!w || !w.word) return;
      const clean = w.word.toLowerCase().replace(/[^a-z]/g, '');
      const isBadMeaning = !w.meaning || 
        w.meaning.includes('Khái niệm / sự') ||
        w.meaning.includes('Có tính chất') ||
        w.meaning.includes('mang đặc trưng') ||
        w.meaning.includes('Thực hiện / hành động') ||
        w.meaning.includes('Một cách ' + clean) ||
        w.meaning.includes('Khái niệm / sự ' + clean);
      
      const isBadExample = !w.example ||
        w.example.includes('Developing a deeper understanding of ' + clean) ||
        w.example.includes('It is crucial to maintain a ' + clean) ||
        w.example.includes('They always strive to ' + clean);

      const meta = generateWordMetadata(clean);
      if (meta) {
        if (isBadMeaning && meta.meaning) {
          w.meaning = meta.meaning;
          w.pos = meta.pos || w.pos;
          w.level = meta.level || w.level;
          w.topic = meta.topic || w.topic;
          w.phonetic = meta.phonetic || w.phonetic;
        }
        if (isBadExample && meta.example) {
          w.example = meta.example;
        }
      }
    }
"@
    $appContent = $appContent.Replace("  function loadState() {", $repairCode)

    $repairCallPattern = "state.words.forEach(w => {"
    $repairCallReplacement = @"
state.words.forEach(w => {
          repairWordEntry(w);
"@
    $appContent = $appContent.Replace($repairCallPattern, $repairCallReplacement)
    Write-Host "Injected Auto-Repair into loadState"
}

[System.IO.File]::WriteAllText($appJsPath, $appContent, $utf8NoBom)
Write-Host "Updated app.js successfully!"
