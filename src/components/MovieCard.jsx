import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <div>
        <h4> {title} </h4>
        <h5> { subtitle }</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt="Poster do Filme" />
        {rating}
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.node.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
