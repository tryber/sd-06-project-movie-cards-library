import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { allItems } = this.props;
    return (
      <div className="movie-list">
        {allItems.map((element) => <MovieCard items={element} key={element.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = { allItems: PropTypes.arrayOf(Object).isRequired };

export default MovieList;
