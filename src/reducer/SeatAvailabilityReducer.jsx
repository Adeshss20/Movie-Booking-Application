const seatAvailability = new Map();

const seatConverter = new Map([
["A1", [0,0]], ["A2", [0,1]], ["A3", [0,2]], ["A4", [0,3]], ["A5", [0,4]], ["A6", [0,5]], ["A7", [0,6]], ["A8", [0,7]], ["A9", [0,8]], ["A10", [0,9]], ["A11", [0,10]], ["A12", [0,11]],
["B1", [1,0]], ["B2", [1,1]], ["B3", [1,2]], ["B4", [1,3]], ["B5", [1,4]], ["B6", [1,5]], ["B7", [1,6]], ["B8", [1,7]], ["B9", [1,8]], ["B10", [1,9]], ["B11", [1,10]], ["B12", [1,11]],
["C1", [2,0]], ["C2", [2,1]], ["C3", [2,2]], ["C4", [2,3]], ["C5", [2,4]], ["C6", [2,5]], ["C7", [2,6]], ["C8", [2,7]], ["C9", [2,8]], ["C10", [2,9]], ["C11", [2,10]], ["C12", [2,11]],
["D1", [3,0]], ["D2", [3,1]], ["D3", [3,2]], ["D4", [3,3]], ["D5", [3,4]], ["D6", [3,5]], ["D7", [3,6]], ["D8", [3,7]], ["D9", [3,8]], ["D10", [3,9]], ["D11", [3,10]], ["D12", [3,11]],
["E1", [4,0]], ["E2", [4,1]], ["E3", [4,2]], ["E4", [4,3]], ["E5", [4,4]], ["E6", [4,5]], ["E7", [4,6]], ["E8", [4,7]], ["E9", [4,8]], ["E10", [4,9]], ["E11", [4,10]], ["E12", [4,11]],
["F1", [5,0]], ["F2", [5,1]], ["F3", [5,2]], ["F4", [4,3]], ["F5", [5,4]], ["F6", [5,5]], ["F7", [5,6]], ["F8", [5,7]], ["F9", [5,8]], ["F10", [5,9]], ["F11", [5,10]], ["F12", [5,11]],
["G1", [6,0]], ["G2", [6,1]], ["G3", [6,2]], ["G4", [6,3]], ["G5", [6,4]], ["G6", [6,5]], ["G7", [6,6]], ["G8", [6,7]], ["G9", [6,8]], ["G10", [6,9]], ["G11", [6,10]], ["G12", [6,11]],
["H1", [7,0]], ["H2", [7,1]], ["H3", [7,2]], ["H4", [7,3]], ["H5", [7,4]], ["H6", [7,5]], ["H7", [7,6]], ["H8", [7,7]], ["H9", [7,8]], ["H10", [7,9]], ["H11", [7,10]], ["H12", [7,11]],
["I1", [8,0]], ["I2", [8,1]], ["I3", [8,2]], ["I4", [8,3]], ["I5", [8,4]], ["I6", [8,5]], ["I7", [8,6]], ["I8", [8,7]], ["I9", [8,8]], ["I10", [8,9]], ["I11", [8,10]], ["I12", [8,11]],
["J1", [9,0]], ["J2", [9,1]], ["J3", [9,2]], ["J4", [9,3]], ["J5", [9,4]], ["J6", [9,5]], ["J7", [9,6]], ["J8", [9,7]], ["J9", [9,8]], ["J10", [9,9]], ["J11", [9,10]], ["J12", [9,11]],
])

const SeatAvailabilityReducer = (state = seatAvailability, action) => {

  let seatmap = [
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
  ];

  // console.log(action);
  
  const initializeSeat = () => {
    const newId = new String(action.payload[1])
    state.set(action.payload[0], new Map([newId, seatmap]))
    // console.log(state);
    
    return state;
  }

  const clearSeat = () => {
    const seatList = action.payload.list
    seatList.forEach(seat => {
        const seatId = seatConverter.get(seat)
        // console.log(seat);
        let map = state.get(action.payload.movieId)
        let seatAvl = map.get(action.payload.timing)
        seatAvl[seatId[0]][seatId[1]] = true
    })
    return state;
  };

  const bookSeat = () => {
    const seatList = action.payload.list
    seatList.forEach(seat => {
        const seatId = seatConverter.get(seat)
        // console.log(seat);
        let map = state.get(action.payload.movieId)
        let seatAvl = map.get(action.payload.timing)
        seatAvl[seatId[0]][seatId[1]] = false
    })
    return state;
  };

  switch (action.type) {
    case "INITIALIZE_SEAT":
      return initializeSeat();

    case "CLEAR_SEAT":
      return clearSeat();

    case "BOOK_SEAT":
      return bookSeat();

    default:
      return state;
  }
};

export default SeatAvailabilityReducer;
