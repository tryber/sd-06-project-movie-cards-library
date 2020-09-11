import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-image">
          <img src={imagePath} alt="filme" />
        </div>
        <div className="movie-car-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p>{storyline}</p>
          {/* <Rating rating={rating} /> */}
        </div>
      </div>
      )
  }
}

export default MovieCard;
