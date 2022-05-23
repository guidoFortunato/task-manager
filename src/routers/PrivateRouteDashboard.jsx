import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { UserContext } from '../context/UserProvider';


const PrivateRouteDashboard = (props) => {

  const { user } = useContext(UserContext);
  if(!user) return props.children
  return <Navigate to='/dashboard' />
}

export default PrivateRouteDashboard;
