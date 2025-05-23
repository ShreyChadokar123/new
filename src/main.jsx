import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


// Ensure you're rendering the App component in the root element
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
