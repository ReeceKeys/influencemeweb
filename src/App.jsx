import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Tier1 from './pages/Tier1.jsx';
import Tier2 from './pages/Tier2.jsx';
import Tier3 from './pages/Tier3.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './index.css';

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);
}

function AppContent() {
  usePageTracking();

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#2f2f2f]">
        <Header />
        <main className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tier1" element={<Tier1 />} />
            <Route path="/tier2" element={<Tier2 />} />
            <Route path="/tier3" element={<Tier3 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer className="fixed bottom-0 w-full" />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
