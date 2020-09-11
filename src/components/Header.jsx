// implement Header component here
import React from 'react';
import Proptypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <header className="movie-card-header">
                <h1 className="page-title">Movie Cards Library</h1>
            </header>
        );
    }
}

export default Header;
