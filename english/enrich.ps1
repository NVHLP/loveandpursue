$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$jsPath = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\app.js"
$content = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

# Check if content has SAMPLE_VOCABULARY
if ($content.Contains("const SAMPLE_VOCABULARY = [") -and $content.Contains("const WORD_KNOWLEDGE_BASE = {")) {
    Write-Host "Markers found in app.js!"
} else {
    Write-Error "Markers not found in app.js!"
}
