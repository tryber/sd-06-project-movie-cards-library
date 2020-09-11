import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;
    return (
      <div className="movieCard">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <image className="movieImage" src={imagePath} alt={title} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};
export default MovieCard;
