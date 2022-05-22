import React, { useContext } from "react";
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from "../context/UserProvider";

const Navbar = () => {

  const {user, setUser} = useContext(UserContext)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <NavLink className="nav-link" activeclassname="active" aria-current="page" to='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" activeclassname="active" to='/dashboard'>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" activeclassname="active" to='/login'>
                Login
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" activeclassname="active" to='/register'>
                Register
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <span className="nav-link logout">
                Logout
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
