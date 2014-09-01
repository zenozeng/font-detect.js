!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.fontDetect=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var css, detectFonts, inject, ready, remove, woff;

  woff = "data:font/woff;charset=utf-8;base64,d09GRk9UVE8AAAQYAAoAAAAABlwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAMQAAADSEQga8UZGVE0AAAG4AAAAGwAAABxqQJGNT1MvMgAAAdQAAABDAAAAYFYPXfBjbWFwAAACGAAAADcAAAFCAA0D1mhlYWQAAAJQAAAAKQAAADb9ITBXaGhlYQAAAnwAAAAZAAAAJAN7/ztobXR4AAACmAAAAAgAAAAIAfQAAG1heHAAAAKgAAAABgAAAAYAAlAAbmFtZQAAAqgAAAFZAAACjkaWZeZwb3N0AAAEBAAAABMAAAAg/4YAMnicY2RgYWFgZGTkCs0rySzJSU0xZGBkYmBk0PjBz/BDmvGHDNMPWeYf4izdQMAqw7CIX4aBQUCGYamgDAO7DMNpIQZmkGoXBl+GMOei1MSS1BSFpEqFqtS8fCBO19HRUSjPLMlQcMvPK3HLL0pPVTDSM1DQyCgpKbDS108DiqaBRPWK0/TyUks04Y5AuAYIBBmYGBkVFLv3/nDdy7h37++Yvcx7xdR/rHzPtvdPuegP198xf1zZ+fi6RbpFu3m4ANybP/V4nGNgYGBkAIIztovOg+jzjOV2ULoeAEMOBccAeJxjYGH8wviFgZWBgamLaQ8DA0MPhGZ8wGDIyAQUZWBjZoABRgYkEJDmmsJwgMGAwYBZ4b8FQxSGGgUgZAQAfmQKqgB4nGNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoQgvsH//xDy/0WoSgZGNgYYk2hAqvrBDgBrAQbjAHicY2BkYGAA4pys3ox4fpuvDNzML4AiDOcZy3ci01DAwcAEogAU4ghtAAAAeJxjYGRgYFb4b8EQxQADjAyogAkAMlIBuQAAAAH0AAAAAAAAAABQAAACAAB4nIWQzUoDMRSFT+wPFESkT5CNUGEmzZRuOluhC8Wl3bdMph2omTpNKe1eceebCL6Ca9euXfsE7vTMNBREsBOS+92TMzc3AXCCZwjsvgs8ehZo4cPzEZr48lzDmbjyXEdL3Htu4FS8eG5Sf6dT1FvMHqq/ShZo483zEY7x6bmGS3x7rqMt7jw3IMWT5yb1V/ZXwGAMxzWBxAQbrltmFrmPUwTVkFgjo3NGGnLXkstY0GGo9aCgGTt0OI4FYnQ5Uu9N916FJTNF1VA/5zMVZuxMIicbuTU255wGQSDXmZvJYW7dMC+mRvaUlp2Zc4u4202ppqWqlqmyxrHITXVK2eG8uk1EybrMzU1CvK60DCvcMjFJtmL87xox59+SOz3CACHXkG7N2GepX23Gcn80ORqEUdjTUf9QkyNqBR8nq/qSrF1WV1Use8LIFMsst1LrSGmt5YGCP/yzcc0AAAB4nGNgZgCD/80MRgxYAAAoRAG4AA==";

  css = "@font-face{\n    font-family: font-detect-0-woff;\n    src:url(data:font/woff;charset=utf-8;base64," + woff + ") format('woff');\n}\n#font-detect-test-block{display:inline-block;position:fixed;left:-100%;}";

  inject = function() {
    var elem, sheet;
    elem = document.getElementById('font-detect-test-block');
    if (elem == null) {
      elem = document.createElement('div');
      elem.id = 'font-detect-test-block';
      document.body.appendChild(elem);
    }
    sheet = document.getElementById('font-detect-styles');
    if (sheet == null) {
      sheet = document.createElement('style');
      sheet.id = 'font-detect-styles';
      sheet.innerHTML = css;
      return document.body.appendChild(sheet);
    }
  };

  remove = function() {
    var elem, sheet;
    elem = document.getElementById('font-detect-test-block');
    if (elem != null) {
      elem.remove();
    }
    sheet = document.getElementById('font-detect-styles');
    if (sheet != null) {
      return sheet.remove();
    }
  };

  ready = function(callback) {
    var elem;
    inject();
    elem = document.getElementById('font-detect-test-block');
    elem.style.fontFamily = 'font-detect-0-woff';
    if (elem.clientWidth > 0) {
      return setTimeout((function() {
        return ready(callback);
      }), 50);
    } else {
      return callback();
    }
  };

  detectFonts = function(fonts, callback) {
    return ready(function() {
      var elem, font, results, _i, _len;
      elem = document.getElementById('font-detect-test-block');
      results = [];
      for (_i = 0, _len = fonts.length; _i < _len; _i++) {
        font = fonts[_i];
        elem.style.fontFamily = '"#{font}", font-detect-0-woff';
        results.push(elem.clientWidth > 0);
      }
      callback(results);
      return remove();
    });
  };

  module["export"] = detectFonts;

}).call(this);

},{}]},{},[1])(1)
});