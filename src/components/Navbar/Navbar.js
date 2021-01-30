import React from "react";
import * as classes from "./Navbar.module.css";

const NavBar = ({ currentActive = 1 }) => {
  return (
    <>
      <header>
        <div className={classes.root}>
          <img alt="logo"></img>
          <ul className={classes.list}>
            <li
              className={
                currentActive === 1 ? classes.itemActive : classes.item
              }
            >
              <a href="#">Micro-needling A Miracle</a>
            </li>
            <li
              className={
                currentActive === 2 ? classes.itemActive : classes.item
              }
            >
              <a className={classes.anchor} href="#">
                What is SKININ
              </a>
            </li>
            <li
              className={
                currentActive === 3 ? classes.itemActive : classes.item
              }
            >
              <a className={classes.anchor} href="#">
                Before & After
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
