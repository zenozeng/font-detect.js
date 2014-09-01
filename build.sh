#!/bin/bash
coffee -p src/font-detect.coffee > font-detect-cmd.js
browserify font-detect-cmd.js -s FontDetector > font-detect-umd.js
