/* eslint-disable */
import  Axios  from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function View(){
    const [datalist,setDataList]=useState([])
    const [data, setData] = useState({
        Name: "",
        Roll: 0,
        Class: "",
        Division: "",
        Address: "",
        City: "",
        Pincode: "",
      });

      const {ID}=useParams()
    const Showval=()=>{
    Axios.get(`http://localhost:3001/ShowInd/${ID}`).then((res)=>{
        console.log(res)
        setDataList(res.data)
        console.log(datalist)
    });
}
useEffect(()=>{
    Showval()
},[])
    return(
        <div>
         <div className='row' id='IndUserBlock'>
            <h2 className='IndUserHeading'>Student Details</h2>
            <hr/>
            <div className='col'>
                <h4 className='ViewHeading'>Name:</h4>
                <h4 className='ViewHeading'>Roll No:</h4>
                <h4  className='ViewHeading'>Class:</h4>
                <h4  className='ViewHeading'>Division:</h4>
                <h4  className='ViewHeading'>Address:</h4>
                <h4  className='ViewHeading'>City:</h4>
                <h4  className='ViewHeading'>Pincode:</h4>
            </div>
            {datalist.map((val,key)=>(
                 <div className='col' key={key}>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.Name}</h5>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.Roll}</h5>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.Class}</h5>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.Division}</h5>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.Address}</h5>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.City}</h5>
                 <h5 className='ViewHeading'  style={{fontWeight:'normal'}}>{val.Pincode}</h5>
                 </div>
            ))}
           
         </div>
        </div>
    )
}