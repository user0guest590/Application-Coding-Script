e.head({
    title: "APPCSC Framework - About"
})
//
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
//
e.page(
    <pre>
        Hello There!

        My name is Sam and i'm the owner of this site. I built this framework using JavaScript to control
        things like page structure, styling, and scripts. This webpage is hosted by Netlify.
        
        If you want to use this application, follow the "How to use" link to see how to create your own 
        pages with the APPCSC framework. This engine is designed to make coding easy, lightweight, and simple.
        
        APPCSC is free to use for anyone, but I am not responsible if the code has bugs or issues. 
        Please read the "How to use" page for more details on how to get started.

        Thank you for reading my message!





































        I am not good at english as much ;-;
    </pre>
);
e.style(
    "pre", {
        color: "#fff",
        position: "absolute",
        marginTop: "100px",
        fontFamily: "arial",
        fontSize: "18px",
    },
);

(function() {
    let link = document.querySelector("link[rel*='icon']");
    
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    
    link.href = 'appcsc-logo.png';
})();
