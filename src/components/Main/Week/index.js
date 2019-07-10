import React from "react";
import { Form } from "semantic-ui-react";
import MyList from "./lists.js";

export default props =>
{
    let data = {
        list: [ "Apples", "Banana", props.src ],
        task_value: "Add weekly target for OKR"
    };
    let methods = {
        change_task_value: event => data.task_value = event.target.value,
        add_tasks: event =>
        {
            let new_list = data.list;
            new_list.push(data.task_value);
            data.list = new_list;
            event.preventDefault();
        },
    };
    return (
    <div>
        <MyList list={ data.list } />
        <Form onSubmit={ methods.add_tasks }>
            <Form.Group inline>
                <Form.Input defaultValue={ data.task_value } onChange={ methods.change_task_value } />
                <Form.Button content="Add weekly target" />
            </Form.Group>
        </Form>
    </div>
    );
};