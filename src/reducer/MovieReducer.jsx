const data = {
  MovieList: [],
};

const MovieReducer = (state = data, action) => {

  switch (action.type) {
    case "SET_DATA":
      return { MovieList: [...action.payload] };

    case "CLEAR":
      return { MovieList: [] };

    default:
      return state;
  }
};

export default MovieReducer;
