import "semantic-ui-css/semantic.min.css";
import React from "react";
import Main from "./components/Main/index.js";
import Navigator from "./components/Navigator/index.js";
import logo from "./logo.svg";
import { createStore } from "redux";
import reducer from "./reducers/index.js";

const store = createStore(reducer);

function App() {
    console.log( store.getState() );
    return (
    <div>
        <Navigator logo={logo} title_name="OKR Sheet" />
        <Main />
    </div>
    );
}

export default App;
