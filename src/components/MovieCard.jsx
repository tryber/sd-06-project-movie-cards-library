import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {

  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="">
        <div>
          <p> {title} </p>
          <p> {subtitle} </p>
          <p> {storyline} </p>
          <p> {rating}</p>
        </div>
        <img src={imagePath} alt=' não encontrada' />
      </div>
    );
  }
}

MovieCard.propTypes = {  
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
