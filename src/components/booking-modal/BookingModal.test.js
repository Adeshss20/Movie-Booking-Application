import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";


test("check the content of Ticket Booking Modal", async() => {
  render(<App />);
  fireEvent.click(screen.getByText('Movies'))
  fireEvent.click(screen.getAllByText(/View Details/i)[0])
  fireEvent.click(screen.getAllByText(/Book Ticket/i)[0])
  
  const infotext = screen.getByText(/Fill the details for/i);
  const timingText = screen.getByText(/Choose show Timing/i);
  const seatText = screen.getByText(/Number of Seats/i);
  const bookTicket = screen.getAllByText(/Book/i)[1];
  const close = screen.getByText(/Close/i);

  expect(infotext).toBeInTheDocument();
  expect(timingText).toBeInTheDocument();
  expect(seatText).toBeInTheDocument();
  expect(bookTicket).toBeInTheDocument();
  expect(close).toBeInTheDocument();
});
