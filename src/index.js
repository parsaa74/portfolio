import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './app';
import './index.css';  // Make sure you have this file for Tailwind

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);