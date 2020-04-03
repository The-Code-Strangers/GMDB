import * as reviews from '../action/reviewActions';

const initialState =[];

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case reviews.ReviewActionTypes.REPLACE_REVIEWS:       
        return action.reviews   
      default:
        return state
    }
  }

export default reviewReducer;


