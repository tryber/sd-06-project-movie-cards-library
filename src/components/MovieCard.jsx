import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, imagePath, rating} = this.props.movie;
        return(
            <div className="movie-card-body">
                <div className="movie-card-image">
                    <img src={ imagePath } alt={ "Movie Photo" } />
                </div>
                <div className="movie-card-title">
                    <h4>{ title }</h4>
                </div>
                <div className="movie-card-subtitle">
                    <h5>{ subtitle }</h5>
                </div>
                <div className="movie-card-storyline">
                    <p>{ storyline }</p>
                </div>
                <div className="movie-card-rating">
                    <Rating rating={ rating }/>
                </div>
            </div>
        );
    }
}

MovieCard.propTypes = { 
    movie: PropTypes.shape({
        imagePath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;
