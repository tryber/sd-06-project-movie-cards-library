import React, { Component } from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
