import "semantic-ui-css/semantic.min.css";
import React from "react";
import Link from "./components/App/Link.js";
import Navigator from "./components/Navigator/index.js";
import logo from "./logo.svg";

function App() {
    return (
    <div>
        <Navigator logo={logo} title_name="OKR Sheet" />
        <Link />
    </div>
    );
}

export default App;
