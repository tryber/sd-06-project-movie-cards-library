import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const rating = this.props.rating;
    return (
      <div>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };
Rating.defaultProps = { rating: 0 };
// solução para o erro apontado pelo codeclimate
// (propType [name] is not required, but has no corresponding defaultProp declaration.)
// encontrada no StackOverflow:
// [https://stackoverflow.com/questions/52332394/if-a-proptype-isnt-required-why-eslint-want-to-provide-default-prop-for-it]
export default Rating;
