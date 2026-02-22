#!/bin/bash

OUTPUT_FILE="project.md"

# Clear output file if it exists
> "$OUTPUT_FILE"

{
    # Print project structure
    echo "Project Structure:"
    find . -maxdepth 4 -not -path '*/.*' -not -path './node_modules*' -not -path './.next*' -not -path './build*' -not -path './dist*' -not -name 'package-lock.json' -not -name "$OUTPUT_FILE" -not -name '*.ico' -not -name '*.png' -not -name '*.jpg' -not -name '*.jpeg' -not -name '*.svg' | sed 's|^\./||'

    echo "================================================================================"

    # Function to print file content
    print_file() {
        local file="$1"
        if [ -f "$file" ]; then
            echo "File: $file"
            echo "--------------------------------------------------------------------------------"
            cat "$file"
            echo ""
            echo "================================================================================"
        fi
    }

    # Print specific root configuration files
    for file in package.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs tailwind.config.ts tailwind.config.js; do
        if [ -f "$file" ]; then
            print_file "$file"
        fi
    done

    # Print markdown documentation files in root
    for file in *.md; do
        if [ -f "$file" ] && [ "$file" != "$OUTPUT_FILE" ]; then
            print_file "$file"
        fi
    done

    # Print source files in src
    if [ -d "src" ]; then
        find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.scss" \) | while read -r file; do
            print_file "$file"
        done
    fi
} >> "$OUTPUT_FILE"

echo "Project source code has been written to $OUTPUT_FILE"
