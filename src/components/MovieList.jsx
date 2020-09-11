import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <div> {this.props.movies} </div>
    );
  }
}

export default MovieList;
