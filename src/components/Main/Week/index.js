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
    delete_item({ event, index })
    {
        let new_list = this.state.list;
        new_list.splice(index, 1);
        this.setState({ list: new_list });
    }
    
    render()
    {
        return (
        <div id="Week">
            <MyList list={ this.state.list } delete_item={ this.delete_item } />
            <Form onSubmit={ this.add_tasks.bind(this) }>
                <Form.Group inline>
                    <Form.Input defaultValue={ this.state.task_value } onChange={ this.change_task_value.bind(this) } />
                    <Form.Button content="Add weekly target" />
                </Form.Group>
            </Form>
        </div>
        );
    }
};

export default Week;