/**!
 * @license MIT
 * * Copyright (c) 2026 APPCSC (Application Coding Script)
 * * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function(e, t) {
    if (typeof module === "object" && typeof module.exports === "object") t();
    else if (typeof define === "function" && define.amd) define([], t);
    else if (e = typeof globalThis !== "undefined" ? globalThis : e || self) t();
})(this, function() {
    "use strict";
    function e(t, n) {
        var r = document.head || document.getElementsByTagName('head')[0];
        var a = document.body || document.getElementsByTagName('body')[0];
        var o = n || document.getElementById('app');
        if (!o && !n) {
            o = document.createElement('div');
            o.id = 'app';
            a.appendChild(o);
        }
        var i = function(e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase();
        };
        function l(e, t) {
            var n = "";
            for(var r in e){
                var a = e[r];
                if (typeof a === "object") {
                    n += r + " { " + l(a) + " } ";
                } else {
                    if (typeof a === "number") a += "px";
                    n += i(r) + ": " + a + "; ";
                }
            }
            return n;
        }
        var d = {
            head: function(e) {
                if (e.title) document.title = e.title;
                var t = document.createElement(e.tag || 'meta');
                for(var n in e){
                    if (n === 'title' || n === 'tag') continue;
                    t.setAttribute(i(n), e[n]);
                }
                r.appendChild(t);
            },
            style: function() {
                var e = "";
                for(var t = 0; t < arguments.length; t += 2){
                    var n = arguments[t];
                    var a = arguments[t + 1];
                    e += n + " { " + l(a) + " } ";
                }
                var o = document.createElement('style');
                o.innerHTML = e;
                r.appendChild(o);
            },
            page: function(e) {
                var t = document.createElement('div');
                t.innerHTML = e;
                while(t.firstChild){
                    o.appendChild(t.firstChild);
                }
            },
            import: function(t) {
                var n = t.split('.').pop().toLowerCase();
                if (n === 'css') {
                    var a = document.createElement('link');
                    a.rel = 'stylesheet';
                    a.href = t;
                    r.appendChild(a);
                } else if (n === 'html' || n === 'htm') {
                    var i = new XMLHttpRequest();
                    i.open('GET', t, true);
                    i.onreadystatechange = function() {
                        if (i.readyState === 4 && i.status === 200) {
                            d.page(i.responseText);
                        }
                    };
                    i.send();
                } else {
                    var i = new XMLHttpRequest();
                    i.open('GET', t, true);
                    i.onreadystatechange = function() {
                        if (i.readyState === 4 && i.status === 200) {
                            e(i.responseText, o);
                        }
                    };
                    i.send();
                }
            }
        };
        var s = t.replace(/e\.page\s*\(([\s\S]*?)\)\s*;/g, function(e, t) {
            var n = t.replace(/^\s+|\s+$/g, '');
            if (n.indexOf("'") === 0 && n.lastIndexOf("'") === n.length - 1 || n.indexOf('"') === 0 && n.lastIndexOf('"') === n.length - 1) {
                n = n.substring(1, n.length - 1);
            }
            return "e.page('" + n.replace(/'/g, "\\'").replace(/\n/g, "\\n") + "');";
        });
        try {
            new Function('e', s)(d);
        } catch (e) {
            if (console && console.error) console.error("Export Error:", e);
        }
    }
    window.onload = function() {
        var t = document.querySelectorAll('script[type="framework"]');
        for(var n = 0; n < t.length; n++){
            e(t[n].innerHTML);
        }
    };
});
