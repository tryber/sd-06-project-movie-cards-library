import React from 'react';
import MovieCard from './MovieCard'
// import PropTypes from 'prop-types';


class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie) => {
          return <MovieCard
            key={movie.title}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            imagePath={movie.imagePath}
            rating={movie.rating}
          />
        })}
      </div>
    );
  }
}

// Header.propTypes = { title: PropTypes.string, };
export default MovieList;
