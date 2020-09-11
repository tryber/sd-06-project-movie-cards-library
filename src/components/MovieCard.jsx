import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt="Movie Poster" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string).isRequired };

export default MovieCard;
