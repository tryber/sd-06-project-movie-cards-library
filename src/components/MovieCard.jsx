import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <h5>{rating}</h5>
        <img src={imagePath}></img>  
      </div>
      )
  }
}

MovieList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number
}
export default MovieList;
