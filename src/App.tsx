import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import './styles/animations.css';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Adoptia - AI-Powered Pet Adoption Platform';
    
    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
      <ScrollToTop />
        <div className="font-sans text-gray-900 antialiased">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;