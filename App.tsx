import React, { Suspense, lazy } from 'react';
// Changed import from react-router-dom to react-router to fix missing export errors
import { HashRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import CursorTrail from './components/CursorTrail';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-t-2 border-primary border-solid rounded-full animate-spin"></div>
      <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] animate-pulse">Initializing Excellence</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CursorTrail />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;