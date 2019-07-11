import React from "react";
import { Header, Button } from "semantic-ui-react";
import MyList from "../components/lists.js";
import TextInput from "../components/TextInputModal.js";

class OKR extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: [123,456,789,0],
            key_object: "Change the world!",
            modal_actived: false
        };
    }
    delete_item({ event, index })
    {
        console.log({ event, index });
        return;
    }
    set_modal_actived()
    {
        this.setState({ modal_actived: !this.state.modal_actived });
        return;
    }
    render()
    {
        return (
        <div id="OKR">
            <Header as="h1">Object</Header>
            <p>{ this.state.key_object }</p>
            <Header as="h2">Key result</Header>
            <Button size="small" onClick={ this.set_modal_actived.bind(this) }>Add modal</Button>
            <MyList list={ this.state.list }  />
            <TextInput open={ this.state.modal_actived } close_method={ this.set_modal_actived.bind(this) }/>
        </div>
        );
    }
};

export default OKR;