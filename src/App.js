import "./App.css";
import MovieDetailsPage from "./components/movie-details-page/MovieDetailsPage";
import MovieListingPage from "./components/movie-listing-page/MovieListingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";
import MovieReducer from "./reducer/MovieReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import BookingsPage from "./components/bookings-page/BookingsPage";

function App() {
  const movieStore = createStore(MovieReducer);

  return (
    <div className="App">
      <Provider store={movieStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/movies" element={<MovieListingPage />}></Route>
            <Route path="/movies/:id" element={<MovieDetailsPage />}></Route>
            <Route path="/bookings" element={<BookingsPage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
