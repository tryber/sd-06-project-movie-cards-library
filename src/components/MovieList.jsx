import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((el) => {
          return (
            <MovieCard
              key={el.title}
              movie={{
                title: el.title,
                subtitle: el.subtitle,
                storyline: el.storyline,
                rating: el.rating,
                imagePath: el.imagePath,
              }}
            />
          );
        })}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;
