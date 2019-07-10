import React from "react";
import { List, Form } from "semantic-ui-react";

export default props =>
{
    let add_tasks = () => console.log("Submitted");
    let lists = [ "Apples", "Banana", props.src ];
    let list_component = lists.map( (item, index) => <List.Item key={index}>{ item }</List.Item> );
    return (
        <div>
            <List bulleted> { list_component } </List>
            <Form onSubmit={add_tasks}>
                <Form.Group inline>
                    <Form.Input placeholder="Add weekly target for OKR" />
                    <Form.Button content="Add weekly target" />
                </Form.Group>
            </Form>
        </div>
    )
};