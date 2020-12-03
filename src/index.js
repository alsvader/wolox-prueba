/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import './config/i18n';

ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
