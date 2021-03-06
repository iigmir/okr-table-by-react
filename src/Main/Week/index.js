import React from "react";
import { Form, Header } from "semantic-ui-react";
import MyList from "../components/lists.js";

class Week extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: [ "First target", "Second target", "Third target" ],
            task_value: "Add weekly target for OKR",
            tag_list: [ ["P1"], ["P1"], ["P2"], ]
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
            <Header as="h1" textAlign="center">Weekly objects</Header>
            <Form onSubmit={ this.add_tasks.bind(this) }>
                <Form.Group inline>
                    <Form.Input defaultValue={ this.state.task_value } onChange={ this.change_task_value.bind(this) } />
                    <Form.Button content="Add weekly target" />
                </Form.Group>
            </Form>
            <MyList list={ this.state.list } tag_list={ this.state.tag_list } delete_item={ this.delete_item } />
        </div>
        );
    }
};

export default Week;