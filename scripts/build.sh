#!/bin/bash

echo Running tsc...
node_modules/.bin/tsc
COMPILATION=$?

./scripts/lint.sh
LINTING=$?

echo Copy package.json...
cp -a package.json target/dist
COPYING_PACKAGE=$?

exit $(( $COMPILATION + $LINTING + $COPYING_PACKAGE ))
