import "semantic-ui-css/semantic.min.css";
import React from "react";
import Main from "./Main/index.js";
import Navigator from "./Navigator/index.js";
import logo from "./logo.svg";

function App()
{
    return (
    <div>
        <Navigator logo={logo} title_name="OKR Sheet" />
        <Main />
    </div>
    );
}

export default App;
