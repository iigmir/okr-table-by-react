import React from "react";
import { Modal, Button } from "semantic-ui-react";

class TextInput extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            open: props.open
        };
        this.close_method = props.close_method;
    }
    render()
    {
        return (
        <Modal
            open={ this.props.open }
            closeOnDimmerClick={ false }
        >
            <Modal.Header>Delete Your Account</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete your account?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={ this.close_method }> Discard </Button>
                <Button positive onClick={ this.close_method }
                    labelPosition="right"
                    icon="checkmark"
                    content="Submit"
                />
            </Modal.Actions>
        </Modal> );
    }
};

export default TextInput;