import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline } = this.props;
    return (
      <div className="movieCard">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
