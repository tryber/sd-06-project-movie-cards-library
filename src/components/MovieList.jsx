import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.movies.map(movie => <MovieCard key={movie.title} />)}</p>
      </div>
    );
  }
}

export default MovieList;
