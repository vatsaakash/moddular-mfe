#!/bin/bash
# ============================================================
# Deploy to GitHub Pages
# Usage: bash scripts/deploy.sh
# ============================================================

set -e

# Change to the root directory of the project
cd "$(dirname "$0")/.."

echo "🏗️  Building Next.js static export..."
NEXT_PUBLIC_BASE_PATH="/moddular-mfe" npm run build

echo ""
echo "🏗️  Building Storybook..."
npm run build-storybook

echo ""
echo "📦  Merging builds..."
# Copy storybook output into the Next.js export folder
cp -r storybook-static out/storybook
touch out/.nojekyll

echo ""
echo "🚀  Deploying to GitHub Pages..."
npx -y gh-pages -d out --dotfiles

echo ""
echo "✅  Deployed successfully!"
echo "   Site: https://$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | cut -d'/' -f1).github.io/moddular-mfe/"
echo "   Storybook: https://$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | cut -d'/' -f1).github.io/moddular-mfe/storybook/"
