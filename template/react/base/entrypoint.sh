#!/bin/bash

CONFIG=$(/app/build-config.sh)

sed -i "s|<head>|<head><script>$CONFIG</script>|g" /usr/share/nginx/html/index.html

TIMESTAMP=$(echo $SERVICE_VERSION | awk '{split($0,a,"-"); print a[3]}')
DATE=$(date +'%Y-%m-%d %H:%M:%S' -d "@$TIMESTAMP" 2>/dev/null)
echo "{\"build\": \"$SERVICE_VERSION\", \"date\": \"$DATE\"}" > /usr/share/nginx/html/version.json

nginx -g 'daemon off;'
