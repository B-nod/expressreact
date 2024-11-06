import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from ".";

const PriveteRoute=()=>{
    isAuthenticated()&& isAuthenticated().user.role===1 ?
    <Outlet/>:(
        <Navigate to='/signin'/>
    )
}

export default PriveteRoute