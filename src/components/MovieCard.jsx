import React from 'react';
import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
		return (
			<div>
				{this.props.movies.map(movie => <MovieList movie={movie} />)};
			</div>
		)
	}
}

export default MovieCard;
