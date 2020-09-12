import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;

    return (
      <div>
        <img src={imagePath} alt="Imagem do filme" />
        <br />
        <h4>{title}</h4>
        <br />
        <h5>{subtitle}</h5>
        <br />
        <p>{storyline}</p>
        <div>
          <Rating rating={rating}/>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
