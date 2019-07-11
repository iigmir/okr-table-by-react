import React from "react";
import { Image, Header } from "semantic-ui-react";

class Targets extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: [123,456,789,0],
            src: props.src
        };
    }
    delete_item({ event, index })
    {
        console.log({ event, index });
        return;
    }
    render()
    {
        return (
        <div id="Target">
            <Header as="h1">Other targets</Header>
            <Image src={ this.state.src } />
        </div>
        );
    }
};


export default Targets;