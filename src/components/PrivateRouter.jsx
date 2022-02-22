import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth';
import { useNavigate, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const Redirect = ({ to }) => {
    useEffect(() => {
      navigate(to);
    });
    return null;
  };
  return <Route {...rest} element={(props) => (user ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
