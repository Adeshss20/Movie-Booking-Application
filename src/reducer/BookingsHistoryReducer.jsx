const data = {
    BookingsHistoryData: [],
};
  
  const BookingsHistoryReducer = (state = data, action) => {

    switch (action.type) {
      case "UPDATE":
        return { MovieList: [...data.BookingsHistoryData,action.payload] };
  
      default:
        return state;
    }
  };
  
  export default BookingsHistoryReducer;
  