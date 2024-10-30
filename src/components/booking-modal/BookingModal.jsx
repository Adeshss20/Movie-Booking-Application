import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SeatSelectionLayout from "../seat-layout/SeatSelectionLayout";

const BookingModal = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    fullname: "",
    mobile: "",
    email: "",
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
      fullname: "",
      mobile: "",
      email: "",
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
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
    console.log(typeof(parseInt(formData.noOfSeat,10)));
    
  };

  const validateData = (data) => {
    if (
      formData.email.trim() === "" ||
      formData.fullname.trim() === "" ||
      formData.noOfSeat <= 0 ||
      formData.mobile.trim() === "" ||
      formData.timing.trim() === "Open this select" ||
      formData.mobile.trim().length!==10 ||
      formData.seat.length !== formData.noOfSeat
    ) {
      return false;
    }

    return true;
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
    console.log(data);
    console.log("validate ->" + validateData(formData));

    // if(!validateData(formData)) {
    //   console.log("Inside validate - no dispatch sent") 
    // }
    
    dispatch({
      type: "UPDATE",
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
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.fullname}
                    name="fullname"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                    <option selected>Open this select</option>
                    <option value="09:30 - 12:40">09:30 - 12:40</option>
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
                      formData.email.trim() === "" ||
                      formData.fullname.trim() === "" ||
                      parseInt(formData.noOfSeat,10) <= 0 ||
                      formData.mobile.trim() === "" ||
                      formData.timing.trim() === "Open this select" ||
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

export default BookingModal;
