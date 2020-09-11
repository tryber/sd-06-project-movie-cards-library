import React from 'react';

import './App.css';
// aqui importamos o css do app
import Header from './components/Header';
// aqui importamos a header criada no arquivo Header
import MovieList from './components/MovieList';
// aqui importamos o MovieList criada no arquivo MovieList

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
