import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;

    return (
      <div className="movieCard">
        <img src={imagePath} alt={title} />
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
  rating: propTypes.number.isRequired,
};

export default MovieCard;
