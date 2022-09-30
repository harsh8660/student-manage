/* eslint-disable*/
import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditData from "./Edit";
function Manage() {
  const [datalist, setDataList] = useState([]);
  const [isview, setIsview] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Roll: 0,
    Class: "",
    Division: "",
    Address: "",
    City: "",
    Pincode: "",
  });
 let todelete=false
  function confirmation(ID){
      if(confirm('Are You Sure to Delete'))
      {
        todelete=true
        
      }
      deleteUser(ID)
  }
  const deleteUser=(ID)=>{
    console.log('j'+ID)
    if(todelete===true){
      console.log('jjj')
    Axios.delete(`http://localhost:3001/Delete/${ID}`).then(()=>{
      console.log('deleted')
      
      
    })
    alert('DELETED')
    window.location.reload(false)
  }
  }
  const ShowData = () => {
    console.log("j");
    Axios.get("http://localhost:3001/ShowData").then((res) => {
      setDataList(res.data);

      console.log(res);
    });
  };

  useEffect(()=>{
    ShowData()
  },[])
  return (
    <div className="ManageTable">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">SrNo</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">RollNo</th>
            <th scope="col">Division</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Pincode</th>

            <th scope="col">View/Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map((val, key) => (
            <tr val={val} key={key}>
              <td>{val.ID}</td>
              <td>{val.Name}</td>
              <td>{val.Class}</td>
              <td>{val.Roll}</td>
              <td>{val.Division}</td>
              <td>{val.Address}</td>
              <td>{val.City}</td>
              <td>{val.Pincode}</td>
              <td>
                <Link to={`/Manage/view/${val.ID}`}>
                  <IconButton
                    onCLick={() => {
                      setIsview(true);
                    }}
                  >
                    <VisibilityOutlinedIcon
                      style={{ color: "rgba(255, 0, 50,0.6)" }}
                    />
                  </IconButton>
                </Link>

                <Link to={`/Manage/Edit/${val.ID}`}>
                  <IconButton>
                    <BorderColorOutlinedIcon
                      style={{ color: "rgba(255, 0, 50,0.6)" }}
                    />
                  </IconButton>
                </Link>
                
                <IconButton onClick={()=>confirmation(val.ID)}>
                  <DeleteOutlineOutlinedIcon
                    style={{ color: "rgba(255, 0, 50,0.6)" }}
                  />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Manage;
