import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    const { imagePath } = movie;

    return <div>
      <img src={imagePath} alt=""/>
    </div>;
  }
}

export default MovieCard;
