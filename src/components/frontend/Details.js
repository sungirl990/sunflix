import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            welcomeMessage: 'Welcome to the details page'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'Work in Progress'
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <Link to='/'>Go Back</Link>
            </div>
        );
    }
}
