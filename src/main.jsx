// src/main.jsx

import { StrictMode } from 'react'; // <-- Keep original import style
import { createRoot } from 'react-dom/client'; // <-- Keep original import style
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // <-- NEW IMPORT

createRoot(document.getElementById('root')).render( // <-- Keep original render style
  <StrictMode>
    {/* This is the mandatory wrapper for the <Link> components! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);