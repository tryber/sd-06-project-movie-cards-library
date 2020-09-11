import React from 'react';
import theCoyote from '../img/1.png';

class Header extends React.Component {
  render() {
    return (
      <div className="movie-card-header">
        <h1 className="titulo">Movie Cards Library</h1>
        <div className="cubo">
          <img src={theCoyote} alt="imagem" width="60" />
          <img src={theCoyote} alt="girando" width="60" />
          <img src={theCoyote} alt="com o logo" width="60" />
          <img src={theCoyote} alt="do coyote" width="60" />
        </div>
      </div>
    );
  }
}

export default Header;
