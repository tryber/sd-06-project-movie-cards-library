import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
	render() {
		const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

		return (
			<div className='movie-card'>
				<img className='movie-card-image' src={imagePath} alt='descripton-filmes' />
				<div className='movie-card-body'>
					<h4 className='movie-card-title'>{title}</h4>
					<h5 className='movie-card-subtitle'>{subtitle}</h5>
					<p className='movie-card-storyline'>{storyline}</p>
				</div>
				<div className='movie-card-rating'>
					<Rating  rating={rating} key={rating} />
				</div>
			</div>
			
		);
	}
}

MovieCard.propTypes = {
	title: propTypes.string.isRequired,
	subtitle: propTypes.string.isRequired,
	storyLine: propTypes.string.isRequired,
	imagePath: propTypes.string.isRequired,
	rating: propTypes.number.isRequired,
}

export default MovieCard;