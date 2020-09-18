import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { items: { imagePath, title, subtitle, storyline, rating, color}  } = this.props;

    return (
      <div className="movie-card ">
        <div className='movie-card-body'>
          <img className="movie-card-image" src={imagePath} alt="Imagem do filme" />
        <br />
        <h4 className="movie-card-title">{title}</h4>
        <br />
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <br />
        <p className="movie-card-storyline">{storyline}</p>        
        </div>
        <div className="movie-card-rating">
          <div className={color}>
            <Rating rating={rating} />
          </div>                    
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  items: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
