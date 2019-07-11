import React from "react";
import { Header } from "semantic-ui-react";
import MyList from "../components/lists.js";

class Targets extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: ["ofdna", "kbdfshkjsdnf erhfdsd"],
            src: props.src
        };
    }
    delete_item({ event, index })
    {
        console.log({ event, index });
        return;
    }
    render()
    {
        return (
        <div id="Target">
            <Header as="h1">Other targets</Header>
            <MyList list={ this.state.list } delete_item={ this.delete_item } />
        </div>
        );
    }
};


export default Targets;