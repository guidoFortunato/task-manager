import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <div className="pantalla-dividida">
      <div className="izquierda pt-2">
        <h1>Task manager</h1>
        <p>
        Manage your tasks in the best possible way, visualize your projects, connect your wallet and have everything in one place !
        </p>
        <Link to="/login" className="btn-start text-decoration-none">start</Link>
      </div>
      <div className="derecha"></div>
    </div>
  );
};

export default Home;
