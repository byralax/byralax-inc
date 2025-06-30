import React from 'react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

const Hero = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="main-content"
      role="main"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse will-change-opacity"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 will-change-opacity"></div>
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 lg:pt-20">
        <div className="mb-6 lg:mb-8 flex justify-center">
          <div className="relative">
            <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 lg:px-6 py-2 lg:py-3">
              <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" aria-hidden="true" />
              <span className="text-xs lg:text-sm font-medium text-gray-300">Elite Cybersecurity Solutions</span>
              <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" aria-hidden="true" />
            </div>
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full will-change-opacity" aria-hidden="true"></div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Secure Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Digital Future
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Byralax delivers cutting-edge cybersecurity solutions and web development services. 
          We protect what matters most while building the digital experiences of tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-12 lg:mb-16 px-4">
          <button 
            onClick={handleGetStarted}
            className="group w-full sm:w-auto btn-primary text-base lg:text-lg"
            aria-describedby="get-started-description"
          >
            <span className="flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform will-change-transform" aria-hidden="true" />
            </span>
          </button>
          <span id="get-started-description" className="sr-only">Contact us to begin your cybersecurity project</span>
          
          <button 
            onClick={handleViewWork}
            className="group w-full sm:w-auto btn-secondary text-base lg:text-lg"
            aria-describedby="view-work-description"
          >
            View Our Work
          </button>
          <span id="view-work-description" className="sr-only">See our portfolio of cybersecurity projects</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 card-hover">
            <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 lg:mb-2" aria-label="500 plus security audits completed">500+</div>
            <div className="text-sm lg:text-base text-gray-300">Security Audits</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 card-hover">
            <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1 lg:mb-2" aria-label="99.9 percent uptime guaranteed">99.9%</div>
            <div className="text-sm lg:text-base text-gray-300">Uptime Guaranteed</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 card-hover">
            <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1 lg:mb-2" aria-label="24/7 expert support available">24/7</div>
            <div className="text-sm lg:text-base text-gray-300">Expert Support</div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <Lock className="absolute top-1/4 left-10 w-6 h-6 text-cyan-400/30 animate-bounce delay-300 will-change-transform" />
        <Shield className="absolute top-1/3 right-20 w-8 h-8 text-blue-400/30 animate-pulse delay-700 will-change-opacity" />
        <Zap className="absolute bottom-1/3 left-20 w-7 h-7 text-purple-400/30 animate-bounce delay-1000 will-change-transform" />
      </div>
    </section>
  );
};

export default Hero;