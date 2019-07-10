import React from "react";
import { List } from "semantic-ui-react";

let list_component = list => list.map( (item, index) => (
    <List.Item key={index}>
        <List.Icon name="delete" />
        <List.Content>{ item }</List.Content>
    </List.Item>
) );

export default props => (<List bulleted> { list_component( props.list ) } </List>);