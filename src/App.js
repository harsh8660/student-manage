/* eslint-disable*/
import React from "react";
import "./App.css";
import RegForm from "./components/RegForm";
import View from "./components/View";
import Manage from "./components/Manage";
import EditData from "./components/Edit";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import DashBoard from "./components/DashBoard";
function App() {
  /*let component 
  switch (window.location.pathname) {
   
    case '/RegForm':
      component=<RegForm/>
      break;
    case '/Manage':
      component=<Manage />
      break;
      case '/Manage/view':
        component=<View/>
        break;
        case `/Manage/Edit/:ID`:
          component=<EditData />
          break;
       
  }*/
  return (
    
    <div style={{display:'flex'}}>
      
      <BrowserRouter>
        
          <div
            className="col-3"
            style={{
              overflowY: "scroll",
              minHeight: "300px",
              maxHeight: "300px",
            }}
          >
            <DashBoard />
          </div>
          
          <div className="col">
          <Routes>
            <Route path='/' element={<RegForm/>}/>
            <Route path='/Manage' element={<Manage/>}/>
            <Route path='/Manage/view/:ID' element={<View/>}/>
            <Route path='/Manage/Edit/:ID' element={<EditData/>}/>
          </Routes>
           
          </div>
         
          </BrowserRouter>
       
      </div>
    
   
  );
}

export default App;
