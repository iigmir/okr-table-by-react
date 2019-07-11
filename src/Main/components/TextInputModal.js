import React from "react";
import { Modal, Button, Input } from "semantic-ui-react";

class TextInput extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            awaiting_value: "",
            type_error: false
        };
        this.modal_response_method = props.modal_response_method;
    }
    set_awaiting_value(event)
    {
        this.setState({ awaiting_value: event.target.value });
    }
    emit_to_parent({ event, bool })
    {
        let content = bool === true ? this.state.awaiting_value : null;
        let payload = { bool, content, event };
        if( this.state.awaiting_value.trim() !== "" || bool === false )
        {
            this.modal_response_method(payload);
        }
        // this.setState({ type_error: true });
        // console.log(this.state.type_error);
    }
    render()
    {
        return (
        <Modal
            basic
            size="small"
            open={ this.props.open }
            closeOnDimmerClick={ false }>
            <Modal.Header>Input what you try to type</Modal.Header>
            <Modal.Content>
                <Input
                    placeholder="Awaiting..."
                    error={ this.state.type_error }
                    value={ this.state.awaiting_value }
                    onChange={ this.set_awaiting_value.bind(this) }
                />
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={ event => this.emit_to_parent({ event, bool: false }) }> Discard </Button>
                <Button positive onClick={ event => this.emit_to_parent({ event, bool:  true }) }> Submit </Button>
            </Modal.Actions>
        </Modal> );
    }
};

export default TextInput;