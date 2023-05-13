#!/bin/sh

CURRENT_USER_FOLDER=$1

criteria_1="*.ts.txt"
criteria_2="*.json.txt"

(cd $CURRENT_USER_FOLDER &&
for file in $(find . -name "$criteria_1") $(find . -name "$criteria_2"); do
    new_file=$(echo $file | sed "s/\.txt//g")
    # echo "old : $file => new : $new_file"
    mv -- "$file" "$new_file"
done
)


