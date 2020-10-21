/* eslint-disable react/prop-types */
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={movie.imagePath} alt="" />
        <h2>{movie.title}</h2>
      </div>
    );
  }
}

export default MovieCard;
