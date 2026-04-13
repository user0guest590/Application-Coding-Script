/* appcsc.js - The Complete Export Engine */

function parseFramework(rawCode) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const body = document.body || document.getElementsByTagName('body')[0];
    let app = document.getElementById('app');

    if (!app) {
        app = document.createElement('div');
        app.id = 'app';
        body.appendChild(app);
    }

    const camelToDash = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase();

    const e = {
        // --- e.head (Meta, Titles, and Document Tags) ---
        head: function(obj) {
            if (obj.title) document.title = obj.title;
            
            // If user provides a 'tag', create that specific element
            if (obj.tag) {
                let el = document.createElement(obj.tag);
                for (let key in obj) {
                    if (key !== 'tag') el.setAttribute(camelToDash(key), obj[key]);
                }
                head.appendChild(el);
            } 
            // Otherwise, treat as meta description/link helper
            else {
                for (let key in obj) {
                    if (key === 'title') continue;
                    let meta = document.createElement('meta');
                    meta.setAttribute('name', key);
                    meta.setAttribute('content', obj[key]);
                    head.appendChild(meta);
                }
            }
        },

        style: function() {
            let css = "";
            for (let i = 0; i < arguments.length; i += 2) {
                let selector = arguments[i];
                let props = arguments[i + 1];
                css += selector + " { ";
                for (let key in props) {
                    let value = props[key];
                    if (typeof value === "number") value += "px";
                    css += camelToDash(key) + ": " + value + "; ";
                }
                css += " } ";
            }
            const styleEl = document.createElement('style');
            styleEl.innerHTML = css;
            head.appendChild(styleEl);
        },

        page: function(content) {
            const temp = document.createElement('div');
            temp.innerHTML = content;
            while (temp.firstChild) { app.appendChild(temp.firstChild); }
        },

        import: function(file) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', file, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) parseFramework(xhr.responseText);
            };
            xhr.send();
        }
    };

    // Pre-processor to handle multi-line e.page without backticks
    const processedCode = rawCode.replace(/e\.page\s*\(([\s\S]*?)\)\s*;/g, (m, inner) => {
        let clean = inner.trim();
        if ((clean.startsWith("'") && clean.endsWith("'")) || (clean.startsWith('"') && clean.endsWith('"'))) {
            clean = clean.substring(1, clean.length - 1);
        }
        return "e.page(`" + clean + "`);";
    });

    try {
        new Function('e', processedCode)(e);
    } catch (err) {
        console.error("Export Engine Error:", err);
    }
}

window.onload = () => {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].getAttribute('type') === 'framework') {
            parseFramework(scripts[i].innerHTML);
        }
    }
};