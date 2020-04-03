import React, { Component } from 'react'
import './movielist.css'
import { connect } from 'react-redux'
import { saveMovies, addMovies } from '../../redux/action/movieActions'



import Movie from './movie/Movie';


class MovieList extends Component {
    constructor(props) {
        super(props);  
        this.testData =[]; 
        
        
    }

    componentDidMount() {
        // Mockdata bauen
        const movie = {title:"MovieName",
                       releaseYear: 2010}
        this.testData = [movie, movie , movie];

        // in den Store senden
        this.props.callSaveMovies(this.testData);
        console.log(this.props.movies, "After call Save");
        
        this.props.callAddMovies(this.testData);
        console.log(this.props.movies, "After call Add");

    }



    renderMovies(movies){
        return  movies.map((movieData,i) => {
            return <Movie key={i} index={i} data={movieData} />
        })
    }


        
    render() {
        const movies = this.props.movies;
        if(this.props.isLoading) {
            return (
                <div data-testid="movie-list-spinner" className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        return (
            <table className="table table-dark movie-list-container">
                <thead className="thead-darker">
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
                    {movies ? this.renderMovies(movies) : this.renderDarkAlert('no data found')}
                </tbody>
            </table>
        )       
    }

    renderDarkAlert(message) {
        return (
            <tr className="alert alert-dark" role="alert">
                <td>{message}</td>
            </tr>          
        )       
    }
}


//From Global State in die Props speichern 
const mapStateToProps = state => ({           
    movies: state.movies
})

  
//Gibt in die Props eine Mehthode die man benutzen kann um den Global State zu verändern 
const mapDispatchToProps = dispatch => ({
    callSaveMovies: movies => dispatch(saveMovies(movies)),
    callAddMovies: movies => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList) 
