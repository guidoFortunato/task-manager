import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";

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
      pass: '123456',
      repass: '123456'
    },
  });

  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.pass);
      console.log("usuario creado");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/weak-password":
          
          setError("pass", {
            message: `The password ${data.password} is very weak`,
          });

          break;

        case "auth/missing-email":
       
          setError("pass", {
            message: `Enter email address`,
          });

          break;

        case "auth/email-already-in-use":
         
          setError("email", {
            message: `The mail: ${data.email} has already been registered.`,
          });
          break;
        case "auth/internal-error":
          
          setError("email", {
            message: `Something unexpected has occurred, please try again later.`,
          });
          break;

        case "auth/invalid-email":

          setError("email", {
            message: `The mail: ${data.email} is invalid`,
          });
          break;

        default:
          console.log("An error occurred in the server");
      }
      // if (error.code === 'auth/email-already-in-use') console.log('email ya está en uso')
      // if (error.code === 'auth/invalid-email') console.log('email inválido')
      // if (error.code === 'auth/missing-email') console.log('ingrese email')
      // if (error.code === 'auth/internal-error') console.log('ha ocurrido algo inesperado, por favor intente nuevamente mas tarde')
      // if (error.code === 'auth/weak-password') console.log('la contraseña debe contener al menos 6 caracteres')
    }
  };

  // const [styleRequired, setStyleRequired] = useState(false);

  // const [name, setName] = useState('Guido');
  // const [lastname, setLastname] = useState('Fortunato');
  // const [email, setEmail] = useState('guido@test.com');
  // const [confirmEmail, setConfirmEmail] = useState('guido@test.com');
  // const [pass, setPass] = useState('riquelme');
  // const [confirmPass, setConfirmPass] = useState('riquelme');

  // const handleSubmit = async (e)=>{
  //   e.preventDefault()

  //   try {
  //     await registerUser(email,pass)
  //     console.log('usuario creado')
  //     navigate('/dashboard')
  //   } catch (error) {
  //     console.log(error.code)
  //     if (error.code === 'auth/email-already-in-use') console.log('email ya está en uso')
  //     if (error.code === 'auth/invalid-email') console.log('email inválido')
  //     if (error.code === 'auth/missing-email') console.log('ingrese email')
  //     if (error.code === 'auth/internal-error') console.log('ha ocurrido algo inesperado, por favor intente nuevamente mas tarde')
  //     if (error.code === 'auth/weak-password') console.log('la contraseña debe contener al menos 6 caracteres')

  //   }
  //   setName('')
  //   setLastname('')
  //   setDni()
  //   setEmail('')
  //   setConfirmEmail('')
  //   setPass('')
  //   setConfirmPass('')
  // }
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title text-center">Register</h2>
          <div className="card-text">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-4">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                  })}
                />
                {errors.name && (
                  <span className="color-errors">{errors.name.message}</span>
                )}
              </div>
              <div className="form-group mb-4">
                <label htmlFor="inputLastname">Lastname</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputLastname"
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "required field",
                    },
                  })}
                />
                {errors.lastname && (
                  <span className="color-errors">
                    {errors.lastname.message}
                  </span>
                  // <div className="alert alert-danger" role="alert">
                  //   {errors.lastname.message}
                  // </div>
                  
                )}
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
                {errors.email && (
                  <span className="color-errors">{errors.email.message}</span>
                )}
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
                {errors.confirmEmail && (
                  <span className="color-errors">
                    {errors.confirmEmail.message}
                  </span>
                )}
              </div>
              <div className="form-group mb-4">
                <label htmlFor="inputPasswordRegister">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputPasswordRegister"
                  autoComplete="new-password"
                  {...register("pass", {
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
                {errors.pass && (
                  <span className="color-errors">{errors.pass.message}</span>
                )}
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
                    required: {
                      value: true,
                      message: "required field",
                    },
                    validate: {
                      equals: (value) =>
                        value === getValues("pass") || "Passwords do not match",
                      // message: 'Passwords do not match'
                    },
                  })}
                />
                {errors.repass && (
                  <span className="color-errors">{errors.repass.message}</span>
                )}
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
