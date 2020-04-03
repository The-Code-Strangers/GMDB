import React from 'react'

import './movie.css';



import { connect } from 'react-redux'
import { updateReviews } from '../../../redux/action/reviewActions';


const Movie = ({ movie , index, updateReview }) => {
 
    const { title , releaseYear , genre , runtimeInMinutes , rating} = movie;
   
    return (              
            <tr onClick={() =>updateReview(movie.id)
            }>
                <th className='index-col' scope="row">{index}</th>
                <th scope="row">{title}</th>
                <th scope="row">{releaseYear}</th>
                <th scope="row">{genre}</th>
                <th scope="row">{runtimeInMinutes}</th>  
                <th scope="row">{rating}</th>               
            </tr>
    )
} 

const mapDispatchToProps = dispatch => ({
    updateReview: reviews => dispatch(updateReviews(reviews))
})

export default connect(null,mapDispatchToProps)(Movie)