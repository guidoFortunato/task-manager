import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
// import { AiFillEyeInvisible } from "react-icons/ai";
// import { AiFillEye } from "react-icons/ai";
import { alertLoginSuccess } from "../services/alerts/Alerts";

import FormError from "../components/FormError";

import "../css/login.css";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);  

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      pass: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await loginUser(data.email, data.pass);
      alertLoginSuccess();
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/invalid-email") {
        setError("email", {
          message: "invalid email",
        });
      }
      if (error.code === "auth/missing-email") {
        setError("email", {
          message: "enter email",
        });
      }
      if (error.code === "auth/internal-error") {
        setError("email", {
          message: "something unexpected has occurred, please try again later.",
        });
      }
      if (error.code === "auth/user-not-found") {
        setError("email", {
          message: "user does not exist",
        });
      }
      if (error.code === "auth/wrong-password") {
        setError("pass", {
          message: "wrong password",
        });
      }
    }
  };

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          <div className="card-text">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-4 group-input">
                <label htmlFor="inputEmailLogin">Email Address</label>
                <div className="container-input">
                  <input
                    type="email"
                    placeholder="enter an email"
                    className="form-control form-control-sm input-login"
                    id="inputEmailLogin"
                    autoComplete="username"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "required field",
                      },
                      // pattern: {
                      //   value:
                      //     /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                      //   message: "Incorrect email format",
                      // },
                    })}
                  />
                </div>

                <FaUserAlt className="user-icon" />
                <FormError error={errors.email} />
              </div>

              <div className="form-group mb-5 group-input">
                <label htmlFor="inputPasswordLogin">Password</label>
                <input
                  // type={inputType ? "text" : "password"}
                  type='password'
                  className="form-control form-control-sm input-login"
                  placeholder="enter a password"
                  id="inputPasswordLogin"
                  autoComplete="current-password"
                  {...register("pass", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                  })}
                />
                <RiLockPasswordFill className="user-icon" />

                {/* {showPass ? (
                  <AiFillEyeInvisible
                    className="pass-icon-hide"
                    onClick={togglePass}
                  />
                ) : (
                  <AiFillEye className="pass-icon-hide" onClick={togglePass} />
                )} */}

                <FormError error={errors.pass} />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className={
                    loading
                      ? "btn btn-primary w-100 loading"
                      : "btn btn-primary w-100"
                  }
                >
                  {loading ? "Loading..." : "Log in"}
                </button>
                <div className="signup">
                  <span className="me-1">Don't have an account?</span>
                  
                  <Link to="/register" className="btn-click-here">
                    Click here
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
