e.head({
    title: "APPCSC Framework Webpage",
});
e.page(
    <div id="bodies"></div>
);
e.page(
    <div id="footer">
            <h1 id="footer">APPCSC v0.1 
                <a href="/">Home</a>
                <a href="#">PlayGround</a>
                <a href="how to use.html">How to use</a>
                <a href="about.html">About</a>
            </h1>
        </div>
);
e.page(
    <h1 id="msg">
    <center>
        <p>
        APPCSC / Engine Javascript Framework
        <pre>
            APPCSC is built with Javascript engine script made
            this Engine Framework can handle of APPCSC Application.
            This application can be use for webpage edit and easy to
            use and lightweight. to get this application,
            <a href="how to use.html">Click here</a> to get started with APPCSC framework.
        </pre>
        </p>
        </center>
    </h1>
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
    },
    'div#footer', {
        background: "#333",
        width: "100%",
        height: "80px",
        position: "absolute",
        margin: "-8px",
        fontFamily: "arial",
        color: "#fff",
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
        fontSize: "16px",
    },
    'h1#msg', {
        color: "#fff",
        position: "absolute",
        marginLeft: "35%",
        marginTop: "300px",
        display: "flex",
        fontFamily: "arial",
    },
);