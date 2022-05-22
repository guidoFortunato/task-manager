import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {

  const {registerUser} = useContext(UserContext);
  const [name, setName] = useState('Guido');
  const [lastname, setLastname] = useState('Fortunato');
  const [dni, setDni] = useState('37417530');
  const [email, setEmail] = useState('guido@test.com');
  const [confirmEmail, setConfirmEmail] = useState('guido@test.com');
  const [pass, setPass] = useState('riquelme');
  const [confirmPass, setConfirmPass] = useState('riquelme');

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      await registerUser(email,pass)
      console.log('usuario creado')
      navigate('/dashboard')
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/email-already-in-use') console.log('email ya está en uso')
      if (error.code === 'auth/invalid-email') console.log('email inválido')
      if (error.code === 'auth/missing-email') console.log('ingrese email')
      if (error.code === 'auth/internal-error') console.log('ha ocurrido algo inesperado, por favor intente nuevamente mas tarde')
      if (error.code === 'auth/weak-password') console.log('la contraseña debe contener al menos 6 caracteres')
      
    }
    // setName('')
    // setLastname('')
    // setDni()
    // setEmail('')
    // setConfirmEmail('')
    // setPass('')
    // setConfirmPass('')
  }
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title text-center">Register</h2>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputLastname">Lastname</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputLastname"
                  value={lastname}
                  onChange={(e)=>setLastname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputDni">DNI</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="inputDni"
                  value={dni}
                  onChange={(e)=>setDni(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmailRegister">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputEmailRegister"
                  autoComplete="username"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmInputEmailRegister">Confirm Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="confirmInputEmailRegister"
                  autoComplete="username"
                  value={confirmEmail}
                  onChange={(e)=>setConfirmEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordRegister">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputPasswordRegister"
                  autoComplete="new-password"
                  value={pass}
                  onChange={(e)=>setPass(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputConfirmPasswordRegister">Confirm Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputConfirmPasswordRegister"
                  autoComplete="new-password"
                  value={confirmPass}
                  onChange={(e)=>setConfirmPass(e.target.value)}
                />
              </div>
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
