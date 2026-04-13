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
    title: "APPCSC Framework - How to use",
});
e.page(
    <div id="bodies2">
        <pre id="pre2">
            In this page to show you how to
            use the APPCSC Framework on your webpage:
            <ul>
                <li>Step 1: "Get Framework."

                    Get the APPCSC Framework code by visiting the official appcsc.js link. 
                    Right-click and select "View Page Source," then copy the 
                    entire engine code to your clipboard.
                    Or you can use the view-source: protocol in your browser's address bar.</li>

                <li>Step 2: "Find the host site."
                    
                    Choose a website host to store your files:

                    On Firebase (Local IDE Method): 
                    1. Open your Local IDE (like VS Code or GitHub Codespaces).
                    2. Open the terminal and type: npm install -g firebase-tools
                    3. Type "firebase login" to connect your account.
                    4. Type "firebase init hosting" and select your project.
                    5. This creates a "public" folder. Create appcsc.js inside it 
                       and paste your engine code.
                    6. To go live, type: firebase deploy

                    On Neocities: Log in to your Neocities account and click "Edit Site." 
                    Click "New File," name it appcsc.js, and paste the code you copied.

                    On GitHub: Click the "+" icon in the top right and select "New repository." 
                    Name your repository and ensure Visibility is set to "Public." 
                    Inside the repo, click "Add file" to create index.html and appcsc.js.

                    On GitLab: Click "New project/repository" then "Create blank project." 
                    Set it to "Public." Note: GitLab requires your files to be 
                    inside a directory named "public".
                    Add a file named .gitlab-ci.yml in the root and use this script:
                     
                    <iframe src="glciyml.txt" style="border:none; width:100%; height:150px;"></iframe>

                    Once the pipeline finishes, find your URL under "Deploy > Pages."</li>

                <li>Step 3: "Loading Script Webpage."

                    Now, set up your logic and HTML. Create an index.js and use this boilerplate:

                    <iframe src="boilerplatecode.txt" style="border:none; width:100%; height:150px;"></iframe>

                    Then, set up your index.html to link the engine:

                    <iframe src="index.txt" style="border:none; width:100%; height:150px;"></iframe>

                    And Done! Now you have your own APPCSC application webpage. Enjoy!
                </li>
            </ul>
</pre>
    </div>
);
e.style(
    'div#bodies2', {
        color: "#fff",
        position: "absolute",
        margin: "100px",
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