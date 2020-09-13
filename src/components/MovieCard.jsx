import React from 'react';

class MovieCard extends React.Component {
    render() {
        return (
        <div className="movie-image">
            <img className="movie-card-title" src={this.props.movie.imagePath} alt="Movie Cover" />
            <h4 className="movie-card-title">{this.props.movie.title}</h4>
            <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
            <p className="movie-card-storyline">{this.props.movie.storyline}</p>
            </div>
          );
        }
      }
      
MovieCard.defaultProps = { movie: {} };
export default MovieCard;
