import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map(movie => {
          return (
            <MovieCard
              key={movie.title}
              title={movie.title}
            />
          );
        })}
      </section>
    );
  }
}

// MovieList.propTypes = {
//   movies: propTypes.arrayOf(PropTypes.object).isRequired
// };

export default MovieList;
