import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import SeatSelectionLayout from "../seat-layout/SeatSelectionLayout";

const BookingModal = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    timing: "",
    noOfSeat: 0,
    movieTitle: "",
    movieId: "",
    seat: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setFormData({
      id: "",
      timing: "",
      noOfSeat: 0,
      movieTitle: "",
      movieId: "",
      seat: [],
    });
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    })); 
  };

  const handleSubmit = (event) => {
    let data = formData;
    const id = uuidv4();
    data = {
      ...formData,
      movieTitle: props.movieTitle,
      movieId: props.movieId,
      id: id,
    };
    
    dispatch({
      type: "UPDATE_BOOKING",
      payload: data,
    }); 
    event.preventDefault();
    navigate("/movies");
  };

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Fill the details for {props.movieTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Choose show Timing</label>
                  <select
                    className="form-select"
                    aria-label="select timing"
                    name="timing"
                    value={formData.timing}
                    onChange={handleChange}
                    required
                  >
                    {/* {props.timing.map(time => {
                      return <option value={time}>{time}</option>
                    })} */}
                    
                    <option value="13:15 - 15:00">13:15 - 15:00</option>
                    <option value="12:30 - 15:30">12:30 - 15:30</option>
                    <option value="20:00 - 23:15">20:00 - 23:15</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Number of Seats</label>
                  <input
                    type="number"
                    className="form-control"
                    name="noOfSeat"
                    value={formData.noOfSeat}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <SeatSelectionLayout setForm={setFormData} form={formData} />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Book Ticket"
                    data-bs-dismiss="modal"
                    className="btn btn-outline-success my-2 mx-2"
                    disabled={
                      parseInt(formData.noOfSeat,10) <= 0 ||
                      formData.timing.trim() === "" ||
                      formData.seat.length===0 ||
                      formData.seat.length!==parseInt(formData.noOfSeat) 
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookingModal.prototype = {
  movieTitle: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
  timing: PropTypes.array.isRequired,
};

export default BookingModal;
