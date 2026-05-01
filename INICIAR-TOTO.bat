@echo off
echo.
echo  =========================================
echo   TOTO WORLD CUP 2026 - Dev Server
echo  =========================================
echo.
echo  Iniciando servidor local...
echo  Cuando veas "Local: http://localhost:5173"
echo  abre tu browser en:
echo.
echo      http://localhost:5173
echo.
echo  Presiona Ctrl+C para detener.
echo  =========================================
echo.
cd /d "%~dp0toto-app"
npm run dev
pause
