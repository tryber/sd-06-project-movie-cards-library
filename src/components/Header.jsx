import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    const headerTitle = 'Movie Cards Library';
    return (
      <header className="header">
        <h1>{headerTitle}</h1>
      </header>
    );
  }
}

export default Header;
