import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating'

class MovieCard extends Component {
  render() {
    const { url, title, subtitle, synopsis } = this.props;

    return(
      <div className="movie-card">
        <img src={url} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{synopsis}</p>
        <Rating />
      </div>
    )
  };
}

MovieCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  synopsis: PropTypes.string,
  rating: PropTypes.number
}

export default MovieCard;
