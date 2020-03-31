import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList.js';




test('renders MovieList', () => {
  const { container } = render(<MovieList />);
  const movieContainer = container.querySelector('table')
  expect(movieContainer).toBeInTheDocument();
});  


test('renders tablehead', () => {
  const { container } = render(<MovieList />);
  const movieContainer = container.querySelector('thead')
  expect(movieContainer).toBeInTheDocument();
})


test('renders tablehead with information', () => {
  const { getByText } = render(<MovieList />);

  const titleElement = getByText('Title');
  expect(titleElement).toBeInTheDocument();

  const releasedElement = getByText('Released');
  expect(releasedElement).toBeInTheDocument();

  const genreElement = getByText('Genre');
  expect(genreElement).toBeInTheDocument();

  const runtimeElement = getByText('min.');
  expect(runtimeElement).toBeInTheDocument();

  const ratingtElement = getByText('Rating');
  expect(ratingtElement).toBeInTheDocument();
})

test('renders Movilist with one Movie', () => {
  const singleData = {
    title: "Harry Potter I",
    releaseYear: 2015,
    genre: "POP", 
    runtimeInMinutes: 120,
    rating: 5
  }

  const data = [
    singleData
  ]
  const { getAllByText } = render(<MovieList data={data} />);

  for (let key in singleData) {
    const elements = getAllByText(singleData[key].toString());  
    expect(elements.length).toEqual(1);
    expect(elements[0]).toBeInTheDocument();
  }
})


test('renders Movilist with many Movies', () => {
  const data1 = {
    title: "Harry Potter V",
    releaseYear: 2015,
    genre: "POP", 
    runtimeInMinutes: 120,
    rating: 4
  }

  const data2 = {
    title: "Harry Potter I",
    releaseYear: 2006,
    genre: "Fantasy", 
    runtimeInMinutes: 110,
    rating: 3
  }

  const data = [
    data1,
    data2
  ]


  const { getAllByText } = render(<MovieList data={data} />);

  data.forEach(singleData => {
    for (let key in singleData) {
      const elements = getAllByText(singleData[key].toString());  
      
      expect(elements.length).toEqual(1);
      expect(elements[0]).toBeInTheDocument();
    }
  })

});



test('displays loading spinner when isLoading' , () => {  
  const { getByTestId } = render(<MovieList isLoading={true} />);      

  const spinnerElement = getByTestId('movie-list-spinner');
  expect(spinnerElement).toBeInTheDocument();
});

test('displays no data found when not loading and no data' , () => {  
  const { getByText } = render(<MovieList isLoading={false} />);      

  const dataAlertElement = getByText(/no data found/);
  expect(dataAlertElement).toBeInTheDocument();
});
