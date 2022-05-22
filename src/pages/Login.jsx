import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Login = () => {

  const {user, setUser, loginUser} = useContext(UserContext);
  const [email, setEmail] = useState('guido@test.com');
  const [pass, setPass] = useState('riquelme');

  const navigate = useNavigate()


  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await loginUser(email,pass)
      console.log('usuario logueado')
      navigate('/dashboard')
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/email-already-in-use') console.log('email ya está en uso')
      if (error.code === 'auth/invalid-email') console.log('email inválido')
      if (error.code === 'auth/missing-email') console.log('ingrese email')
      if (error.code === 'auth/internal-error') console.log('ha ocurrido algo inesperado, por favor intente nuevamente mas tarde')
      if (error.code === 'auth/wrong-password') console.log('contraseña incorrecta')
      if (error.code === 'auth/user-not-found') console.log('el usuario no existe')
    }

  }
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputEmailLogin">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputEmailLogin"
                  autoComplete="username"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordLogin">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputPasswordLogin"
                  autoComplete="current-password"
                  value={pass}
                  onChange={e=>setPass(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
              <div className="signup">
                Dont have an account? <Link to='/register' className="btn-click-here">Click here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
