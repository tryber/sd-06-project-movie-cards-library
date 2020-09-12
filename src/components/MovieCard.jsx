import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.eachMovie;
    return (
      <div>
        <img src={ imagePath }/>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <article>{storyline}</article>
        <p>{rating}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string
  }).isRequired, 
};

export default MovieCard;
