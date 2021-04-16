#!/bin/bash

PROJECT_PATH="$(dirname $0)/../"
FILES=$(find src -follow -name "*.ts")

cd $PROJECT_PATH

echo Installing in $(pwd)

if [ -d node_modules ]; then
  scripts/build.sh
  BUILD=$?
  
  exit $BUILD
else
  exit 0
fi
