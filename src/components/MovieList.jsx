import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>Movie List</h1>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
