import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const movieList = useSelector((state) => state);

  useEffect(() => {
    const data = movieList.filter((movie) => movie.id === id);
    setMovie(data[0]);
  }, [id]);

  return (
    <div className="container">
      <div className="card my-3">
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
          {/* <li className="list-group-item">
            <b>Title:</b> {movie.title}
          </li> */}
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
            <Link to={movie.imdb_link} target="_blank" rel="noreferrer" >
              <b>IMDB Link</b>
            </Link>
          </li>
          <li className="list-group-item">
            <button className="btn btn-outline-dark my-3" type="button">
              Book Ticket
            </button>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-outline-dark my-3"
        type="button"
        onClick={() => navigate("/")}
      >
        &laquo; back
      </button>
    </div>
  );
};

export default MovieDetailsPage;
