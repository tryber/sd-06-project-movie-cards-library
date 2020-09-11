import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data.js';
import MovieCard from './components/MovieCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={movies} />
        <MovieCard movies={movies} />
      </div>
    );
  }
}

export default App;
