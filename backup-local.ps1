# ============================================================
# Saubh.Tech Local Backup Script (Windows PowerShell)
# Run: Right-click → Run with PowerShell
# Or:  powershell -ExecutionPolicy Bypass -File backup-local.ps1
# ============================================================

$projectDir = "C:\Projects\saubh-tech"
$backupRoot = "C:\Backups\SaubhTech"
$date = Get-Date -Format "yyyy-MM-dd"
$time = Get-Date -Format "HHmm"
$backupDir = "$backupRoot\$date"

# Create dated backup folder
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# --- 1. Git versioned backup (zip of entire project) ---
$zipName = "saubh-tech_${date}_${time}.zip"
Write-Host "Creating project backup: $zipName" -ForegroundColor Green
Compress-Archive -Path "$projectDir\*" -DestinationPath "$backupDir\$zipName" -Force
Write-Host "  Saved: $backupDir\$zipName" -ForegroundColor Cyan

# --- 2. Source code only (no node_modules, .next) ---
$srcZip = "saubh-tech_src_${date}_${time}.zip"
Write-Host "Creating source-only backup: $srcZip" -ForegroundColor Green

# Create temp folder with only source
$tempDir = "$env:TEMP\saubh-backup-temp"
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

# Copy source files (exclude node_modules, .next, .git)
Get-ChildItem -Path $projectDir -Exclude "node_modules", ".next", ".git" | 
    Copy-Item -Destination $tempDir -Recurse -Force

Compress-Archive -Path "$tempDir\*" -DestinationPath "$backupDir\$srcZip" -Force
Remove-Item $tempDir -Recurse -Force
Write-Host "  Saved: $backupDir\$srcZip" -ForegroundColor Cyan

# --- 3. Log the backup ---
$logFile = "$backupRoot\backup-log.txt"
$logEntry = "[$date $time] Local backup created: $zipName, $srcZip"
Add-Content -Path $logFile -Value $logEntry
Write-Host "`nBackup logged to: $logFile" -ForegroundColor Yellow

# --- 4. Cleanup old backups (keep last 30 days) ---
$cutoff = (Get-Date).AddDays(-30)
$oldDirs = Get-ChildItem -Path $backupRoot -Directory | 
    Where-Object { $_.Name -match '^\d{4}-\d{2}-\d{2}$' -and $_.CreationTime -lt $cutoff }

if ($oldDirs.Count -gt 0) {
    Write-Host "`nCleaning up $($oldDirs.Count) old backup(s)..." -ForegroundColor Yellow
    $oldDirs | Remove-Item -Recurse -Force
    Write-Host "  Done." -ForegroundColor Green
}

# --- Summary ---
$totalSize = (Get-ChildItem $backupDir -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "`n=== BACKUP COMPLETE ===" -ForegroundColor Green
Write-Host "Location: $backupDir" -ForegroundColor Cyan
Write-Host "Size: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Cyan
Write-Host "Files:" -ForegroundColor Cyan
Get-ChildItem $backupDir | ForEach-Object { Write-Host "  - $($_.Name) ($([math]::Round($_.Length/1MB, 2)) MB)" }
