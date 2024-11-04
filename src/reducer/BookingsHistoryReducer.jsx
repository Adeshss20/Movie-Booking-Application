const BookingsHistoryData= []

const BookingsHistoryReducer = (state = BookingsHistoryData, action) => {
  
  switch (action.type) {
    case "UPDATE_BOOKING":
      return [...state, action.payload];
    
    case "DELETE_BOOKING":
      return state.filter(booking => booking.id!==action.payload);

    default:
      return state;
  }
};

export default BookingsHistoryReducer;
