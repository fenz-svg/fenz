@echo off
cd /d "C:\Users\usuario pc\Documents\claude code\fenz-react"

echo [1/4] Instalando dependencias...
call npm install

echo [2/4] Construyendo proyecto...
call npm run build

echo [3/4] Copiando build al repo de GitHub Pages...
xcopy /s /e /y "dist\*" "..\*"

echo [4/4] Publicando a GitHub Pages...
cd /d "C:\Users\usuario pc\Documents\claude code"
del /f /q ".git\HEAD.lock" 2>nul
git add -A
git commit -m "Deploy: nueva landing page React"
git push origin main

echo.
echo Listo. En unos minutos el sitio se actualiza en https://fenz-svg.github.io/fenz/
pause
