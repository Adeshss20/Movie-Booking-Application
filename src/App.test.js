import { render, screen } from "@testing-library/react";
import App from "./App";

test("check the content of home page", () => {
  render(<App />);
  const welcome = screen.getByText(/Welocome...!!/i);
  const title = screen.getByText(/Movie Booking Site/i);
  const movieButton = screen.getByText(/Movies/i);
  const bookingsButton = screen.getByText(/Bookings/i);
  expect(welcome).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(movieButton).toBeInTheDocument();
  expect(bookingsButton).toBeInTheDocument();
});


