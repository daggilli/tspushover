#!/bin/bash
PROJECT_PATH="$(dirname $0)/../"

if [[ ! -d node_modules ]];then
  npm install
fi

if [[ ! -d target || src/index.ts -nt target/dist/index.js ]];then
  scripts/build.sh
fi

node "${PROJECT_PATH}target/dist/index.js" "$@"
