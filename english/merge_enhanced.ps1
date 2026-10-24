$utf8NoBom = New-Object System.Text.UTF8Encoding $false

$appJsPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\app.js"
$sampleVocabPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\parts\sample_vocab.js"
$knowledgeBasePath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\parts\knowledge_base.js"
$inferMeaningPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\parts\infer_meaning.js"
$testHtmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\test.html"

$appContent = [System.IO.File]::ReadAllText($appJsPath, [System.Text.Encoding]::UTF8)
$sampleVocab = [System.IO.File]::ReadAllText($sampleVocabPath, [System.Text.Encoding]::UTF8).Trim()
$knowledgeBase = [System.IO.File]::ReadAllText($knowledgeBasePath, [System.Text.Encoding]::UTF8).Trim()
$inferMeaning = [System.IO.File]::ReadAllText($inferMeaningPath, [System.Text.Encoding]::UTF8).Trim()

# 1. Replace SAMPLE_VOCABULARY
# Start: "  const SAMPLE_VOCABULARY = ["
# End: "  ];\r\n\r\n  const STORAGE_KEY_WORDS" or "  ];\n\n  const STORAGE_KEY_WORDS"
$sampleStart = $appContent.IndexOf("  const SAMPLE_VOCABULARY = [")
$storageKeyIdx = $appContent.IndexOf("  const STORAGE_KEY_WORDS = ")

if ($sampleStart -ge 0 -and $storageKeyIdx -gt $sampleStart) {
    # Find the end of SAMPLE_VOCABULARY right before STORAGE_KEY_WORDS
    $subBefore = $appContent.Substring(0, $sampleStart)
    $subAfter = $appContent.Substring($storageKeyIdx)
    $appContent = $subBefore + $sampleVocab + "`r`n`r`n" + $subAfter
    Write-Host "Replaced SAMPLE_VOCABULARY successfully!"
} else {
    Write-Error "Could not find SAMPLE_VOCABULARY bounds!"
    exit 1
}

# 2. Update STORAGE_KEY_WORDS to v4
$appContent = $appContent.Replace("const STORAGE_KEY_WORDS = 'vocab_master_words_v3';", "const STORAGE_KEY_WORDS = 'vocab_master_words_v4';")
$appContent = $appContent.Replace("const STORAGE_KEY_SETTINGS = 'vocab_master_settings_v3';", "const STORAGE_KEY_SETTINGS = 'vocab_master_settings_v4';")

# 3. Replace WORD_KNOWLEDGE_BASE
$kbStart = $appContent.IndexOf("  const WORD_KNOWLEDGE_BASE = {")
$posFuncIdx = $appContent.IndexOf("  function inferPartOfSpeech(clean) {")

if ($kbStart -ge 0 -and $posFuncIdx -gt $kbStart) {
    # Find the comment before inferPartOfSpeech if any
    $commentIdx = $appContent.LastIndexOf("  /**", $posFuncIdx)
    $cutIdx = if ($commentIdx -gt $kbStart) { $commentIdx } else { $posFuncIdx }
    $subBefore = $appContent.Substring(0, $kbStart)
    $subAfter = $appContent.Substring($cutIdx)
    $appContent = $subBefore + $knowledgeBase + "`r`n`r`n" + $subAfter
    Write-Host "Replaced WORD_KNOWLEDGE_BASE successfully!"
} else {
    Write-Error "Could not find WORD_KNOWLEDGE_BASE bounds!"
    exit 1
}

# 4. Replace inferVietnameseMeaning
$inferStart = $appContent.IndexOf("  function inferVietnameseMeaning(clean, pos) {")
$synthFuncIdx = $appContent.IndexOf("  function synthesizeExampleSentence(word, pos, topic) {")

if ($inferStart -ge 0 -and $synthFuncIdx -gt $inferStart) {
    $commentIdx = $appContent.LastIndexOf("  /**", $inferStart)
    $cutStart = if ($commentIdx -ge 0 -and $commentIdx -gt $appContent.LastIndexOf("}", $inferStart)) { $commentIdx } else { $inferStart }
    $commentSynth = $appContent.LastIndexOf("  /**", $synthFuncIdx)
    $cutEnd = if ($commentSynth -gt $cutStart) { $commentSynth } else { $synthFuncIdx }

    $subBefore = $appContent.Substring(0, $cutStart)
    $subAfter = $appContent.Substring($cutEnd)
    $appContent = $subBefore + $inferMeaning + "`r`n`r`n" + $subAfter
    Write-Host "Replaced inferVietnameseMeaning successfully!"
} else {
    Write-Error "Could not find inferVietnameseMeaning bounds!"
    exit 1
}

# 5. Write back app.js
[System.IO.File]::WriteAllText($appJsPath, $appContent, $utf8NoBom)
Write-Host "Updated app.js successfully ($($appContent.Length) characters)!"

# 6. Update test.html localStorage assertion
$testContent = [System.IO.File]::ReadAllText($testHtmlPath, [System.Text.Encoding]::UTF8)
$testContent = $testContent.Replace("vocab_master_words_v3", "vocab_master_words_v4")
[System.IO.File]::WriteAllText($testHtmlPath, $testContent, $utf8NoBom)
Write-Host "Updated test.html to v4!"
