#!/bin/bash

PROJECT_PATH="$(dirname $0)/../"

cd $PROJECT_PATH

if [ -d node_modules ]; then
  echo -n Running eslint...
  node_modules/.bin/eslint ./src/**/*.ts
  LINTING=$?
  if [[ $LINTING -eq 0 ]]; then
    echo "Linting OK"
  fi
  exit $LINTING
else
  exit 0
fi
