import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;

    return (
      <div>
        <img src={imagePath} alt="Imagem do filme" />
        <br />
        <h4>{title}</h4>
        <br />
        <h5>{subtitle}</h5>
        <br />
        <p>{storyline}</p>
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
  }).isRequired,
};

export default MovieCard;
