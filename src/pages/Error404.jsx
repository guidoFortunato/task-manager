import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h2>Error 404 not found</h2>
      <button className="btn-back">
        <Link to="/">back home</Link>
      </button>
    </div>
  );
};

export default Error404;
