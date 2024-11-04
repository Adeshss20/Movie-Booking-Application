import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";


test("check the content of Movie Details Page", async() => {
  render(<App />);
  fireEvent.click(screen.getByText('Movies'))
  fireEvent.click(screen.getAllByText(/View Details/i)[0])
  
  const movieTitle = screen.getByText(/Title: Oppenheimer/i);
  const desc = screen.getByText(/Description:/i);
  const genre = screen.getByText(/Genre:/i);
  const rating = screen.getByText(/Rating:/i);
  const timing = screen.getByText(/Timings:/i);
  const bookTicket = screen.getAllByText(/Book Ticket/i)[0];
  const back = screen.getAllByText(/back/i)[0];

  expect(movieTitle).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
  expect(timing).toBeInTheDocument();
  expect(bookTicket).toBeInTheDocument();
  expect(back).toBeInTheDocument();
});
