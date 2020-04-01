import React, { Component } from 'react'

import { connect } from 'react-redux'
import { saveMovies } from '../../redux/action/movieActions'

import MovieList from './MovieList'

export class MovieListContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MovieList 
               
            />
        )
    }
}

const mapStateToProps = state => ({           
    movies: state.movies
})  

const mapDispatchToProps = dispatch => ({
    saveMovies: movies => dispatch(saveMovies(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer) 