import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({authenticate},props) => {
    console.log("props",{props});
  return ( authenticate == true ? <ProductDetail/> : <Navigate to='/login'/>
  );
};

export default PrivateRouter
