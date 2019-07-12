import React from "react";
import { Menu, Image } from "semantic-ui-react";
import "./index.css";

class Navigator extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            r_u_lucky: "",
            api_loaded: false,
            showit: false
        };
    }
    componentDidMount()
    {
        fetch("https://yesno.wtf/api").then( r => r.json() ).then( r => this.handle_yesno_api(r) );
    }
    handle_yesno_api( res )
    {
        this.setState({ r_u_lucky: res.answer, api_loaded: true });
    }
    set_showit()
    {
        if( this.state.api_loaded === true )
        {
            this.setState({ shown: !this.state.shown });
        }
    }
    render()
    {
        let is_lucky_component;
        let { logo, title_name } = this.props;
        if( this.state.shown === true )
        {
            is_lucky_component = <Menu.Item> Are you lucky? { this.state.r_u_lucky } </Menu.Item>;
        }
        return (
        <Menu as="nav">
            <Menu.Item onClick={ this.set_showit.bind(this) }> <Image className="App-logo" size="mini" src={ logo } /> </Menu.Item>
            <Menu.Item> { title_name } </Menu.Item>
            { is_lucky_component }
        </Menu>
        );
    }
};

export default Navigator;