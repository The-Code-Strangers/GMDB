import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer/rootReducer'
import './App.css';
import MovieList from './components/movielist/MovieList'

import TestRedux from './TestRedux'


function App() {
  const store = createStore(rootReducer);
  console.log(store.getState());
  

  return (
    <Provider store={store}>
    <div className="App">    
     <TestRedux />
    </div>
    </Provider>
  );
}

export default App;




