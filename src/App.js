import "semantic-ui-css/semantic.min.css";
import React from "react";
import Main from "./components/Main/index.js";
import Navigator from "./components/Navigator/index.js";
import logo from "./logo.svg";

function App()
{
    return (
    <main>
        <Navigator logo={logo} title_name="OKR Sheet" />
        <Main />
    </main>
    );
}

export default App;
