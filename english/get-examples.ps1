$content = Get-Content 'C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\app.js'
$curWord = ''
foreach ($line in $content) {
    if ($line -match "^\s*word:\s*'([^']+)'") {
        $curWord = $matches[1]
    }
    if ($line -match "^\s*example:\s*'([^']+)'") {
        Write-Output "$curWord | $($matches[1])"
    }
    if ($line -match '^const EXTENDED_CORE_DICTIONARY') {
        break
    }
}
