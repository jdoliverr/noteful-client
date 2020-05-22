import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import NotefulError from './components/NotefulError/NotefulError';

ReactDOM.render(
  <BrowserRouter>
  <NotefulError>
    <App />
  </NotefulError>  
  </BrowserRouter>,
  document.getElementById('root')
);