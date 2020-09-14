import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <div>
        <p>{title} e {subtitle} e</p>
        <p>{storyline}</p>
        <p>{imagePath}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
};
MovieCard.defaultProps = {
  title: '',
  subtitle: '',
  storyline: '',
  imagePath: '',
  rating: 0,
};
// solução para o erro apontado pelo codeclimate
// (propType [name] is not required, but has no corresponding defaultProp declaration.)
// encontrada no StackOverflow:
// [https://stackoverflow.com/questions/52332394/if-a-proptype-isnt-required-why-eslint-want-to-provide-default-prop-for-it]


export default MovieCard;
