import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1 className=" mb-4">Error 404</h1>
      <Link className="btn-back" to="/">
        back home
      </Link>
    </div>
  );
};

export default Error404;
