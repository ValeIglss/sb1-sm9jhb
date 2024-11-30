import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import TrackingFeatures from './components/TrackingFeatures';
import Contact from './components/Contact';
import Sitemap from './components/Sitemap';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <TrackingFeatures />
      <Contact />
      <Sitemap />
    </div>
  );
}