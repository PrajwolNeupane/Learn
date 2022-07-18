import React from 'react';
import { Navigate } from "react-router-dom";


export default function ProtectRoute({child,user}) {


  return (
   <>
   {
    user === null ? <Navigate to="/login"/> : <>{child}</>
   }
   </>
  )
}
