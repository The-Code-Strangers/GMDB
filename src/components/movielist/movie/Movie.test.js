import React from 'react';
import { render } from '@testing-library/react';
import Movie from './Movie';




test('renders Movie', () => {
  const { container } = render(<Movie data={{}} />);
  const movieContainer = container.querySelector('tr')
  expect(movieContainer).toBeInTheDocument();
});


  test('renders Movie with all informations', () => {
    const data = {
        title: "Title",
        releaseYear: 2015,
        genre: "POP", 
        runtimeInMinutes: 120,
        rating: "5"
    }


    const { getByText } = render(<Movie data={data} />);
    
    for (let key in data) {
        const element = getByText(data[key].toString());  
        expect(element).toBeInTheDocument();
    }
  });

  


