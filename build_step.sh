#!/bin/bash

echo "Build script"

# add the commands here
chmod +x ./build_step.sh
npm install
npm run build
