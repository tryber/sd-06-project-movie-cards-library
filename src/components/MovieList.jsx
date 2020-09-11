import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
    <span>{this.props.movies}</span>
    );
  }
}

export default MovieList;
/* aqui exportamos o MovieList para podermos acessa-lo no App.js
export "default" para exportar so um objeto, apenas um item.
cada arquivo so pode ter um */
