import React from 'react';
import './App.css';
import Header from './components/Header';
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

export default App;

// REFERENCIAS
// https://pt-br.reactjs.org/
// https://app.rocketseat.com.br/
// https://scrimba.com/
// https://stackoverflow.com/

// GITHUB = ANDERSONS STUBER, PAULO LINS
// https://github.com/HugoDF/jest-spy-mock-stub-reference

// YOUTUBE = "TANTAUM" DE CANAL

// AGRADECIMENTOS ESPECIAIS: AND E PAULO LINS.
