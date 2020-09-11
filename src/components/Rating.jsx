// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';


class Rating extends React.Component {
  render() {
    return (
      <div>
        <p className="rating">{this.props.rating}</p>
      </div>
    );
  }
}

Rating.defaultProps = { rating: 'rating' };

Rating.propTypes = { rating: propTypes.number };

export default Rating;
