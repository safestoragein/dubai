<#
.SYNOPSIS
  Reports which commit is currently live on safestorage.ae and links it on GitHub.

.DESCRIPTION
  SSHes to the production EC2 box, reads the deployed working tree's HEAD, and
  prints GitHub links for that commit plus the un-deployed delta against main.

  Deploys happen via `git push` (the SSH remote runs a post-receive hook), so the
  deployed SHA and origin/main can drift if a push fails or was never made.

.EXAMPLE
  ./scripts/deployed-version.ps1
#>

$ErrorActionPreference = 'Stop'

$Repo    = 'safestoragein/dubai'
$Host_   = '13.203.136.29'
$AppDir  = '/home/ubuntu/dubai'
$Pem     = if ($env:DUBAI_SSH_KEY) { $env:DUBAI_SSH_KEY } else { 'C:/pem/Safestoragedubaikeypair.pem' }

if (-not (Test-Path $Pem)) {
    throw "SSH key not found at '$Pem'. Set `$env:DUBAI_SSH_KEY to its path."
}

# --- what's live -------------------------------------------------------------
$remote = @"
cd $AppDir || exit 1
echo "sha=`$(git rev-parse HEAD)"
echo "subject=`$(git log -1 --pretty=format:%s)"
echo "author=`$(git log -1 --pretty=format:%an)"
echo "date=`$(git log -1 --pretty=format:%cI)"
echo "started=`$(systemctl show -p ActiveEnterTimestamp --value safestorage.service)"
"@

$raw = ssh -i $Pem -o StrictHostKeyChecking=accept-new -o ConnectTimeout=20 "ubuntu@$Host_" $remote
if ($LASTEXITCODE -ne 0) { throw "SSH to $Host_ failed (exit $LASTEXITCODE)." }

$live = @{}
foreach ($line in $raw) {
    if ($line -match '^([a-z]+)=(.*)$') { $live[$Matches[1]] = $Matches[2] }
}
$sha = $live['sha']
if (-not $sha) { throw "Could not read deployed HEAD from $Host_." }

# --- what's on GitHub --------------------------------------------------------
git fetch origin --quiet
$mainSha = (git rev-parse origin/main).Trim()

Write-Host ''
Write-Host 'DEPLOYED ON PRODUCTION' -ForegroundColor Cyan
Write-Host "  commit   $sha"
Write-Host "  subject  $($live['subject'])"
Write-Host "  author   $($live['author'])  ($($live['date']))"
Write-Host "  service  up since $($live['started'])"
Write-Host ''
Write-Host 'GITHUB' -ForegroundColor Cyan
Write-Host "  commit   https://github.com/$Repo/commit/$sha"
Write-Host "  tree     https://github.com/$Repo/tree/$sha"

if ($sha -eq $mainSha) {
    Write-Host ''
    Write-Host '  Production is level with origin/main. Nothing pending.' -ForegroundColor Green
} else {
    $behind = (git rev-list --count "$sha..origin/main").Trim()
    Write-Host "  pending  https://github.com/$Repo/compare/$sha...main"
    Write-Host ''
    Write-Host "  Production is $behind commit(s) BEHIND origin/main:" -ForegroundColor Yellow
    git log --oneline "$sha..origin/main" | ForEach-Object { Write-Host "    $_" }
    Write-Host ''
    Write-Host '  Run `git push` to deploy. Expect ~90s of 500s during the build.' -ForegroundColor Yellow
}
Write-Host ''
