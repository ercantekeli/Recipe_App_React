import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const homeName = "<Ercan/>";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <span>{homeName}</span>Recipe
        </Link>
      </div>

      <div className={styles.right}>
        <Link to="/about">About</Link>
        <a
          href="https://github.com/ercantekeli"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
        <Link to="/login">LogOut</Link>
      </div>
    </div>
  );
};

export default Navbar;
