#!/bin/bash

# Canva MCP Server Quick Start Script

echo "🎨 Canva MCP Server Quick Start"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or later is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Check for environment variables
if [ -z "$CANVA_CLIENT_ID" ] || [ -z "$CANVA_CLIENT_SECRET" ]; then
    echo "⚠️  Warning: Canva API credentials not set"
    echo ""
    echo "Please set the following environment variables:"
    echo "  export CANVA_CLIENT_ID='your_client_id'"
    echo "  export CANVA_CLIENT_SECRET='your_client_secret'"
    echo "  export CANVA_REDIRECT_URI='http://localhost:8001/auth/callback'  # Optional"
    echo ""
    echo "Get your credentials at: https://www.canva.com/developers/apps"
    echo ""
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build the project
echo "🔨 Building project..."
npm run build
echo ""

# Start the server
echo "🚀 Starting Canva MCP Server..."
echo ""
echo "Server will be available at:"
echo "  • SSE endpoint: http://localhost:8001/mcp"
echo "  • OAuth callback: http://localhost:8001/auth/callback"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run start

