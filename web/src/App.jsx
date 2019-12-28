import React, { Component } from 'react';
import BrotherCard from './BrotherCard';
import { Responsive, Header, Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header as='h1' content='BrotherBank' style={{ margin: '0.5em' }} textAlign='center' />
                <Responsive as={Container} style={{ marginTop: '0.5em' }}>
                    <Grid centered columns={4}>
                        {Array.from(Array(20).keys()).map(i => (
                            <Grid.Row>
                                {Array.from(Array(4).keys()).map(j => (
                                    <Grid.Column>
                                        <BrotherCard
                                            firstName='Hammer'
                                            lastName='Tongson'
                                            photo={require('./test-assets/user.png')}
                                            hometown='Minneapolis, MN'
                                            major='Engineering'
                                            pledgeClass='Fall 1905'
                                            rollNumber={`ZΔ ${i * 4 + j + 1}`}
                                            position='Regent'
                                        />
                                    </Grid.Column>
                                ))}
                            </Grid.Row>
                        ))}
                    </Grid>
                </Responsive>
            </div>
        );
    }
}
