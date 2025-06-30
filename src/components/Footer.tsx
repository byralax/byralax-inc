import React from 'react';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = {
    Services: [
      { label: 'Penetration Testing', action: () => handleScrollToSection('#services') },
      { label: 'Security Audits', action: () => handleScrollToSection('#services') },
      { label: 'Web Development', action: () => handleScrollToSection('#services') },
      { label: 'Cloud Security', action: () => handleScrollToSection('#services') },
      { label: 'Incident Response', action: () => handleScrollToSection('#services') },
      { label: 'Compliance Consulting', action: () => handleScrollToSection('#services') }
    ],
    Company: [
      { label: 'About Us', action: () => handleScrollToSection('#about') },
      { label: 'Our Team', action: () => handleScrollToSection('#team') },
      { label: 'Careers', action: () => onNavigate('careers') },
      { label: 'Press', action: () => onNavigate('blog') },
      { label: 'Contact', action: () => handleScrollToSection('#contact') },
      { label: 'Blog', action: () => onNavigate('blog') }
    ],
    Resources: [
      { label: 'Case Studies', action: () => onNavigate('case-studies') },
      { label: 'White Papers', action: () => onNavigate('blog') },
      { label: 'Security Blog', action: () => onNavigate('blog') },
      { label: 'Documentation', action: () => onNavigate('blog') },
      { label: 'API Reference', action: () => onNavigate('blog') },
      { label: 'Support Center', action: () => handleScrollToSection('#contact') }
    ],
    Legal: [
      { label: 'Privacy Policy', action: () => onNavigate('privacy') },
      { label: 'Terms of Service', action: () => onNavigate('terms') },
      { label: 'Security Policy', action: () => onNavigate('blog') },
      { label: 'Cookie Policy', action: () => onNavigate('privacy') },
      { label: 'GDPR Compliance', action: () => onNavigate('privacy') },
      { label: 'Certifications', action: () => onNavigate('certifications') }
    ]
  };

  const handleScrollToSection = (href: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollToTop = () => {
    onNavigate('home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button 
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 mb-4 lg:mb-6 group"
            >
              <div className="relative">
                <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-300/30 transition-all duration-300"></div>
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                byralax
              </span>
            </button>
            <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
              Protecting your digital future with cutting-edge cybersecurity solutions and secure development practices.
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">{title}</h3>
              <ul className="space-y-2 lg:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-xs lg:text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300 text-xs lg:text-sm">security@byralax.com</span>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300 text-xs lg:text-sm">+1 (555) 123-SECURE</span>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300 text-xs lg:text-sm">San Francisco, CA</span>
            </div>
          </div>

          {/* Security Badges */}
          <div className="border-t border-gray-700 pt-6 lg:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-xs lg:text-sm text-center lg:text-left">
                © 2025 Byralax. All rights reserved. | SOC 2 Type II Certified | ISO 27001 Compliant
              </div>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="text-xs text-gray-500">
                  <span className="text-green-400">●</span> All systems operational
                </div>
                <div className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;