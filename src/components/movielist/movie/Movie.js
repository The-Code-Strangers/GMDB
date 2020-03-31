import React from 'react'

import './movie.css';

const Movie = ({ data , index }) => {
 
    const { title , releaseYear , genre , runtimeInMinutes , rating} = data;
   
    return (              
            <tr>
                <th className='index-col' scope="row">{index}</th>
                <th scope="row">{title}</th>
                <th scope="row">{releaseYear}</th>
                <th scope="row">{genre}</th>
                <th scope="row">{runtimeInMinutes}</th>  
                <th scope="row">{rating}</th>               
            </tr>
    )
} 

export default Movie