import React from 'react';

import './App.css';

function getMovies(){
  fetch("http://localhost:8080/movies").then((response)=>console.log(response.json()));
}

function App() {
  getMovies();
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
