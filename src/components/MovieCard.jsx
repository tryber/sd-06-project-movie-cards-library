import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.movies;

    return <h1>oi {title}</h1>
  }
}

export default MovieCard;
