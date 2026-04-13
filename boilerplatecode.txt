e.head({
    title: "APPCSC Boilerplate",
});
e.page(
    <div id="footers">
        <h1 id="hf">APPCSC Boilerplate</h1>
    </div>
);
e.page(
    <div id="body">
        <h1 id="text">
        Welcome To the APPCSC Boilerplate!
        <pre>
            To get started. Open the index.js to create yor first very own page.
        </pre>
        </h1>
    </div>
);
e.style(
    'div#body', {
        display: "flex",
        justifyContent: "center",
        fontFamily: "arial",
        background: "#222",
        color: "#fff",
        width: "100%",
        height: "100%",
        position: "fixed",
        margin: "-8px",
    },
    'pre', {
        fontFamily: "arial",
        fontSize: "16px",
    },
    'h1#text', {
        marginTop: "400px",
    },
    'div#footers', {
        height: "80px",
        width: "100%",
        background: "#333",
        color: "#fff",
        fontFamily: "arial",
        margin: "-8px",
        position: "fixed",
        zIndex: "9",
    },
    "@keyframes fadeIn", {
    from: {
        opacity: "0"
    },
    to: {
        opacity: "1"
    },
},

"#text", {
    opacity: "0",
    animationName: "fadeIn",
    animationDuration: "1s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "forwards",
},
"h1#hf", {
    position: "fixed",
    left: "80px",
},
);