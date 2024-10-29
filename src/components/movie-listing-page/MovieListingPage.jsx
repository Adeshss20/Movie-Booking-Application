import { useEffect, useState } from "react";
import React from "react";
import { FetchData } from "../../fetch-data/FetchData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Movie from "../movie/Movie";
// import Loading from "../loading/Loading";

const MovieListingPage = () => {
  const [data, setData] = useState({
    movieData: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    FetchData(setData);
  }, []);

  dispatch({
    type: "SET_DATA",
    payload: data["movieData"],
  });

  return (
    <div className="container my-4">
      <div className="row d-flex justify-content-between mx-2">
        {data["movieData"].map((movie) => {
          return (
            <div
              className="card col-md-4 shadow p-3 mb-5 bg-white rounded my-2"
              key={movie.id}
              style={{ width: "18.5rem", height: "21rem" }}
            >
              <img
                src={movie.image}
                className="rounded mx-auto d-block"
                width="150px"
                height="150px"
                style={{ padding: "10px" }}
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">Title: {movie.title}</h5>
                <div className="card-text">
                  <div>Genre: {movie.genre.map((item) => item + " ")}</div>
                  <div>Rating: {movie.rating}</div>
                  <button
                    className="btn btn-outline-info my-3"
                    type="button"
                    onClick={() => navigate(`/movies/${movie.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieListingPage;
