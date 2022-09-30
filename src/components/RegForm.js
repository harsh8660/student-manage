import React, { useState } from "react";
import "../css/Form.css";
import Axios from "axios";
function RegForm() {
  const [userdata, setUserData] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Division: "",
    RollNo: 0,
    Class: 0,
    Address_1: "",
    Address_2: "",
    LandMark: "",
    City: "",
    Pincode: "",
  });
  const SubmitForm = (event) => {
    if (userdata.FirstName === "") alert("Enter Name");
    else if (userdata.RollNo === "") alert("Enter Roll No");
    else if (userdata.Address_1 === "") alert("Enter Address");
    else if (userdata.City === "") alert("Enter City Name");
    else if (userdata.Class === "") alert("Enter Class");
    else if (userdata.Division === "") alert("Enter Division");

    if(userdata.FirstName!=='' && userdata.RollNo!=='' && userdata.Address_1!=='' && userdata.City!=='' && userdata.Class!==''){
    Axios.post("http://localhost:3001/formSubmit", { userdata }).then((res) => {
      console.log(res);
    });
    alert("Data Added Successfully");
    window.location.reload(false);
  }
  };
  const handleChange = (e) => {
    const newData = { ...userdata };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
  };
  return (
    <div className="FillForm">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            id="FirstName"
            placeholder="First Name"
            className="InputBox"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            id="Class"
            placeholder="Select Class"
            className="InputBox"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            id="MiddletName"
            placeholder="Middle Name"
            className="InputBox"
            onChange={handleChange}
          />
          <input
            type="text"
            id="Division"
            placeholder="Select Division"
            className="InputBox"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            id="LastName"
            placeholder="Last Name"
            className="InputBox"
            onChange={handleChange}
          />
          <input
            type="number"
            max={99}
            id="RollNo"
            placeholder="Enter Roll Number in Digits"
            className="InputBox"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            style={{ width: "350px", marginLeft: "50px" }}
            type="text"
            id="Address_1"
            placeholder="Address Line 1"
            className="InputBox"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <input
            style={{ width: "350px" }}
            type="text"
            id="Address_2"
            placeholder="Address Line 2"
            className="InputBox"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              id="LandMark"
              placeholder="Landmark"
              className="InputBox"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              id="City"
              placeholder="City"
              className="InputBox"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              id="Pincode"
              placeholder="Pincode"
              className="InputBox"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <button onClick={SubmitForm} className="btn btn-danger" id="AddBtn">
        Add Student
      </button>
      <h1>{userdata.LandMark}</h1>
    </div>
  );
}
export default RegForm;
