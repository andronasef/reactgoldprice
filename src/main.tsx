import '@fontsource-variable/cairo';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import MUISetup from './components/common/MUISetup.tsx';
import './style/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MUISetup>
      <App />
    </MUISetup>
  </React.StrictMode>
);
