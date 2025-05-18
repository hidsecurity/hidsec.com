import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import NewsPage from './pages/NewsPage';
import IntroEthicalHacking from './pages/posts/IntroEthicalHacking';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-green-300 font-sans">
        <Navbar />
        
        <main className="min-h-screen container mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/posts/intro-ethical-hacking" element={<IntroEthicalHacking />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App