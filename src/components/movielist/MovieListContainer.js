import React, { Component } from 'react'
import { connect } from 'react-redux'

class MovieListContainer extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({           
    movies: state.movies
})  


export default connect(mapDispatchToProps)(MovieListContainer)
