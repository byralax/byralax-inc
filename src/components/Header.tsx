import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsResourcesOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.resources-dropdown')) {
        setIsResourcesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsResourcesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { href: '#services', label: 'Services', type: 'scroll' as const },
    { href: '#about', label: 'About', type: 'scroll' as const },
    { href: '#portfolio', label: 'Portfolio', type: 'scroll' as const },
    { href: '#team', label: 'Team', type: 'scroll' as const },
  ];

  const resourceItems = [
    { page: 'case-studies' as PageType, label: 'Case Studies' },
    { page: 'blog' as PageType, label: 'Security Blog' },
    { page: 'certifications' as PageType, label: 'Certifications' },
    { page: 'careers' as PageType, label: 'Careers' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageNavigation = (page: PageType) => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button 
              onClick={() => handlePageNavigation('home')}
              className="flex items-center space-x-2 group focus-ring"
              aria-label="Go to homepage"
            >
              <div className="relative">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-300/30 transition-all duration-300 -z-10"></div>
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                byralax
              </span>
            </button>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
              {currentPage === 'home' && navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-sm lg:text-base focus-ring"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="relative resources-dropdown">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-sm lg:text-base focus-ring"
                  aria-expanded={isResourcesOpen}
                  aria-haspopup="true"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl py-2 fade-in"
                    role="menu"
                  >
                    {resourceItems.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => handlePageNavigation(item.page)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors focus-ring"
                        role="menuitem"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={handleContactClick}
                className="btn-primary text-sm lg:text-base"
              >
                Get Started
              </button>
            </nav>

            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2 focus-ring"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden bg-gray-900/98 backdrop-blur-md border-b border-gray-800 shadow-xl fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {currentPage === 'home' && navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium text-lg py-2 w-full text-left focus-ring"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t border-gray-700 pt-4">
                <div className="text-gray-400 text-sm font-medium mb-2">Resources</div>
                {resourceItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handlePageNavigation(item.page)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium text-lg py-2 w-full text-left pl-4 focus-ring"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={handleContactClick}
                className="w-full btn-primary text-lg mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;