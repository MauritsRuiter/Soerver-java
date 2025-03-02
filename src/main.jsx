import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainSite from './MainSite.jsx';
import './index.css';

const pathname = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {pathname === '/' ? < MainSite /> : <SubSite />}
  </StrictMode>
);