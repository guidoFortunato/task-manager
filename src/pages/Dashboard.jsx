import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import '../css/dashboard.css'

const Dashboard = () => {
  
  const {user} = useContext(UserContext);
  console.log(user)
  const nameLower = user.email.split('@')[0].toLowerCase()
  const nameCapitalize = nameLower.charAt(0).toUpperCase() + nameLower.slice(1)

  return (
    <div className='dashboard-container'>
      <h2>Welcome {nameCapitalize} to the Dashboard </h2>
    </div>
  );
}

export default Dashboard;
