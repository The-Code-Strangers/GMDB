import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer/rootReducer'
import './App.css';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MovieListContainer from './components/movielist/MovieListContainer'

// MovieListContainer -- [data] --> MovieList --[movideData]--> MovieComponent 



function App() {


  const middlewares = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  console.error("STORE: ----> ",store.getState());
  

  return (
    <Provider store={store}>
        <div className="App">    
          <MovieListContainer />
        </div>
    </Provider>
  );
}

export default App;




