import React from "react";
import { Modal, Button, Input } from "semantic-ui-react";

class TextInput extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.modal_response_method = props.modal_response_method;
    }
    emit_to_parent({ event, bool })
    {
        let content = bool === true ? "foobar" : "";
        let payload = {
            event,
            bool,
            content
        };
        // debugger;
        this.modal_response_method(payload);
    }
    render()
    {
        return (
        <Modal basic size="small" open={ this.props.open } closeOnDimmerClick={ false }>
            <Modal.Header>Input what you try to type</Modal.Header>
            <Modal.Content>
                <Input placeholder="Awaiting..." />
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={ event => this.emit_to_parent({ event, bool: false }) }> Discard </Button>
                <Button positive onClick={ event => this.emit_to_parent({ event, bool:  true }) }> Submit </Button>
            </Modal.Actions>
        </Modal> );
    }
};

export default TextInput;