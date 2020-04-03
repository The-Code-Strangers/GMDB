

export const replaceReviews = reviews => ({  // an action that creates a json object
    type: ReviewActionTypes.REPLACE_REVIEWS,  // defining the type of the action
    reviews                      // defining the element of the action to be used
})
  

export const replaceReviewsAsync = (movieId) => {
  return dispatch => {
    fetch('http://localhost:8080/reviews?movieId='+movieId).then(response => response.json())
                .then(response =>  dispatch(replaceReviews(response)))   
  }
}
 
  
export const ReviewActionTypes = {
    REPLACE_REVIEWS: 'REPLACE_REVIEWS'
}