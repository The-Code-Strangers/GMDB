import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveMovies } from '../../redux/action/movieActions';
import MovieList from './MovieList'

export class MovieListContainer extends Component {
    constructor({props}) {
        super(props)    
    }

    componentDidMount() {
        fetch('http://localhost:8080/movies')
            .then(response => response.json())
            .then(response => this.props.saveMovies(response)); 
                       
    }



    render() {      

        return (         
           <MovieList movies={this.props.movies} isLoading={false}/>
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