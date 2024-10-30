import "./App.css";
import MovieDetailsPage from "./components/movie-details-page/MovieDetailsPage";
import MovieListingPage from "./components/movie-listing-page/MovieListingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";
import MovieReducer from "./reducer/MovieReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import BookingsPage from "./components/bookings-page/BookingsPage";
import BookingsHistoryReducer from "./reducer/BookingsHistoryReducer";
import NavBar from "./components/navbar/NavBar";

function App() {
  const rootReducer = combineReducers({
    movies: MovieReducer,
    bookings: BookingsHistoryReducer,
  });
  const store = createStore(rootReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <NavBar/>
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
