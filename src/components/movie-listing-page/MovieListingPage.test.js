import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";


test("check the content of Movie Listing page", async() => {
  render(<App />);

  fireEvent.click(screen.getByText('Movies'))
  const searchbar = screen.getByText(/Search Movie/i);
  const movie = screen.getByTestId("top32")
  const movieTitle = screen.getByText(/Title: Harakiri/i);
  const genre = screen.getByText(/Genre: Action Drama Mystery/i);
  const rating = screen.getAllByText(/Rating: 8.6/i);
  
  expect(searchbar).toBeInTheDocument();
  expect(movie).toBeInTheDocument();
  expect(movieTitle).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
  expect(rating[0]).toBeInTheDocument();
});
