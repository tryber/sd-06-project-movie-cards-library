import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, color } = this.props;
    return (
      <p className="rating">
        {/* <div className={color}> */}
          {`Rating ${rating}`}
        {/* </div > */}
      </p>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;

