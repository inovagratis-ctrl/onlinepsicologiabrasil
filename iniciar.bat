@echo off
echo ========================================
echo    Psicologia Online Brasil - Iniciando...
echo ========================================
echo.

cd /d "%~dp0"

echo Instalando dependencias...
call npm install

echo.
echo Iniciando o servidor...
echo.
echo Acesse o site em: http://localhost:3000
echo.
echo Para fechar, pressione Ctrl + C
echo.

call npm run dev
