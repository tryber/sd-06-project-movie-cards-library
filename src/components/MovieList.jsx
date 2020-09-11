// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
    render() {
        return (
            this.props.movies.map(element => <MovieCard movie={element} key={element.title} />)
        )
    }
}

MovieList.propType = {
    movies: PropTypes.array
}

export default MovieList;