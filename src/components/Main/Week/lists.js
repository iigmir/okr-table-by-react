import React from "react";
import { List } from "semantic-ui-react";

// let lists = [ "Apples", "Banana", props.src ];

let list_component = list => list.map( (item, index) => (
    <List.Item key={index}>
        <List.Icon name="delete" />
        <List.Content>{ item }</List.Content>
    </List.Item>
) );

export default props => (<List bulleted> { list_component( props.list ) } </List>);