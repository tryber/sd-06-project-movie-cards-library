import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <p>{this.props.movies}</p>
    );
  }
}

export default MovieList;
