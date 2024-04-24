import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';


const value = {
  ripple: true,
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={value}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
)
