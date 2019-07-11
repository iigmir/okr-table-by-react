import React from "react";
import { Modal, Button } from "semantic-ui-react";

class TextInput extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            open: props.open
        };
        this.modal_response_method = props.modal_response_method;
    }
    emit_to_parent({ event, bool })
    {
        let content = bool === true ? "foobar" : "";
        let r = {
            event,
            bool,
            content
        };
        this.modal_response_method(r);
    }
    render()
    {
        return (
        <Modal open={ this.props.open } closeOnDimmerClick={ false }>
            <Modal.Header>Delete Your Account</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete your account?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={ event => this.emit_to_parent({ event, bool: false }) }> Discard </Button>
                <Button positive onClick={ event => this.emit_to_parent({ event, bool:  true }) }> Submit </Button>
            </Modal.Actions>
        </Modal> );
    }
};

export default TextInput;