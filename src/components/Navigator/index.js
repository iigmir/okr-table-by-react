import React from "react";
import { Menu, Image } from "semantic-ui-react";

function Navigator(props)
{
    return (
    <Menu>
        <Menu.Item>
            <Image size="mini" src={ props.logo } />
        </Menu.Item>
        <Menu.Item>
            { props.title_name }
        </Menu.Item>
    </Menu> );
}

export default Navigator;