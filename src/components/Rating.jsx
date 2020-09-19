import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rate } = this.props;
    return (
      <div>
        <span className="rating">{rate}</span>
      </div>
    );
  }
}

Rating.propTypes = { rate: PropTypes.number.isRequired };

export default Rating;
