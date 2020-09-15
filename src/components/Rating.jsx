import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className='rating'>{ rating }</div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;