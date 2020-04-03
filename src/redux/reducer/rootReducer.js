import { combineReducers } from 'redux'
import movies from '../reducer/moviesReducer'
import reviewId from '../reducer/reviewReducer'

export default combineReducers({
    movies,
    reviewId
})




