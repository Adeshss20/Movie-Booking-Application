const data = {
  MovieList: [],
};

const MovieReducer = (state = data, action) => {

  switch (action.type) {
    case "SET_MOVIES":
      return { MovieList: [...action.payload] };

    default:
      return state;
  }
};

export default MovieReducer;
