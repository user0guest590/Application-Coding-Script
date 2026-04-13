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
e.head({
    title: "APPCSC Framework - New GetJS Framework",
});
e.page(
    <div id="bodies1">
        <h1>
            New GetJS Framework
        </h1>
        <img src="screenshot (1).png" width="50%" height="60%" style="border:2px solid #fff;"></img>
        <pre>
            The new of a GetJS Framework is built with Javascript engine script made
            this Engine Framework can handle of APPCSC Application. This
            application can be use for list of the coding and the code is
            different between of APPCSC [Application Coding Script] because the
            code it look simple but it take more long than APPCSC script.
            Get the GetJS Framework by visiting the site with a
            <a>https://getjs.web.app</a> and then use a view-source: to get
            the code of the engine framework and to be sure that one the engine
            use a split core of the GetJS and it take alittle minute before you
            can create your own page.
        </pre>
        <pre>
            And here is a code of the boilerplate to use your own page:
            <iframe src="getjspage.txt"></iframe>
            and also the main html one will use like this:
            <iframe src="getjspagehtml.txt"></iframe>
        </pre>
    </div>
);
e.style(
    'div#bodies1',{
        color: "#fff",
        position: "absolute",
        margin: "100px",

        fontFamily: "arial",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    'invis',{
        color: "rgba(0,0,0,0)",
        visibility: "hidden",
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