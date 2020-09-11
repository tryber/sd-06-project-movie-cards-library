import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {
          this.props.movies.map(movie => {
          return (<MovieCard key={movie.title} title={movie.title} />);
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.array,
}

export default MovieList;

  // {
  // title: 'Resident Evil',
  //   subtitle: 'Vendetta',
  //   storyline: 'Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.',
  //   rating: 4.2,
  //   imagePath: 'images/Resident_Evil_Vendetta.jpg',
  // },