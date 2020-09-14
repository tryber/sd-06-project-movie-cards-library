import React from 'react';
import propTypes from 'prop-types';

class Header extends React.Component {
    render() {
    return (
        <header className="movie-card-header">
            <h1 className="page-title">Movie Cards Library</h1>
        </header>
        )
    }
};

Header.propTypes = { }
export default Header;