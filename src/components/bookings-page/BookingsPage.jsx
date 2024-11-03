import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookingsPage = () => {
  const [bookingList, setBookingList] = useState([]);
  const bookingData = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const colorMap = {
    0: "primary",
    1: "secondary",
    2: "success",
    3: "warning",
    4: "info",
    5: "dark",
  };

  useEffect(() => {
    console.log(bookingData);
    setBookingList(bookingData);
  }, []);

  return (
    <>
      <div className="container">
        <h4
          className="bg-secondary my-2 text-center"
          style={{ padding: "30px", color: "white" }}
        >
          Booking History
        </h4>
        {bookingList.length > 0 ? (
          <ul className="list-group">
            {bookingList.map((booking) => {
              return (
                <li
                  className={`list-group-item list-group-item-${
                    colorMap[booking.noOfSeat % 6]
                  }`}
                  key={booking.id}
                >
                  <div
                    className="row d-flex justify-content-between"
                    key={booking.id}
                  >
                    <div className="col-md-2 my-1">{booking.movieTitle}</div>
                    <div className="col-md-1 my-1">{booking.noOfSeat}</div>
                    <div className="col-md-2 my-1">{booking.timing}</div>
                    <div className="col-md-2 my-1">{booking.seat.map(s => s+" ")}</div>
                    <div className="col-md-2 my-1">
                      <button
                        type="button"
                        className={`btn btn-outline-${colorMap[booking.noOfSeat % 6]}`}
                        onClick={() => {
                          const filteredData = bookingList.filter(bookingItem => bookingItem.id!==booking.id)
                          dispatch({ type: "DELETE_BOOKING", payload: booking.id })
                          setBookingList(filteredData)
                        }}
                      >
                        Cancle Ticket
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h5
            className="bg-danger my-1 text-center"
            style={{ padding: "10px", color: "white" }}
          >
            No booking history to display
          </h5>
        )}
      </div>
    </>
  );
};

export default BookingsPage;
