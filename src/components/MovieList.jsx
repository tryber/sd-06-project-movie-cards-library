import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
	render() {
		return (
			movies.map((movieTitle) => {
				return <MovieCard
				key={movieTitle.title}
				image={movieTitle.imagePath}
				title={movieTitle.title}
				subtitle={movieTitle.subtitle}
				storyline={movieTitle.storyline}
				/>
			})
		)
	}
}

export default MovieList;
