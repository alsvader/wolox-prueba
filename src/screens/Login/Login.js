import React, { useEffect } from 'react';

const Login = ({ isAuthenticated }) => {

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

