import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
// import iconoTask from "../img/iconoTask.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);

  const navigate = useNavigate()

  const handleLogout = () => {
    signOutUser();
    navigate('/login')
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          {/* <img src={iconoTask} alt="img icono navbar" className="img-icono" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-pc-display-horizontal nav-icon"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
          </svg>
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
          <ul className="navbar-nav ms-lg-2">
            <li className="nav-item">
              <NavLink
                className={(data)=> data.isActive ? 'nav-link fw-bold borde hover active' : 'nav-link fw-bold borde hover' }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item me-lg-4">
                  <NavLink
                    className={(data)=> data.isActive ? 'nav-link fw-bold borde nav-dashboard active' : 'nav-link fw-bold borde nav-dashboard' }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item me-lg-4">
                  <span className="nav-link pointer borde hover" onClick={handleLogout}>
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-4">
                  <Link
                    className="nav-link btn-register-login"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link
                    className="nav-link btn-register-login"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
