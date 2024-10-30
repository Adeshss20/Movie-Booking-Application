const BookingsHistoryData= []

const BookingsHistoryReducer = (state = BookingsHistoryData, action) => {
  console.log("Inside booking store");
  
  console.log(action);
  
  switch (action.type) {
    case "UPDATE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default BookingsHistoryReducer;
