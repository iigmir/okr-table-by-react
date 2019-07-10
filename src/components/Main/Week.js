import React from "react";
import { List, Form, Input, Button } from "semantic-ui-react";

export default props => (
<div>
    <List bulleted>
        <List.Item>Apples</List.Item>
        <List.Item>Oranges</List.Item>
        <List.Item>{ props.src }</List.Item>
    </List>
    <Form>
        <Form.Group inline>
            <Form.Input placeholder="Add weekly target for OKR" />
            <Form.Button content="Add weekly target" />
        </Form.Group>
    </Form>
</div>
);