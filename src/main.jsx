import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Lenis from '@studio-freight/lenis';

import { ThemeProvider } from './components/ThemeContext.jsx'; // Import the ThemeProvider

const lenis = new Lenis({
  duration: 1.2, // The duration of the smooth scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for the scroll
  smooth: true, // Enable/disable smooth scrolling
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
