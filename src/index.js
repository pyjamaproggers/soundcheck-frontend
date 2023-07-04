import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContexProvider } from "./context/authContext.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContexProvider>
        <App />
      </AuthContexProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
