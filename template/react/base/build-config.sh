#!/bin/bash
set -e

ARRAY_VALUES=("NODE_ENV" \
        "API_URL")

result='window.env={};'
for value in ${ARRAY_VALUES[@]}; do
    result+="window.env.$value=\"${!value}\";"
done

echo $result
