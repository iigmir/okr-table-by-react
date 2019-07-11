import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Week from "./Week/index.js";
import OKR from "./OKR/index.js";
import Month from "./Month.js";
import Targets from "./Targets.js";

const Main = () =>
{
    let src = "https://react.semantic-ui.com/images/wireframe/image.png";
    return (
    <Container>
        <Grid celled="internally">
            <Grid.Row>
                <Grid.Column width={8}>
                    <Week src={src} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <OKR src={src} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Month src={src} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Targets src={src} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    );
};

export default Main;