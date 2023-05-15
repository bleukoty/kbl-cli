#!/bin/sh

# Get parameters (word to replace) (new word) (all files where iterate)
old_term=$1
new_term=$2
shift
shift
files=$@

# Process all files
for file in $files; do
    # Create temporary file
    cp $file "$file.tmp"
    # Substitute old_term by new_term
    sed "s/$old_term/$new_term/g" "$file.tmp" > "$file"
    # Remove temporary file
    rm -f "$file.tmp"
done;
