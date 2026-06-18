@echo off
cd /d "C:\Users\usuario pc\Documents\claude code"

echo Removiendo node_modules del tracking de git...
git rm -r --cached fenz-react/node_modules/ 2>nul
git rm -r --cached fenz-react/dist/ 2>nul

echo Commiteando limpieza...
del /f /q ".git\HEAD.lock" 2>nul
git add .gitignore
git commit -m "fix: remover node_modules del repo, actualizar .gitignore"
git push origin main

echo.
echo Listo. El repo quedo limpio.
pause
