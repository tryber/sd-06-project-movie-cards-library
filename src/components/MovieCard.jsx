// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props;

    return (
      <div>
        <img src={imagePath} alt={title + 'PIC'}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating}/>
      </div>
    )
  };
};

MovieCard.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  imagePath: propTypes.string,
  rating: propTypes.number,
}

export default MovieCard;