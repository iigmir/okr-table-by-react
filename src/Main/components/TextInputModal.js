import React from "react";
import { Modal, Button, Input } from "semantic-ui-react";

class TextInput extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            awaiting_value: "",
            not_compeleted: true
        };
        this.modal_response_method = props.modal_response_method;
    }
    set_awaiting_value(event)
    {
        let awaiting_value = event.target.value.trim();
        let not_compeleted = awaiting_value.length < 1;
        this.setState({ awaiting_value, not_compeleted });
    }
    emit_to_parent({ event, bool })
    {
        let content = bool === true ? this.state.awaiting_value : null;
        let payload = { bool, content, event };
        this.modal_response_method(payload);
        this.setState({ awaiting_value: "", not_compeleted: true });
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
                    value={ this.state.awaiting_value }
                    onChange={ this.set_awaiting_value.bind(this) }
                />
            </Modal.Content>
            <Modal.Actions>
                <Button
                    negative
                    onClick={ event => this.emit_to_parent({ event, bool: false }) }
                >
                    Discard
                </Button>
                <Button
                    positive
                    onClick={ event => this.emit_to_parent({ event, bool:  true }) }
                    disabled={ this.state.not_compeleted }
                >
                    Submit
                </Button>
            </Modal.Actions>
        </Modal> );
    }
};

export default TextInput;