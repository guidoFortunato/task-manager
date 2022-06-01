import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
// import { erroresFirebase } from "../firebase/erroresFirebase";
import FormError from "../components/FormError";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      name: "guido",
      lastname: "fortunato",
      email: "guido@test.com",
      confirmEmail: "guido@test.com",
      pass: "123456",
      repass: "123456",
    },
  });

  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await registerUser(data.email, data.pass);
      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          setError("pass", {
            message: `The password '${data.password}' is very weak`,
          });

          break;

        case "auth/missing-email":
          setError("pass", {
            message: `Enter email address`,
          });

          break;

        case "auth/email-already-in-use":
          setError("email", {
            message: `${data.email} has already been registered.`,
          });
          break;
        case "auth/internal-error":
          setError("email", {
            message: `Something unexpected has occurred, please try again later.`,
          });
          break;

        case "auth/invalid-email":
          setError("email", {
            message: `${data.email} is invalid`,
          });
          break;

        default:
          setError("email", {
            message: "An error occurred in the server",
          });
      }
    }
  };

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Register</h2>
          <div className="card-text">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-4">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  {...register("name", {
                    setValueAs: (v) => v.trim(),
                    required: {
                      value: true,
                      message: "required field",
                    },
                    validate: {
                      trim: (v) => {
                        if (!v.trim()) {
                          return "Please write something";
                        }
                        return true;
                      },
                    },
                  })}
                />
                {/* {errors.name && (
                  <span className="color-errors">{errors.name.message}</span>
                )} */}
                <FormError error={errors.name} />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="inputLastname">Lastname</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputLastname"
                  {...register("lastname", {
                    setValueAs: (v) => v.trim(),
                    required: {
                      value: true,
                      message: "required field",
                    },
                    validate: {
                      trim: (v) => {
                        if (!v.trim()) {
                          return "Please write something";
                        }
                        return true;
                      },
                    },
                  })}
                />
                
                <FormError error={errors.lastname} />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="inputEmailRegister">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputEmailRegister"
                  autoComplete="username"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                    pattern: {
                      value:
                        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                      message: "Incorrect email format",
                    },
                  })}
                />
                {/* {errors.firebase && (
                  <span className="color-errors">
                    {errors.firebase.message}
                  </span>
                )} */}
                <FormError error={errors.firebase} />
                <FormError error={errors.email} />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="confirmInputEmailRegister">
                  Confirm Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="confirmInputEmailRegister"
                  autoComplete="username"
                  {...register("confirmEmail", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                    validate: {
                      equals: (v) =>
                        v === getValues("email") || "Mails must be the same",
                    },
                  })}
                />
                {/* {errors.confirmEmail && (
                  <span className="color-errors">
                    {errors.confirmEmail.message}
                  </span>
                )} */}
                <FormError error={errors.confirmEmail} />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="inputPasswordRegister">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputPasswordRegister"
                  autoComplete="new-password"
                  {...register("pass", {
                    setValueAs: (v) => v.trim(),
                    required: {
                      value: true,
                      message: "required field",
                    },

                    minLength: {
                      value: 6,
                      message: "Must have at least 6 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Must have a maximum of 15 characters",
                    },
                    validate: {
                      trim: (v) => {
                        if (!v.trim()) return "Please write something";
                        return true;
                      },
                    },
                  })}
                />
                {/* {errors.pass && (
                  <span className="color-errors">{errors.pass.message}</span>
                )} */}
                <FormError error={errors.pass} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="inputConfirmPasswordRegister">
                  Confirm Password
                </label>
                <input
                  type="password"
                  // className={styleRequired ? 'form-control form-control-sm error-input' : 'form-control form-control-sm'}
                  className="form-control form-control-sm"
                  id="inputConfirmPasswordRegister"
                  autoComplete="new-password"
                  {...register("repass", {
                    setValueAs: (v) => v.trim(),
                    required: {
                      value: true,
                      message: "required field",
                    },
                    validate: {
                      equals: (value) =>
                        value === getValues("pass") || "Passwords do not match",
                    },
                  })}
                />
                {/* {errors.repass && (
                  <span className="color-errors">{errors.repass.message}</span>
                )} */}
                <FormError error={errors.repass} />
              </div>
              {/* {errors.repass && setStyleRequired(true) } */}

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
