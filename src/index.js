import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductContext, { ProductContextProvider } from './Context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

