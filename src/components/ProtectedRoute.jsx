import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';




const ProtextedRoute = ({children}) => {
  const user = useSelector((state) => state.data.user.user);


  if(!user){
return <Navigate to="/" />
  }

  return children
}

export default ProtextedRoute
