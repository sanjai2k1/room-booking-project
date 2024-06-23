import React from 'react'
import { useLogin } from '../components/LoginContext'

const HomeComp = () => {
  const {login,showUserDashboard,setShowuserDashboard} = useLogin()
if(login && showUserDashboard)
  {
  return (

    
    <div className="text-center">
    <h1>Welcome to the User Dashboard</h1>
    <p>Select an option from the sidebar to begin.</p>
  </div>
  )
}
else{
  <></>
}
}

export default HomeComp