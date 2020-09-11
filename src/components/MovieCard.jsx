import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props.movie;
    return (
      <ul>
        <li><h4>{title}</h4></li>
        <li><h5>{subtitle}</h5></li>
        <li><img src={imagePath} alt={`${title} pic`} /></li>
        <li><p>{storyline}</p></li>
        <Rating rating={rating} />
      </ul>
    );
  }
}
MovieCard.defaultProps = {movie: {title:'Movie'}}
MovieCard.propTypes = { movie: PropTypes.object.isRequired };

export default MovieCard;
