import React, {Component} from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends Component {
  render() {
    return(
      <div className='movie-list'>
        {data.map((el,index) => {
          return (
            <MovieCard
              key={index}
              title={el.title}
              subtitle={el.subtitle}
              storyline={el.storyline}
              rating={el.rating}
              imagePath={el.imagePath}
            />
          )
        })}
      </div>
    )
  }

}

export default MovieList;