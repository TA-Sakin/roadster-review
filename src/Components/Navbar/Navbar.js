import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar shadow-sm w-100">
      <div>
        <Link className="fs-3" to="/">
          Analyze car
        </Link>
      </div>
      <div className="w-75">
        <Link to="/">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
