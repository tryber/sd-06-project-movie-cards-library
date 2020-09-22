import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const nameHeader = 'Movie Cards Library';
    return (
      <header className={'movie-card-header'}>
        <h1 className={'page-title'}>{nameHeader}</h1>
      </header>
    );
  }
}

Header.proptype = { name: PropTypes.string };

export default Header;
