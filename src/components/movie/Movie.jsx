const Movie = (props) => {
  // console.log(props);

  return (
    <div key={props.id} style={{ width: "18.5rem", height: "19.3rem" }} >
      <img
        src={props.image}
        className="rounded mx-auto d-block"
        width="150px"
        height="150px"
        style={{ padding: "10px" }}
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">Title: {props.title}</h5>
        <div className="card-text">
          <div>Genre: {props.genre.map(item => item+" ")}</div>
          <div> Rating: {props.rating}</div>
          <button className="btn btn-outline-info my-3" type="button">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
