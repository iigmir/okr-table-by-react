import React from "react";
import { Menu, Image } from "semantic-ui-react";
import "./index.css";

function Navigator(props)
{
    return (
    <Menu>
        <Menu.Item>
            <Image className="App-logo" size="mini" src={ props.logo } />
        </Menu.Item>
        <Menu.Item>
            { props.title_name }
        </Menu.Item>
    </Menu> );
}

export default Navigator;