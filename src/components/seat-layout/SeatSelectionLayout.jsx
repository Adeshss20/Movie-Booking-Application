const SeatSelectionLayout = (props) => {
  const formData = props.form;
  const setFormData = props.setForm;

  const handleCheck = (event) => {
    const newSeat = event.target.value;
    if ((!formData.seat.includes(newSeat)) ) {
      setFormData((prevState) => ({
        ...prevState,
        seat: [...formData.seat, newSeat],
      }));
      console.log(formData);
    }
  };

  return (
    <div className="row container">
      <div className="col-md-8">
        <div className="seatStructure txt-center" style={{ overflowX: "auto" }}>
          <table id="seatsBlock" className="table-borderless">
            <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>A</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td className="seatGap"></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="A12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>B</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="B12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>C</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="C12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>D</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="D12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>E</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="E12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr className="seatVGap"></tr>

            <tr>
              <td>F</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="F12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>G</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="G12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>H</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="H12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>I</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="I12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>

            <tr>
              <td>J</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J1"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J2"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J3"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J4"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J5"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J6"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J7"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J8"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J9"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J10"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J11"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  value="J12"
                  onClick={handleCheck}
                  disabled={formData.seat.length === parseInt(formData.noOfSeat, 10)}
                />
              </td>
            </tr>
            </tbody>
          </table>

          <div className="screen">
            <h4 className="wthree">Screen this way</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionLayout;
