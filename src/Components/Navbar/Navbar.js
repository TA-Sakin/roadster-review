import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav shadow-sm position-sticky">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/review">Review</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
};

export default Navbar;
