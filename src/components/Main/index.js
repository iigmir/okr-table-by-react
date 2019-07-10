import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

const Week = props => (<Image src={props.src} />);
const OKR = props => (<Image src={props.src} />);
const Month = props => (<Image src={props.src} />);
const Targets = props => (<Image src={props.src} />);

const Main = () =>
{
    let src = "https://react.semantic-ui.com/images/wireframe/image.png";
    return (
    <Container>
        <Grid celled="internally">
            <Grid.Row>
                <Grid.Column width={6}>
                    <Week src={src} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <OKR src={src} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Month src={src} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Targets src={src} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    );
};

export default Main;