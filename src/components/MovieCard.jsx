import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath} = this.props;
    return (
      <div>
        <img src={imagePath} alt={`${title} movie`} />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}
MovieCard.propType = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
