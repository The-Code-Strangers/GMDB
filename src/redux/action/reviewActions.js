export const updateReviews = movieId => ({  // an action that creates a json object

    type: ReviewActionTypes.UPDATE_REVIEWS,  // defining the type of the action
    movieId                       // defining the element of the action to be used
  })
  
 
  
  export const ReviewActionTypes = {
    UPDATE_REVIEWS: 'UPDATE_REVIEWS'
  }