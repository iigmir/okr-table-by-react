import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

const Main = () =>
{
    return (
    <Container>
        <Grid celled="internally">
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    );
};

export default Main;