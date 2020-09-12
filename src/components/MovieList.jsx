import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
	render() {
	return <div className="movie-list">{this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)};</div>
	}
}

MovieList.propType = {
	movies: PropTypes.shape({
		movie: PropTypes.array.isRequired
	})
}

export default MovieList;
