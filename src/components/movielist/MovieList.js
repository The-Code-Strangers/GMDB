import React, { Component } from 'react'
import './movielist.css'

import Movie from './movie/Movie';


class MovieList extends Component {
    constructor(props) {
        super(props);   
        
        
    }

    renderMovies(movies){
        return movies.map((movieData,i) => {
            return <Movie key={i} index={i} data={movieData} />
        })
    }



    render() {
        const movies = this.props.data;
                
        return (
            <table class="table table-dark movie-list-container">
                <thead class="thead-darker">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Released</th>
                    <th scope="col">Genre</th>
                    <th scope="col">min.</th>
                    <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies ? this.renderMovies(movies) : ''}
                </tbody>
            </table>
        )
    }

}

export default MovieList;
