import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render(
  <Router >
    <ScrollToTop>
    <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
