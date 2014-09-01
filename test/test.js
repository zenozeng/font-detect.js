var fonts = '"Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN Normal", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp"'.replace(/"/g, '').split(', ');

// don't use forEach
// this test have to be runned in IE6
fontDetect(fonts, function(err, results) {
    for(var i = 0; i < results.length; i++) {
        var available = results[i],
            font = fonts[i];
        available = available ? "True" : "False";
        document.body.innerHTML += '<span>' + font + '</span>: ' + available + '<br>';
    }
});
