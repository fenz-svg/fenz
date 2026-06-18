@echo off
cd /d "C:\Users\usuario pc\Documents\claude code"
del /f /q ".git\HEAD.lock" 2>nul
git add index.html
git commit -m "Actualizar meta tag Google Search Console para GitHub Pages"
git push origin main
pause
