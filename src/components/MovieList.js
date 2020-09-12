import React from 'react';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <div>
        <p>oi</p>
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
        {/* title={movie.title} subtitle={movie.subtitle}  storyline={movie.storyline} imagePath={movie.imagePath} */}
      </div>
    );
  }
}

export default MovieList;
