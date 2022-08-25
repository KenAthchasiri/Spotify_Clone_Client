import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { initailState } from './utils/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initailState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


