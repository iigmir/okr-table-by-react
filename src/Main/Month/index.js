import React from "react";
import { Header } from "semantic-ui-react";
import MyList from "../components/lists.js";

class Month extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: [123,456,789,0],
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
            <Header as="h1">Monthly objects</Header>
            <MyList list={ this.state.list } delete_item={ this.delete_item } />
        </div>
        );
    }
};


export default Month;