import React, { Component } from 'react'

import Movie from './movie/Movie';


class MovieList extends Component {
    constructor(props) {
        super(props);   
        
        
    }

    renderMovies(movies){
        return movies.map((movieData) => {
            return <Movie data={movieData} />
        })
    }



    render() {
        const movies = this.props.data;
                
        return (
            <div>
                {movies ? this.renderMovies(movies) : ''}
            </div>
     
        )
    }

}

export default MovieList;
