import React, { Component } from 'react';
import movieType from '../Types';
import Rating from './Rating';
// import movie from './MovieList'

class MovieCard extends Component {
  render() {
    // const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <section className="movie-card">
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </section>
    );
  }
}

MovieCard.propTypes = movieType;

export default MovieCard;
