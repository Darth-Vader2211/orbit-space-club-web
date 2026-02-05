import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Galaxy from './components/Galaxy';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Missions from './components/Missions';
import Crew from './components/Crew';
import Join from './components/Join';
import BentoGrid from './components/BentoGrid';

import MissionDetail from './components/MissionDetail'; // Import the new component

export default function App() {
  return (
    // CONTAINER: switched to min-h-screen and flex-col for sticky footer layout
    <div className="relative w-full min-h-screen bg-space-900 text-white selection:bg-blue-500 selection:text-white flex flex-col">

      {/* 1. Global Background (Fixed) */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseInteraction={true}
          mouseRepulsion={true}
          density={2.3}
          glowIntensity={0.4}
          saturation={0.3}
          hueShift={180}
          twinkleIntensity={0.4}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
        />
      </div>

      {/* 2. Global Navbar (Fixed Top) */}
      <Navbar />

      {/* 3. Dynamic Page Content (Expands to push footer down) */}
      <div className="relative z-10 pt-20 flex-grow flex flex-col">
        <Routes>
          {/* HOME: Hero + About + BentoGrid */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <BentoGrid />
            </>
          } />

          {/* OTHER PAGES */}
          <Route path="/missions" element={<Missions />} />
          <Route path="/mission/:slug" element={<MissionDetail />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>

      {/* 4. Global Footer (Fixed Bottom of Layout) */}
      <Footer />

    </div>
  );
}
