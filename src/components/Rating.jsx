import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating"> 
        <p>{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.string.isRequired };

export default Rating;
