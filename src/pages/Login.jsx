import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormError from "../components/FormError";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  // const [email, setEmail] = useState("guido@test.com");
  // const [pass, setPass] = useState("riquelme");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "guido@test.com",
      pass: "123456",
    },
  });

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.pass);
      navigate("/dashboard");
    } catch (error) {
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
              <div className="form-group mb-4">
                <label htmlFor="inputEmailLogin">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputEmailLogin"
                  autoComplete="username"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                  })}
                />
                <FormError error={errors.email} />
              </div>
              <div className="form-group mb-5">
                <label htmlFor="inputPasswordLogin">Password</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputPasswordLogin"
                  autoComplete="current-password"
                  {...register("pass", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                  })}
                />
                <FormError error={errors.pass} />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">
                  Sign in
                </button>
                <div className="signup">
                  Dont have an account?{" "}
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
