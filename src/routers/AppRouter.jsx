import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import PrivateRouteDashboard from "./PrivateRouteDashboard";
import PrivateRouteLoginRegister from "./PrivateRouteLoginRegister";
import { UserContext } from "../context/UserProvider";
import TaskList from "../components/tasks/TaskList";
import CryptocurrencyList from "../components/cryptocurrencies/CryptocurrencyList";
import CryptoDetail from "../pages/CryptoDetail";
import ErrorBoundary from "../components/error/ErrorBoundary.jsx";

// import Footer from "../components/Footer";

const AppRouter = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>loading</p>;
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
        ></Route>
        <Route
          path="/dashboard/tareas"
          element={
            <PrivateRouteDashboard>
              <TaskList />
            </PrivateRouteDashboard>
          }
        />
        <Route
          path="/dashboard/criptos"
          element={
            <PrivateRouteDashboard>
              <CryptocurrencyList />
            </PrivateRouteDashboard>
          }
        />
        <Route
          path="/dashboard/criptos/:name"
          element={
            <PrivateRouteDashboard>
              <ErrorBoundary>
                <CryptoDetail />
              </ErrorBoundary>
            </PrivateRouteDashboard>
          }
        />
        <Route
          path="/dashboard/estadio-obras"
          element={
            <PrivateRouteDashboard>
              <h1>Estadio obras - tuentrada</h1>
            </PrivateRouteDashboard>
          }
        />
        <Route
          path="/dashboard/information"
          element={
            <PrivateRouteDashboard>
              <h1>Information</h1>
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
      {/* <Footer /> */}
    </>
  );
};

export default AppRouter;
