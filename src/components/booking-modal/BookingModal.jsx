import { useState } from "react";

const BookingModal = (props) => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    timing: "",
    noOfSeat: 0,
  });

  const handleClose = () => {
    setFormData({
        fullname: "",
        mobile: "",
        email: "",
        timing: "",
        noOfSeat: 0,
      });
  }

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.fullname}
                  name="fullname"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
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
                />
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
                  value="Select Seat"
                  className="btn btn-outline-success my-2 mx-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default BookingModal;
