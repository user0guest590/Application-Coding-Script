e.page(
    <div id="bodies"></div>
);
e.page(
    <div id="footer">
            <h1 id="footer">APPCSC v0.2 
                <a href="/">Home</a>
                <a href="#">PlayGround</a>
                <a href="how to use.html">How to use</a>
                <a href="about.html">About</a>
                <a href="new.html">New</a>
            </h1>
        </div>
);
e.style(
    'div#bodies', {
        fontFamily: "arial",
        background: "#222",
        color: "#fff",
        width: "100%",
        height: "8374px",
        position: "fixed",
        margin: "-8px",
        zIndex: "-9",
    },
    'div#footer', {
        background: "#333",
        width: "100%",
        height: "80px",
        position: "absolute",
        margin: "-8px",
        fontFamily: "arial",
        color: "#fff",
        zIndex: "1",
    },
    'a', {
        fontSize: "16px",
        color: "#aaa",
    },
    'h1#footer', {
        marginLeft: "80px",
    },
    'pre', {
        fontFamily: "arial",
    }
);