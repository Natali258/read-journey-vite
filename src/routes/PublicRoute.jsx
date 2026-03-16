import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSlice/AuthSlice';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/recommended" />;
 
}
