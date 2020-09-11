import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>{movies[0].title}</h1>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(Object) };

MovieList.defaultProps = { movies: 'Kingsglaive' };

export default MovieList;
