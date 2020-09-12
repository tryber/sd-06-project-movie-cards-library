import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;
    return (
      <div>
        <div className="image">
          <img src={imagePath} alt={title} />
        </div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  storyline: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
};

export default MovieCard;
