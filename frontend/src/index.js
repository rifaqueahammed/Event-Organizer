import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalContext from './Store/Context/Adminside';
import ServiceModalContext from './Store/Context/ServiceAdditionModal';
import {Provider} from 'react-redux';
import Store from './Store/Redux/Store/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContext>
      <ServiceModalContext>
          <Provider store={Store}>
            <App />
          </Provider>
    </ServiceModalContext>
    </ModalContext>
  </React.StrictMode>
);


