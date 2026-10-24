$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$testUrl = "file:///C:/Users/Admin/.gemini/antigravity/scratch/vocab-master/test.html"
$outputFile = "C:\Users\Admin\.gemini\antigravity\scratch\vocab-master\test-output.txt"

Start-Process -FilePath $edgePath -ArgumentList "--headless=new", "--allow-file-access-from-files", "--virtual-time-budget=5000", "--dump-dom", $testUrl -NoNewWindow -Wait -RedirectStandardOutput $outputFile

if (Test-Path $outputFile) {
    Get-Content $outputFile | Select-String -Pattern "Kết Quả|PASS|FAIL"
} else {
    Write-Host "Output file not found."
}
