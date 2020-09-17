import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import MovieList from './MovieList';


class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className="Movie">
        <div className="Movie-body">
          <img src={imagePath} alt="imagem" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieCard;
