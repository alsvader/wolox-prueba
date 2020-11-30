import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ isAuthenticated, history }) => {

  useEffect(() => {
    // history.redirect(ROUTES.DASHBOARD);
  }, [isAuthenticated]);

  const handleSubmit = () => {

  };

  return (
    <div>
      Login Form
    </div>
  );
};

export default Login;

