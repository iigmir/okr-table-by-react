import React from "react";
import { Form } from "semantic-ui-react";
import MyList from "./lists.js";

export default props =>
{
    let add_tasks = () => console.log("Submitted");
    let list = [ "Apples", "Banana", props.src ];
    return (
        <div>
            <MyList list={list} />
            <Form onSubmit={add_tasks}>
                <Form.Group inline>
                    <Form.Input placeholder="Add weekly target for OKR" />
                    <Form.Button content="Add weekly target" />
                </Form.Group>
            </Form>
        </div>
    )
};