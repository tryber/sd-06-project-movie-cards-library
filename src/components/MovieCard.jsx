// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image"
            src={this.props.movie.imagePath}
            alt={this.props.movie.title} />
          <h1 className="movie-card-title">{this.props.movie.title}</h1>
          <h2 className="movie-card-subtitle">{this.props.movie.subtitle}</h2>
          <p className="movie-card-storyline">{this.props.movie.storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={this.props.movie.rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
