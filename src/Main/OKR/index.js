import React from "react";
import { Header } from "semantic-ui-react";
import MyList from "../components/lists.js";

class OKR extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { list: [123,456,789,0] };
    }
    delete_item({ event, index })
    {
        console.log({ event, index });
        return;
    }
    render()
    {
        return (
        <div id="OKR">
            <Header as="h1">Object</Header>
            <p>To do something</p>
            <Header as="h2">Key result</Header>
            <MyList list={ this.state.list } delete_item={ this.delete_item } />
        </div>
        );
    }
};

export default OKR;