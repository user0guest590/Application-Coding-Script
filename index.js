e.head({
    title: "APPCSC Framework - Home",
});
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
e.page(
    <h1 id="msg">
        <center>
        <p>
        APPCSC / Engine Javascript Framework
        <pre>
            APPCSC is built on a custom JavaScript engine.
            This framework handles APPCSC applications
            with a focus on being lightweight and easy to
            use. To start building your own webpage,
            <a href="how to use.html">Click here</a> to get started with the APPCSC
            Open Source framework
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
        height: "100vh",
        position: "fixed",
        margin: "-8px",
        zIndex: "-999",
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
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        fontFamily: "arial",
        zIndex: "-9",
    },
);

(function() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function runTimer() {
      console.log();
      await sleep(1000);
      console.clear();
    }

    runTimer();
})();

(function() {
    let link = document.querySelector("link[rel*='icon']");
    
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    
    link.href = 'appcsc-logo.png';
})();