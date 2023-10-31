import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <h1>AgriCo</h1>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);