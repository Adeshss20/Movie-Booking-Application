const Movie = (props) => {
  // console.log(props);

  return (
    <div key={props.id} style={{ width: "18.5rem", height: "18rem" }}>
      <img
        src={props.image}
        className="rounded mx-auto d-block"
        width="110px"
        height="110px"
        style={{ padding: "10px" }}
        alt={props.title}
      />
      <div className="card-body">
        {/* <a href={`/user/${user.id}`}> */}
        <a href="/">
          <h5 className="card-title">{props.title}</h5>
        </a>
        <div className="card-text">
          <div>{props.genre}</div>
          <div>{props.rating}</div>
          <button className="btn btn-outline-info my-3" type="button">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
