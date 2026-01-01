import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './styles/global.css';

// Lazy load components below the fold
const Features = lazy(() => import('./components/Features'));
const Packages = lazy(() => import('./components/Packages'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<div style={{height: "100vh"}}></div>}>
        <Features />
        <Packages />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
