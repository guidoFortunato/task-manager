import React from "react";
import { Link } from "react-router-dom";
// import { UserContext } from "../context/UserProvider";
import "../css/dashboard.css";

const Dashboard = () => {
  // const { user } = useContext(UserContext);
  // const nameLower = user.email.split("@")[0].toLowerCase();
  // const nameCapitalize = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);

  return (
    <>
      <h2 className="text-center py-3">
        Welcome to your Dashboard
      </h2>
      <div className="container-fluid responsive">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="container-img-responsive">
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>manage tasks</span>
              </Link>
              <Link to="/dashboard/criptos" className="btn-dashboard">
                <span>crypto list</span>
              </Link>
              <Link to="/dashboard/estadio-obras" className="btn-dashboard">
                <span>obras stadium</span>
              </Link>
              <Link to="/dashboard/information" className="btn-dashboard">
                <span>information</span>
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
                <span>manage tasks</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/criptos" className="btn-dashboard">
                <span>crypto list</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/estadio-obras" className="btn-dashboard">
                <span>obras stadium</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 mb-xl-0 d-flex justify-content-center">
            <div className="container-img-desktop">
              <Link to="/dashboard/information" className="btn-dashboard">
                <span>information</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
