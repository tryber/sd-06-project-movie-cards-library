import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.movies;

    return <h1>oi {title}</h1>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired;
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    //Todos os seus tipos aqui dentro
  }).isRequired
}
export default MovieCard;
