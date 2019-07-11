import React from "react";
import { List } from "semantic-ui-react";

class MyList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { list: props.list };
        this.delete_item = props.delete_item;
    }
    render()
    {
        let liststyle = { cursor: "pointer" };
        let list_item = list => list.map( (item, index) => (
        <List.Item key={index}>
            <List.Icon
                name="delete"
                style={liststyle}
                onClick={ event => this.delete_item({event, index}) }
            />
            { item }
        </List.Item>
        ) );
        return ( <List> { list_item( this.props.list ) } </List> );
    }
};

export default MyList;