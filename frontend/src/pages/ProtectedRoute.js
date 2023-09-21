import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {

    const userInfo = useSelector((state) => state.userInfo)

    if(!userInfo){
        return <Navigate to={"/login"} />
    }
    else{
        return <Outlet />
    }

}

export default ProtectedRoute