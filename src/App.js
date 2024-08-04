import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import Skills from './components/Skills/Skills';
import DesignSection from './components/SkillsSections/DesignSection';
import DevelopmentSection from './components/SkillsSections/DevelopmentSection';
import AnimationSection from './components/SkillsSections/AnimationSection';
import VideoSection from './components/SkillsSections/VideoSection';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProjectGrid />
                <Skills />
                <Contact />
              </>
            } />
            <Route path="/skills/design" element={<DesignSection />} />
            <Route path="/skills/development" element={<DevelopmentSection />} />
            <Route path="/skills/animation" element={<AnimationSection />} />
            <Route path="/skills/video" element={<VideoSection />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;