import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map(movie => <MovieCard key={movie.title} />)}
      </div>
       /* Aqui mapeamos o objeto movies para ler cada movie */
    );
  }
}

MovieList.defaultProps = { movies: [] };
// aqui definimos que caso nao seja passado um array de objetos
// ele vai ser por padrao esse array vazio

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

// aqui definimos PropTypes.arrayOf pois movies vai ser um array
// e depois colocamos(PropTypes.object)pois vai ser um
// array de objetos
export default MovieList;
/* aqui exportamos o MovieList para podermos acessa-lo no App.js
export "default" para exportar so um objeto, apenas um item.
cada arquivo so pode ter um */
