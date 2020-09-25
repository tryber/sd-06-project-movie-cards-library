import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {

  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="">
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <img src={imagePath} alt="não encontrada" />
          <span><Rating rating={rating} /></span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = ({
  movie: {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }.isRequired,
});

export default MovieCard;
