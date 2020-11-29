import React from 'react';
import './NoMatch.css';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <section>
            <div className="container">
                <div className="no-match-body">
                    <h1>404</h1>
                    <h4>ERROR</h4>
                    <Link to="/home"> <small><p>BACK TO HOME</p></small> </Link>
                </div>
            </div>
        </section>
    );
};

export default NoMatch;