@echo off
:: Adiciona o Node.js ao PATH para garantir que o npx funcione
set PATH=%PATH%;C:\Program Files\nodejs

echo Iniciando o servidor local...
echo O site abrirá automaticamente no seu navegador.
echo IMPORTANTE: Nao feche esta janela enquanto estiver usando o site.

:: Abre o navegador após 2 segundos (tempo para o servidor iniciar)
timeout /t 2 /nobreak >nul
start http://127.0.0.1:8080

:: Inicia o servidor
call npx -y http-server
pause
