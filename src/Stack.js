import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return <Link to='/Details' className="item">
        <img src={props.logo} alt={props.name} />
        <div className="app__title">
            <h2>{props.name}</h2>
        </div>
    </Link>
}