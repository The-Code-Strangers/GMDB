import React from 'react'
import { bindActionCreators } from 'redux';

import './movie.css';

import { connect } from 'react-redux'
import { replaceReviewsAsync } from '../../../redux/action/reviewActions';


const Movie = ({ movie , updateReviews, test }) => {
 
    const { id , title , releaseYear , genre , runtimeInMinutes , rating} = movie;
   
    return (              
            <tr onClick={() => {
                console.log(test);                
                updateReviews(id)
            }}>
                <th className='index-col' scope="row">{id}</th>
                <th scope="row">{title}</th>
                <th scope="row">{releaseYear}</th>
                <th scope="row">{genre}</th>
                <th scope="row">{runtimeInMinutes}</th>  
                <th scope="row">{rating}</th>               
            </tr>
    )
} 

const mapDispatchToProps = dispatch => bindActionCreators({
    updateReviews: replaceReviewsAsync
}, dispatch)



const test = (state) => ({
    test: state.reviews
})


export default connect(test,mapDispatchToProps)(Movie)