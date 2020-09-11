import React, { Component } from 'react';
import MovieCard from './MovieCard';

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

export default MovieList;
