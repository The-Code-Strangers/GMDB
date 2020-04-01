import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer/rootReducer'
import './App.css';
import MovieListContainer from './components/movielist/MovieListContainer'

// MovieListContainer -- [data] --> MovieList --[movideData]--> MovieComponent 

import TestRedux from './TestRedux'


function App() {
  const store = createStore(rootReducer);
  console.log(store.getState());
  

  return (
    <Provider store={store}>
    <div className="App">    
     <MovieListContainer />
    </div>
    </Provider>
  );
}

export default App;




