import React, { Component } from 'react';
// import Rating from './Rating';

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

export default MovieCard;