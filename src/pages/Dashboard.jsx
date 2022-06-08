import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import "../css/dashboard.css";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const nameLower = user.email.split("@")[0].toLowerCase();
  const nameCapitalize = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);

  return (
    <>
      <h2 className="text-center py-3">
        Welcome {nameCapitalize} to the Dashboard
      </h2>
      <div className="container-fluid responsive">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="container-img-responsive">
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>administrar tareas</span>
              </Link>
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>criptos</span>
              </Link>
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>criptos</span>
              </Link>
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>criptos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid desktop">
        <div className="row w-100">
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>administrar tareas</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/criptos" className="btn-dashboard">
                <span>criptos</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/tuentrada1" className="btn-dashboard">
                <span>administrar tareas</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/tuentrada2" className="btn-dashboard">
                <span>administrar tareas</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
