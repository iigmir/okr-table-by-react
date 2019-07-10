import React from "react";
import { Form } from "semantic-ui-react";
import MyList from "./lists.js";

class Week extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: [ "Apples", "Banana", props.src ],
            task_value: "Add weekly target for OKR"
        };
    }
    add_tasks(event)
    {
        let new_list = this.state.list;
        event.preventDefault();
        new_list.push(this.state.task_value);
        this.setState({ list: new_list });
    }
    change_task_value(event)
    {
        this.setState({ task_value: event.target.value });
    }
    
    render()
    {
        return (
        <div>
            <MyList list={ this.state.list } />
            <Form onSubmit={ this.add_tasks.bind(this) }>
                <Form.Group inline>
                    <Form.Input defaultValue={ this.state.task_value } onChange={ this.change_task_value } />
                    <Form.Button content="Add weekly target" />
                </Form.Group>
            </Form>
        </div>
        );
    }
};

let ofoooofoffo = props =>
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
            event.preventDefault();
            new_list.push(data.task_value);
            data.list = new_list;
            // console.log( refs );
        },
    };
    // refs.form.reset();
    return (
    <div>
        <MyList ref="list" list={ data.list } />
        <Form onSubmit={ methods.add_tasks }>
            <Form.Group inline>
                <Form.Input defaultValue={ data.task_value } onChange={ methods.change_task_value } />
                <Form.Button content="Add weekly target" />
            </Form.Group>
        </Form>
    </div>
    );
};

export default Week;