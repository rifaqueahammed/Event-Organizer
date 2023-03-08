import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalContext from './Store/Context/Adminside';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContext>
    <App />
    </ModalContext>
  </React.StrictMode>
);


