import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Signup = ({ isAuthenticated, history }) => {

  useEffect(() => {
    // history.redirect(ROUTES.DASHBOARD);
  }, [isAuthenticated]);

  const handleSubmit = () => {

  };

  return (
    <div>
      Signup form
    </div>
  );
};

export default Signup;

