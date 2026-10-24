# Generate comprehensive vocabulary data and inject into app.js
$appJsPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\app.js"
$testHtmlPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\test.html"

# Read existing app.js
$appContent = [System.IO.File]::ReadAllText($appJsPath, [System.Text.Encoding]::UTF8)

# 1. Update STORAGE_KEY_WORDS to v4
$appContent = $appContent.Replace("const STORAGE_KEY_WORDS = 'vocab_master_words_v3';", "const STORAGE_KEY_WORDS = 'vocab_master_words_v4';")

# 2. Update test.html localStorage key to v4
$testContent = [System.IO.File]::ReadAllText($testHtmlPath, [System.Text.Encoding]::UTF8)
$testContent = $testContent.Replace("vocab_master_words_v3", "vocab_master_words_v4")
[System.IO.File]::WriteAllText($testHtmlPath, $testContent, [System.Text.Encoding]::UTF8)
Write-Host "Updated test.html to v4"
