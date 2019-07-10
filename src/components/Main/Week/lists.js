import React from "react";
import { List } from "semantic-ui-react";
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
        let list_component = list => list.map( (item, index) => (
            <List.Item key={index}>
                <List.Icon name="delete" onClick={ event => this.delete_item({ event, index }) }/>
                <List.Content>{ item }</List.Content>
            </List.Item>
        ) );
        return ( <List bulleted> { list_component( this.props.list ) } </List> );
    }
};

export default MyList;