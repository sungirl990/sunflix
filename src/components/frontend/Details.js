import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GetMovie from './GetMovie.js';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = GetMovie().find((movie) => movie.id === movieId);
        this.setState({ movie });
    }

    render() {
        return (
            <div>
                <h3>{this.state.movie.name}</h3>
                <Link to='/'>Go Back</Link>
            </div>
        );
    }
}
