import React from 'react';
import { Shield, Code, Server, Eye, Lock, Zap, Globe, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
      features: ['Network Security Audits', 'Web Application Testing', 'Social Engineering Tests', 'Compliance Reporting']
    },
    {
      icon: Code,
      title: 'Secure Web Development',
      description: 'Building robust, secure web applications with security-first architecture.',
      features: ['OWASP Compliance', 'Secure Code Review', 'API Security', 'Authentication Systems']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 threat detection and incident response to keep your systems secure.',
      features: ['Real-time Monitoring', 'Threat Intelligence', 'Incident Response', 'Forensic Analysis']
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Hardening and securing your entire IT infrastructure and cloud environments.',
      features: ['Cloud Security', 'Network Architecture', 'Server Hardening', 'Access Control']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Comprehensive data security strategies and encryption implementations.',
      features: ['Data Encryption', 'Backup Security', 'Privacy Compliance', 'Data Loss Prevention']
    },
    {
      icon: Globe,
      title: 'Security Consulting',
      description: 'Strategic security guidance and risk assessment for your organization.',
      features: ['Risk Assessment', 'Policy Development', 'Training Programs', 'Compliance Audits']
    }
  ];

  const handleDiscussNeeds = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect and empower your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 lg:p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105"
            >
              <div className="relative mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:bg-cyan-300 transition-colors flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <button 
            onClick={handleDiscussNeeds}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
          >
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;