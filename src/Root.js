import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

function Root() {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
}

export default Root;
