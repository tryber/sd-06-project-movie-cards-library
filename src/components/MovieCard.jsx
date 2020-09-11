import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: {title, subtitle, storyline, imagePath, rating} } = this.props;
    return (
      <img src={imagePath} alt={`Movie: ${title}`} />
    );
  }
}

export default MovieCard;
