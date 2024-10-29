const MovieList = [];

const MovieReducer = (state = MovieList, action) => {
    console.log("");
    
    console.log(`inside redux -> ${action.payload}`);
    
  switch (action.type) {
    case "SET_DATA":
      return [...action.payload];

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export default MovieReducer;
