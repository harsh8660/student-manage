import React from "react";
import { Link } from "react-router-dom";
export default function DashBoard() {
  return (
    <div className="DashBoard">
      <div className="DashBtn">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4 id="Menu">Add Student</h4>
        </Link>
      </div>
      <div className="DashBtn">
        <Link to="/Manage" style={{ textDecoration: "none" }}>
          <h4 id="Menu">Manage</h4>
        </Link>
      </div>
    </div>
  );
}
