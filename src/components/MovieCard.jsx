import React, { Component } from 'react';
// import Rating from './Rating';
import propTypes from 'prop-types'

class MovieCard extends Component {
	render() {
		const {image, title, subtitle, storyline} = this.props;
		return(
		<div className='movie-card'>
			<img src={image} alt={`imagem do filme ${title}`} height='160px'/>
			<h4>{title}</h4>
			<h5>{subtitle}</h5>
			<p>{storyline}</p>
			{/* <Rating /> */}
		</div>
		)}
}

MovieCard.propTypes = {
	image: propTypes.string,
	title: propTypes.string,
	subtitle: propTypes.string,
	storyline: propTypes.string,
}

export default MovieCard;