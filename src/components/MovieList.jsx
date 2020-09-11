import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const teste = <h1>teste</h1>;
    return teste;
  }
}

MovieList.PropTypes = { movies: PropTypes.array };

export default MovieList;
