import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import './assets/fonts/inter.css'

const rootElement  = document.getElementById('root');
const root = createRoot(rootElement);

if (rootElement) {
    root.render(<App />);
}