import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const homeName = "<ERCAN/>";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavLink to="/">
          <span>{homeName}</span>RECIPE
        </NavLink>
      </div>

      <div className={styles.right}>
        <NavLink to="/about">ABOUT</NavLink>
        <a
          href="https://github.com/ercantekeli"
          rel="noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
        <NavLink to="/login" >LOGOUT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
