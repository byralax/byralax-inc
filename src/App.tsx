import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './pages/CaseStudies';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Certifications from './pages/Certifications';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export type PageType = 'home' | 'case-studies' | 'blog' | 'blog-post' | 'certifications' | 'careers' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle page navigation with loading state
  const handleNavigation = (page: PageType) => {
    if (page === currentPage) return;
    
    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      // You could implement URL-based routing here if needed
      // For now, we'll just ensure we're on the home page
      if (currentPage !== 'home') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  // Update document title based on current page
  useEffect(() => {
    const titles = {
      'home': 'Byralax - Elite Cybersecurity Development',
      'case-studies': 'Case Studies - Byralax',
      'blog': 'Security Blog - Byralax',
      'blog-post': 'Blog Post - Byralax',
      'certifications': 'Certifications - Byralax',
      'careers': 'Careers - Byralax',
      'privacy': 'Privacy Policy - Byralax',
      'terms': 'Terms of Service - Byralax'
    };

    document.title = titles[currentPage] || 'Byralax - Elite Cybersecurity Development';
  }, [currentPage]);

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-300">Loading...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case 'case-studies':
        return <CaseStudies onNavigate={handleNavigation} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigation} onSelectPost={setSelectedBlogPost} />;
      case 'blog-post':
        return <BlogPost postId={selectedBlogPost} onNavigate={handleNavigation} />;
      case 'certifications':
        return <Certifications onNavigate={handleNavigation} />;
      case 'careers':
        return <Careers onNavigate={handleNavigation} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigation} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigation} />;
      default:
        return (
          <main>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Team />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;