import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.string.isRequired };

export default Rating;
