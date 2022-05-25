import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';


const PrivateRouteDashboard = (props) => { //{element: Element, ...rest}

  const { user } = useContext(UserContext);

  if (!user) return <Navigate to='/login'/>
  return props.children

  // return <Route {...rest}>{user ? <Element /> : <Navigate to='/login'/>}</Route>

}

export default PrivateRouteDashboard;
