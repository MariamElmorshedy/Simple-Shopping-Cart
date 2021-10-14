import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
//statless function
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark  navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/menu">
                Menu
              </NavLink>
            </li>
            {/* <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                ShoppingCart
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/login">
                LogIn
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>

        <span className="bg bg-primary">{props.productCount}</span>
      </div>
    </nav>
  );
};

export default NavBar;
