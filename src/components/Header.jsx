import React from 'react';

class Header extends React.Component {
  render() {
    // Retorno meu header da forma como quero e exporto para ser importado pelo 'app.js'
    return (
      <header>
        <h1 className="title">Movie Cards Library</h1>
      </header>
    ); 
  }
}

export default Header;
