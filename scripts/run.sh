#!/bin/bash

# Exit immediately if a command exits with a non-zero status
# but let us handle Node/NPM check errors manually for a friendlier experience.

# Get the directory of the script and resolve the project root (one level up)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Define some pretty color formatting for messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}===============================================${NC}"
echo -e "${BLUE}    React & Vite Project Starter Script        ${NC}"
echo -e "${BLUE}===============================================${NC}"
echo ""

# Navigate to the project root
cd "$PROJECT_ROOT" || {
  echo -e "${RED}Error: Could not navigate to the project directory ($PROJECT_ROOT).${NC}"
  exit 1
}

# 1. Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo -e "${RED}[ERROR] Node.js is not installed on this computer!${NC}"
  echo -e "To run this application, you need Node.js."
  echo -e "Please download and install it from: ${BLUE}https://nodejs.org/${NC}"
  echo -e "Once installed, restart your terminal and try running this script again."
  echo ""
  exit 1
fi

# 2. Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo -e "${RED}[ERROR] npm is not installed on this computer!${NC}"
  echo -e "npm usually comes automatically with Node.js. Try reinstalling Node.js from: ${BLUE}https://nodejs.org/${NC}"
  echo ""
  exit 1
fi

# Show node and npm versions
NODE_VER=$(node -v)
NPM_VER=$(npm -v)
echo -e "${GREEN}✓ Found Node.js version:${NC} $NODE_VER"
echo -e "${GREEN}✓ Found npm version:    ${NC} $NPM_VER"
echo ""

# 3. Check if package.json exists (to make sure it is a valid project folder)
if [ ! -f "package.json" ]; then
  echo -e "${YELLOW}[WARNING] package.json was not found in: $PROJECT_ROOT${NC}"
  echo -e "If you haven't created a React app here yet, you can create one by running:"
  echo -e "  ${BLUE}npm create vite@latest . -- --template react-ts${NC}"
  echo -e "Then run this script again!"
  echo ""
  exit 1
fi

# 4. Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}[INFO] node_modules folder is missing. Installing dependencies...${NC}"
  echo -e "Running ${BLUE}npm install${NC}... This may take a minute or two."
  echo -e "${BLUE}-----------------------------------------------${NC}"
  
  if npm install; then
    echo -e "${BLUE}-----------------------------------------------${NC}"
    echo -e "${GREEN}✓ Dependencies installed successfully!${NC}"
    echo ""
  else
    echo -e "${BLUE}-----------------------------------------------${NC}"
    echo -e "${RED}[ERROR] npm install failed. Please check the error message above.${NC}"
    exit 1
  fi
fi

# 5. Run the dev server
echo -e "${GREEN}🚀 Starting the development server...${NC}"
echo -e "Running ${BLUE}npm run dev${NC}..."
echo -e "To stop the server and exit, press ${YELLOW}Control + C${NC} in this window."
echo ""
echo -e "${BLUE}-----------------------------------------------${NC}"

npm run dev
