import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Tier1 from './pages/Tier1.jsx';
import Tier2 from './pages/Tier2.jsx';
import Tier3 from './pages/Tier3.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './index.css';


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* min-h-screen ensures full viewport */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* flex-1 ensures main takes all remaining space */}
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
    </Router>
  );
}
