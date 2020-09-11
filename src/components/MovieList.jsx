import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (<div className="movie-list">
      {this.props.movies.map((movie) =>
        <MovieCard
          key={movie.title}
          imagem={movie.imagePath}
          title={movie.title}
          subtitle={movie.subtitle}
          description={movie.storyline}
          rating={movie.rating}
        />,
      )}
    </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
