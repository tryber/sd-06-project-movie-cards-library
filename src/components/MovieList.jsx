import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((element) => {
          return (<MovieCard
            movie={element}
          // imagePath={element.imagePath}
          // title={element.title}
          // subtitle={element.subtitle}
          // storyline={element.storyline}
          />);
        })
        }
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.shape(PropTypes.array).isRequired };

export default MovieList;
