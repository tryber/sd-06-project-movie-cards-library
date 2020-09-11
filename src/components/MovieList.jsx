import { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return movies;
  }
}

MovieList.defaultProps = { movies: [] };

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)) };

export default MovieList;
