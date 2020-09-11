import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

App.propTypes = {
  movies: PropTypes.array,
};

export default App;
