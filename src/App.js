import React from "react";
import Link from "./components/App/Link.js";
import ReactLogo from "./components/App/ReactLogo.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <ReactLogo logo={logo} />
            <Link />
        </div>
    );
}

export default App;
