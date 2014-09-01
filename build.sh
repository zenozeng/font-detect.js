#!/bin/bash
coffee -p src/font-detect.coffee > font-detect-cmd.js
browserify font-detect-cmd.js -s fontDetect > font-detect-umd.js
