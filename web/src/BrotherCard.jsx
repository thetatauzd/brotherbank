import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

export default class BrotherCard extends Component {
    render() {
        return (
            <Card href='#'>
                <Image src={this.props.photo} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{`${this.props.firstName} ${this.props.lastName}`}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.props.pledgeClass}</span>
                    </Card.Meta>
                    <Card.Description>{`${this.props.firstName} is a ${this.props.major} major from ${this.props.hometown}.`}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='address card' />
                        {this.props.rollNumber}
                    </a>
                    <br />
                    <a>
                        <Icon name='rocket' />
                        {this.props.position}
                    </a>
                </Card.Content>
            </Card>
        );
    }
}
