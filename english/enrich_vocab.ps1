# Script to enrich app.js with multi-context Vietnamese meanings and extensive lexicon
$path = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\app.js"
$content = Get-Content -Path $path -Raw -Encoding UTF8

Write-Host "Read app.js successfully ($($content.Length) bytes)"
