import React from 'react';
import Rating from './Rating'
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props

    return (
      <div className='movie-card'>
        <img src={movie.imagePath} alt={movie.title}/>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating}/>
      </div>
    )
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string, 
  storyline: PropTypes.string,
  imagePath: PropTypes.string
}

export default MovieCard;