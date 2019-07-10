import "semantic-ui-css/semantic.min.css";
import React from "react";
import Link from "./components/App/Link.js";
import ReactLogo from "./components/App/ReactLogo.js";
import Navigator from "./components/Navigator/index.js";
import logo from "./logo.svg";

function App() {
    return (
    <div>
        <Navigator />
        <div>
            <ReactLogo logo={logo} />
            <Link />
        </div>
    </div>
    );
}

export default App;
