import React from 'react';
import { render } from '@testing-library/react';
import { MovieListContainer } from './MovieListContainer';
import MovieList from './MovieList'


jest.mock("./MovieList.js", () => {
  console.log();    
  return jest.fn().mockImplementation(() => {
    return <></>
  });
});

beforeEach(() => {
  MovieList.mockClear();
});

test('renders MovieList', () => {     
  render(<MovieListContainer />);   
  expect(MovieList).toHaveBeenCalledTimes(1);
}); 

test('should fetch data when mounting', () => { 
  //No clue
});

test('should store data in global store', () => { 
  //No clue
});

test('should get data from global store', () => { 
  //No clue
});

test('should pass data to MovieList', () => { 
  //No clue
});













