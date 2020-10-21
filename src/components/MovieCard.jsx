/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={movie.imagePath} />
        <h2>{movie.title}</h2>
      </div>
    );
  }
}

export default MovieCard;
