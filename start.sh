#!/bin/bash

# Navigate to the directory containing this script
cd "$(dirname "$0")"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js to run this server."
    exit 1
fi

# Run the server
echo "Starting the local development server..."
echo "Open your browser and navigate to http://localhost:3000"
echo "Press Ctrl+C to stop the server"
node server.js
