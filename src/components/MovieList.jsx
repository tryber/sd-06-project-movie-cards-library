import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map(filme => {
            return (<MovieCard
                key={filme.title}
                movie={filme}
              />);
          })}
      </div>
    );
  }
}

export default MovieList;
