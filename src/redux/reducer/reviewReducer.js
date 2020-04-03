import * as reviews from '../action/reviewActions';


// erste State wenn e''s für movies noch kein State gibt
const initialState ="";

// Initalisiert den State das erste mal mit initial state
// bekommt den alten state und die action 
// überprüft ob er was mit dem actiontype anfangen kann 
// speichert den wert im store ab (der key wird im root reducer bestimmt)
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case reviews.ReviewActionTypes.UPDATE_REVIEWS:
        console.log(action.movieId, "Reviews in Reducer");
        
        // fetch('http://localhost:8080/reviews?movieId='+action.movieId)
        // .then(response => response.json())
        // .then(response => this.props.saveReviews(response)); 
        //fetch einbauen
        return action.movieId   
      default:
        return state
    }
  }

//   const reviewReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case reviews.ReviewActionTypes.UPDATE_REVIEWS:
//         console.log(action.movieId, "Reviews in Reducer");
        
//         fetch('http://localhost:8080/reviews?movieId='+action.movieId)
//         .then(response => response.json())
//         .then(response => this.props.saveReviews(response)); 
//         //fetch einbauen
//         return action.movieId   
//       default:
//         return state
//     }
//   }





//   !async function(){
//     let data = await fetch("https://raw.githubusercontent.com/IbrahimTanyalcin/LEXICON/master/lexiconLogo.png")
//         .then((response) => response.blob())
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.error(error);
//         });
    
//     console.log(data);
//     }();

    






























































































































































































































































































































































  export default reviewReducer;