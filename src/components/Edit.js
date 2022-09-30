/* eslint-disable */
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditData() {
  let navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const [userlist, setUserList] = useState([]);
  const { ID } = useParams();
  const [val, setVal] = useState({
    Name: "",
    Roll: 0,
    Class: "",
    Division: "",
    Address: "",
    City: "",
    Pincode: "",
  });
  const getData = () => {
    console.log("start");
    Axios.get(`http://localhost:3001/induser/${ID}`).then((res) => {
      console.log(res.data);
      setUserList(res.data);
    });
  };

  const setData = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setVal({...val,[name]:value}) 
    
}
    
  

  const updateUser =async () => {
  /*  console.log('kk')
    
    Axios.post(`http://localhost:3001/updateUser/${ID}`,{val}).then((res)=>{
        console.log(res)
    })
    alert('Data Updated')
    */
    const {Name,Roll,Class,Division,Address,City,Pincode}=val
    const res2 = await fetch(`/updateuser/${ID}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
         Name,Roll,Class,Division,Address,City,Pincode
      })
  });

  const data2 = await res2.json();
  console.log(data2);

  if(res2.status === 422 || !data2){
      alert("fill the data");
  }else{
      
      setUserList(data2);
      console.log(userlist)
  }
  }
    


   
  return (
    <div className='EditBlock'>
      {userlist.map((val, key) => (
        <div className="row" val={val} key={key}>
          <div className="col" style={{paddingLeft:'70px'}}>
            <h5>Name</h5>
            <input
              style={{ margin: "0px" }}
              type="text"
              name='Name'
              className="InputBox"
              onChange={setData}
              value={val.Name}
              id="Name"
              
            />
            <br />
            <br />
            <h5>Roll No</h5>
            <input
              style={{ margin: "0px" }}
              type="text"
              className="InputBox"
              value={val.Roll}
              onChange={setData}
              id="Roll"
              name='Roll'
            />
            <br />
            <br />
            <h5>Class</h5>
            <input
            name='Class'
              style={{ margin: "0px" }}
              type="text"
              onChange={setData}
              className="InputBox"
              value={val.Class}
              id="Class"
            />
          </div>
          <div className="col">
            <h5>Division</h5>
            <input
              type="text"
              name='Division'
              style={{ margin: "0px" }}
              className="InputBox"
              value={val.Division}
              onChange={setData}
              id="Division"
            />
            <br />
            <br />
            <h5>Address</h5>
            <input
            name='Address'
              type="text"
              style={{ margin: "5px" }}
              className="InputBox"
              value={val.Address}
              onChange={setData}
              id="Address"
            />
            <br />
            <br />
            <h5>Pincode</h5>
            <input
            name='Pincode'
              type="text"
              onChange={setData}
              style={{ margin: "5px" }}
              className="InputBox"
              value={val.Pincode}
              id="Pincode"
            />
          </div>
        </div>
      ))}

      <button className="btn btn-danger" id='UpdateButton' onClick={updateUser}>Update</button>
    </div>
  );
      }
