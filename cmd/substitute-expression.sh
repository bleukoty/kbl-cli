#!/bin/sh

# retrieve paramters
app_tmp_file=$1
app_name=$2;
app_port=$3;
app_index=$4;

echo "file : $1";
echo "name : $2";
echo "port : $3";
echo "file index 2 : $4";

# Change app_name | change app_port | create new file
sed "s/#app_name/$app_name/g" $app_tmp_file | sed "s/#app_port/$app_port/g" > $app_index;

# Remove template file copy
rm -f $app_tmp_file;
