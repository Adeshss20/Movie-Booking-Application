import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const bookingData = useSelector((state) => state.bookings);

  useEffect(() => {
    console.log(bookingData);

    setBookings(bookingData);
  }, []);

  return (
    <>
      <ul>
        {bookings.map((booking) => {
          return <li key={booking.id}>{booking.id}</li>;
        })}
      </ul>
    </>
  );
};

export default BookingsPage;
