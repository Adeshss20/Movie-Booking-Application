import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BookingModal from "../booking-modal/BookingModal";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const movieList = useSelector((state) => state.movies);

  useEffect(() => {
    const data = movieList["MovieList"].filter((movie) => movie.id === id);
    setMovie(data[0]);
  }, []);


  return (
    <div className="container">
      <div className="card my-3 centre">
        <img
          src={movie.big_image}
          className="rounded mx-auto d-block my-2"
          width="200px"
          height="200px"
          alt={id}
        />
        <div className="card-body">
          <h5 className="card-title">Title: {movie.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Description:</b> {movie.description}
          </li>
          <li className="list-group-item">
            <b>Year:</b> {movie.year}
          </li>
          <li className="list-group-item">
            <b>Genre:</b> {movie.genre}
          </li>
          <li className="list-group-item">
            <b>Rating:</b> {movie.rating}
          </li>
          <li className="list-group-item">
            <b>Timings:</b> {movie["timing"]}
          </li>
        </ul>
      </div>

      <div>
        <button
          className="btn btn-outline-dark my-3 "
          type="button"
          style={{ width: "100%" }}
          data-bs-toggle="modal"
          data-bs-target="#TicketBookingModal"
        >
          Book Ticket
        </button>

        <div
          className="modal fade"
          id="TicketBookingModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <BookingModal
            movieTitle={movie.title}
            movieId={movie.id}
            timing={movie.timing}
          />
        </div>
      </div>

      <button
        className="btn btn-outline-dark my-3"
        type="button"
        onClick={() => navigate("/movies")}
      >
        &laquo; back
      </button>
    </div>
  );
};

export default MovieDetailsPage;
