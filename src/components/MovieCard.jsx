// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.movie.title}</h4>
                <h5>{this.props.movie.subtitle}</h5>
                <p>{this.props.movie.storyline}</p>
                <Rating rating={this.props.movie.rating} />
                <img src={this.props.movie.imagePath}></img>
            </div>
        )
    }
}
MovieCard.proptypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePatch: PropTypes.string
};

export default MovieCard;
