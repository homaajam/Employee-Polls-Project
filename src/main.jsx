import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import middleware from './middleware';
import reducer from './reducers';
import { createStore } from 'redux';
import {Provider} from'react-redux';
import { HashRouter as Router } from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';

const store=createStore(reducer, middleware);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />

      </Router>
    </Provider>
  </StrictMode>,
)
