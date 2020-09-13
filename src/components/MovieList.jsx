import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
      const movies = this.props.movies;
      return (
      <section className="movie-list">
          {movies.map((currentsmovie) => <MovieCard key={currentsmovie.title} movie={currentsmovie} />)};
      </section>);
  }
}

MovieList.defaultProps = { movies: [] };
export default MovieList;
