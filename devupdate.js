/* appcsc.js - Animation & Nested Style Engine */

function parseFramework(rawCode, parent) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const body = document.body || document.getElementsByTagName('body')[0];
    let app = parent || document.getElementById('app');

    if (!app && !parent) {
        app = document.createElement('div');
        app.id = 'app';
        body.appendChild(app);
    }

    const camelToDash = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase();

    // Helper to turn an object into CSS string (handles nesting for Keyframes)
    function buildCSS(obj, isKeyframe = false) {
        let str = "";
        for (let key in obj) {
            let val = obj[key];
            if (typeof val === "object") {
                // Nested block: e.g., "from: { ... }" or "50%: { ... }"
                str += key + " { " + buildCSS(val) + " } ";
            } else {
                // Standard property: e.g., "opacity: '1'"
                if (typeof val === "number") val += "px";
                str += camelToDash(key) + ": " + val + "; ";
            }
        }
        return str;
    }

    const e = {
        head: function(obj) {
            if (obj.title) document.title = obj.title;
            let el = document.createElement(obj.tag || 'meta');
            for (let key in obj) {
                if (key === 'title' || key === 'tag') continue;
                el.setAttribute(camelToDash(key), obj[key]);
            }
            head.appendChild(el);
        },

        style: function() {
            let css = "";
            for (let i = 0; i < arguments.length; i += 2) {
                let selector = arguments[i];
                let props = arguments[i + 1];
                // Check if it's a Keyframe or a standard Selector
                css += selector + " { " + buildCSS(props) + " } ";
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
            const ext = file.split('.').pop().toLowerCase();
            if (ext === 'css') {
                const link = document.createElement('link');
                link.rel = 'stylesheet'; link.href = file;
                head.appendChild(link);
            } else if (ext === 'html' || ext === 'htm') {
                fetch(file).then(r => r.text()).then(html => e.page(html));
            } else {
                fetch(file).then(r => r.text()).then(code => parseFramework(code, app));
            }
        }
    };

    // Pre-processor for multi-line e.page support
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
        console.error("Export Error:", err);
    }
}

window.onload = () => {
    const scripts = document.querySelectorAll('script[type="framework"]');
    scripts.forEach(s => parseFramework(s.innerHTML));
};