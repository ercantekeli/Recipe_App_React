import React from "react";
import { Link } from "react-router-dom";
import styles from "./style";




const Navbar = () => {
  return (
    <div className="container">
      <div className="left">
        <Link to="/">Home</Link>
      </div>

      <div className="right">
        <Link to="/about">About</Link>
        <a href="https://github.com/ercantekeli">Github</a>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
