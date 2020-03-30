import React from 'react'

const Movie = ({ data  }) => {
 
    const { title , releaseYear , genre , runtimeInMinutes , rating} = data;
   
    return (
        <div>
            <h3>{title}</h3>
            <p>{releaseYear}</p>
            <p>{genre}</p>
            <p>{runtimeInMinutes}</p>
            <p>{rating}</p>
        </div>
    )
} 

export default Movie