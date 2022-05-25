import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from '../components/Navbar'
import Register from "../pages/Register";
import PrivateRouteDashboard from "./PrivateRouteDashboard";
import PrivateRouteLoginRegister from "./PrivateRouteLoginRegister";
import { UserContext } from '../context/UserProvider';

const AppRouter = () => {

  const {user} = useContext(UserContext);

  if(user === false){
    return <p>loading</p>
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRouteDashboard>
              <Dashboard />
            </PrivateRouteDashboard>
          }
        />

        <Route
          path="/login"
          element={
            <PrivateRouteLoginRegister>
              <Login />
            </PrivateRouteLoginRegister>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRouteLoginRegister>
              <Register />
            </PrivateRouteLoginRegister>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
