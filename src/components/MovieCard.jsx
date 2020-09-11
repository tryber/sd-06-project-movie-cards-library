import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <div className="movie-card-image">
            <img src={imagePath} alt="filme" />
          </div>
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating}/>
      </div>
    );
  }
}

export default MovieCard;
