import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <span>{this.props.movies}</span>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
/* aqui exportamos o MovieList para podermos acessa-lo no App.js
export "default" para exportar so um objeto, apenas um item.
cada arquivo so pode ter um */
