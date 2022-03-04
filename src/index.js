import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductContextProvider } from './Context/ProductContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

