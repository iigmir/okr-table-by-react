import React from "react";
import { Header, Button } from "semantic-ui-react";
import MyList from "../components/lists.js";
import TextInput from "../components/TextInputModal.js";

class Month extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: ["Hiring people", "Doing business"],
            modal_actived: false,
            src: props.src
        };
    }
    delete_item({ event, index })
    {
        let new_list = this.state.list;
        new_list.splice(index, 1);
        this.setState({ list: new_list });
    }
    set_modal_actived()
    {
        this.setState({ modal_actived: !this.state.modal_actived });
    }
    active_modal(modal_for)
    {
        this.setState({ modal_for });
        this.set_modal_actived();
    }
    modal_response_method(payload)
    {
        let list = [ ...this.state.list ];
        if ( payload.bool === true ) { list.push( payload.content ) }
        this.set_modal_actived();
        this.setState({ list });
        return;
    }
    render()
    {
        return (
        <div id="Target">
            <Header as="h1" textAlign="center">Monthly objects</Header>
            <Button size="mini" onClick={ event => this.active_modal("key_object") }>Add monthly objects</Button>
            <MyList list={ this.state.list } delete_item={ this.delete_item } />
            <TextInput open={ this.state.modal_actived } modal_response_method={ this.modal_response_method.bind(this) }/>
        </div>
        );
    }
};


export default Month;