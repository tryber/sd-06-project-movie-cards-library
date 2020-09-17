import React, { Component } from 'react';
import Rating from './Rating'

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className="Movie">
        <div className="Movie-body">
          <img src={imagePath} alt="imagem" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

export default MovieCard;
