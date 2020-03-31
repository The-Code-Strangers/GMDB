import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveMovies } from './redux/action/movieActions'

//PropTypes fehlen
class TestRedux extends Component {
    constructor(props) {
        super(props);      

    }

    componentDidMount() {
        // Mockdata bauen
        const movie = {title:"MovieName"}
        const movies = [movie, movie , movie];

        // in den Store senden
        this.props.callSaveMovies(movies);

    }

    // aufruf der dispatch methode (um etwas in den Store zu speichern)
    // this.props.callSaveMovies(geladeneMovies)

    render() {
        // AUSGABE DER MOVIES IN CONSOLE
        console.log("From TestRedux Component" , this.props.movies);
        
        return (
            <div>
                movies: {this.props.movies.toString()}
            </div>
        )
    }

    
}

//From Global State in die Props speichern 
const mapStateToProps = state => ({           
    movies: state.movies
})

  
//Gibt in die Props eine Mehthode die man benutzen kann um den Global State zu verändern 
const mapDispatchToProps = dispatch => ({
    callSaveMovies: movies => dispatch(saveMovies(movies))
})

//Sorgt dafür das state2props und dispatch2props die Props erreichen und das die Komponent neu lädt wenn der Store sich ändert
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux) 




