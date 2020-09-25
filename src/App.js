import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data.js';

class App extends React.Component {
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
