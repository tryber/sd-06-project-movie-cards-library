import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList';
import movies from './data';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

App.proptype = {
  movies: PropTypes.array
}

export default App;
