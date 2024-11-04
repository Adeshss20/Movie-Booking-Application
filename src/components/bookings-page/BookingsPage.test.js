import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";


test("check the content of Booking History ", async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Bookings'))
  
  const bookingHistorytext = screen.getByText("Booking History");
  const infotext = screen.getByText("No booking history to display");

  expect(bookingHistorytext).toBeInTheDocument();
  expect(infotext).toBeInTheDocument();
});