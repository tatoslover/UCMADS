@echo off
echo Starting the local development server...
echo Open your browser and navigate to http://localhost:3000
echo Press Ctrl+C to stop the server

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install Node.js to run this server.
    pause
    exit /b
)

:: Run the server
node server.js
