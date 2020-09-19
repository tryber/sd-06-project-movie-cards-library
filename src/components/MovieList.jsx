import React from 'react';

class MovieList extends React.Component {
  render() {
    return <div>movies={this.props.movies}</div>;
  }
}

export default MovieList;