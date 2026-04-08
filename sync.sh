#!/bin/bash
MSG=${1:-"chore: sync $(date '+%Y-%m-%d %H:%M')"}
git add -A
git commit -m "$MSG"
git push origin main
echo "Sincronizado: $MSG"
