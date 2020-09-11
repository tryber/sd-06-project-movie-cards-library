import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;

    return (
      <div>
        <img src={imagePath}></img>
        <br />
        {title}
        <br />
        {subtitle}
        <br />
        {storyline}
      </div>
    );
  }
}

export default MovieCard;
