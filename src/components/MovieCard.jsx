import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={imagePath} alt={`Movie: ${title}`} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
    );
  }
}

export default MovieCard;
