/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from '../Error/Error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return <Error />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ErrorBoundary;
