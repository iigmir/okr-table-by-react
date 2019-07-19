import React from "react";
import { List, Label } from "semantic-ui-react";
import "./lists.css";

class MyList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { list: props.list };
        this.delete_item = props.delete_item;
    }
    render()
    {
        let liststyle = { cursor: "pointer" };
        let list_item = list => list.map( (item, index) => (
        <List.Item key={index}>
            <List.Icon
                name="delete"
                style={liststyle}
                className="binding-icon"
                onClick={ event => this.delete_item({event, index}) }
            />
            <Label color="red" as="span" horizontal>
                Fruit
            </Label>
            { item }
        </List.Item>
        ) );
        return ( <List> { list_item( this.props.list ) } </List> );
    }
};

export default MyList;