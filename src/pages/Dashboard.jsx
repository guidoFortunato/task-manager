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
        Welcome {nameCapitalize} to the Dashboard{" "}
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="container-img">
              <img src="https://picsum.photos/300/300" alt="img tasks" />
            </div>
            <div className="container-link">
              <Link to="/dashboard/tareas" className="btn-dashboard">
                <span>administrar tareas</span>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <img src="https://picsum.photos/300/300" alt="img cripto" />
            <Link to="/dashboard/cripto" className="btn-dashboard">
              <span>sección cripto</span>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <img src="https://picsum.photos/300/300" alt="img tuentrada" />
            <Link to="/dashboard/tuentrada" className="btn-dashboard">
              <span>tuentrada</span>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <img src="https://picsum.photos/300/300" alt="img" />
            <Link to="/dashboard/tuentrada" className="btn-dashboard">
              <span>tuentrada2</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
