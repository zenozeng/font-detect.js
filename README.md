# Font-Detect.js

Detect Font using Javascript & @font-face.

## Introduction

Here is the brief introduction.

Suppose I want to test whether `WenQuanYi Micro Hei` is installed.
I insert a inline block `<div id="font-detect-test-block">0</div>` to body and set its font-family to `"WenQuanYi Micro Hei", font-detect-0-woff`. Font-detect-0-woff (only 1KB and only contains `0`) is a special font I made, the width of char `0` in this font is 0. So if `WenQuanYi Micro Hei` is installed the width of the inline block should be greater than 0 else it is 0.

Note: `0.woff` was encoded as a base64 string and was defined in font-detect.js.

## Usage

Simply include font-detect-umd.js.
When document is ready,
use the `fontDetect` to detect fonts.

```javascript
var fonts = '"Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN Normal", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp"'.replace(/"/g, '').split(', ');

var fontDetector = new FontDetector();

fontDetector.detect(fonts, function(err, results) {
    for(var i = 0; i < results.length; i++) {
        var available = results[i],
            font = fonts[i];
        available = available ? "True" : "False";
        document.body.innerHTML += '<span>' + font + '</span>: ' + available + '<br>';
    }
});
```

### Eot Support

IE 6 & IE 7 doesn't support Data URI, thus,
you have to pass eot path to FontDetector.

Copy src/0.eot to you path.

```javascript
var fontDetector = new FontDetector({eot: "YOUR EOT PATH TO YOUR PAGE"});
```

see also: test/test.js

## Known Issue

### Arial / Helvetica

In Linux, some safe fonts are mapped using `alias binding="same"`
```
$ fc-match Arial 
LiberationSans-Regular.ttf: "Liberation Sans" "Regular"
```

Defined in /etc/fonts/conf.d/30-metric-aliases.conf (debian jessie/sid)
What this conf did is alias similar/metric-compatible families from various sources.

I think this is not a serious issue, because the orginal and the fallback are very similar. And could be considered to be the same.

If you must, maybe you can use canvas and compare pixel by pixel to detect whether these fonts are installed.

## License

The MIT License (MIT)

Copyright (c) 2014 Zeno Zeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
