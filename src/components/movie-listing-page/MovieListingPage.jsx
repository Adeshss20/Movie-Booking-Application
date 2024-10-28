import { useEffect, useState } from "react";
import React from "react";
import { FetchData } from "../../fetch-data/FetchData";
import Movie from "../movie/Movie";
import Loading from "../loading/Loading";

const MovieListingPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FetchData(setMovieData);
    setLoading(false);
    
  }, []);

  return (
    <div className="container">
      <div className="container my-4">
        {console.log(loading) && loading && <Loading />}
        <div className="row d-flex justify-content-between mx-2">
          {movieData.map((movie) => {
            return (
              // <div className="col-md-3 my-2" key={user.id}>
              <div className="card col-md-3 my-2" key={movie.id}>
                <Movie
                  title={movie.title}
                  genre={movie.genre}
                  rating={movie.rating}
                  image={movie.image}
                />
              </div>
              // </div>
            );
          })}
        </div>
      </div>
      <button className="btn btn-outline-dark my-3" type="button">
        back
      </button>
    </div>
  );
};

export default MovieListingPage;
