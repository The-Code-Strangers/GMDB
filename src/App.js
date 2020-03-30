import React from 'react';

import './App.css';
import MovieList from './components/movielist/MovieList'

const data1 = {
  title: "Title",
  releaseYear: 2015,
  genre: "POP", 
  runtimeInMinutes: 120,
  rating: 5
}

const data2 = {
  title: "Harry Potter I",
  releaseYear: 2006,
  genre: "Fantasy", 
  runtimeInMinutes: 110,
  rating: 4
}

const data = [
  data1,
  data2
]

function App() {
  return (
    <div className="App">
     <MovieList data={data} />
    </div>
  );
}

export default App;
