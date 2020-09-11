import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
  render() {

    const headerText = 'Movie Cards Library';

    return (
      <header>
        <h1>{headerText}</h1>
      </header>
    )
  }
}

Header.propTypes = {
  headerText: PropTypes.string,
}

export default Header;
