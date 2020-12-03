import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouterApp from './components/RouterApp/RouterApp';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
}

export default App;
