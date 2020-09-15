import React from 'react';
import propTypes from 'prop-types';


class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.deafultProps = { rating: 0 };
Rating.propTypes = { rating: propTypes.number.isRequired };

export default Rating;
