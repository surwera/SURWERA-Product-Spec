#!/bin/bash

# Configuration
INPUT_FILE="one-pager.html"
OUTPUT_FILE="one-pager.pdf"
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Ensure we are in the script's directory
cd "$(dirname "$0")"

# Check if Chrome exists
if [ ! -f "$CHROME_PATH" ]; then
    echo "❌ Error: Google Chrome not found at $CHROME_PATH"
    echo "Please ensure Google Chrome is installed."
    exit 1
fi

echo "🚀 Exporting $INPUT_FILE to $OUTPUT_FILE..."

# Generate PDF
# --headless: Run without a GUI
# --disable-gpu: Recommended for headless
# --no-pdf-header-footer: Removes the timestamp/URL headers
# --print-to-pdf: The target output path
"$CHROME_PATH" \
    --headless \
    --disable-gpu \
    --no-pdf-header-footer \
    --print-to-pdf="$OUTPUT_FILE" \
    "file://$(pwd)/$INPUT_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Successfully generated $OUTPUT_FILE"
    # Try to open it if on macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "$OUTPUT_FILE"
    fi
else
    echo "❌ Failed to generate PDF."
    exit 1
fi
