import React from "react";
// import Link from "./components/App/Link.js";
// import ReactLogo from "./components/App/ReactLogo.js";
// import logo from "./logo.svg";
import { Rating, Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./components/App/App.css";

function App() {
    return (
    <div> Hello
        <Rating rating={1} maxRating={5} />
        <Button size="small" color="green">
            <Icon name="download" />
            Download
        </Button>
    </div>
        // <div className="App">
        //     <ReactLogo logo={logo} />
        //     <Link />
        // </div>
    );
}

export default App;
