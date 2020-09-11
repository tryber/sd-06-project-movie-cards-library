import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;
    return (
      <div>
        <div>
            <img src={imagePath} alt="Imagem do Filme" />
        </div>
        <div>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.symbol,
};

export default MovieCard;
