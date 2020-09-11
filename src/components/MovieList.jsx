import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => {
          const { title } = movie;
          return <MovieCard key={title} movie={movie} />;
        })}
      </div>
    );
  }
}

const string = PropTypes.string;
const number = PropTypes.number;
const obj = PropTypes.shape({ title: string, subtitle: string, storyline: string, rating: number, imagePath: string, });
MovieList.propTypes = { movies: PropTypes.arrayOf(obj).isRequired };

export default MovieList;
