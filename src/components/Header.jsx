import React from 'react';

class Header extends React.Component {
  render() {
    const pageTitle = 'Movie Cards Library'
    return (
      <header>
        <h1>{pageTitle}</h1>
      </header>
    );
  }
}

export default Header;
