import React from 'react';
import { ExternalLink, Github, Shield, Zap, Lock, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'SecureBank Platform',
      category: 'Financial Security',
      description: 'Complete security overhaul for a major banking platform, implementing multi-factor authentication, encrypted transactions, and real-time fraud detection.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'JWT'],
      features: ['Zero Trust Architecture', 'Advanced Encryption', 'Real-time Monitoring', 'Compliance Ready'],
      icon: Shield,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'CyberGuard Dashboard',
      category: 'Security Monitoring',
      description: 'Advanced threat detection dashboard providing real-time security insights and automated incident response for enterprise clients.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'Docker', 'Elasticsearch', 'Grafana'],
      features: ['AI-Powered Detection', 'Custom Analytics', 'Automated Response', 'Multi-tenant Support'],
      icon: Eye,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'SecureCommerce API',
      category: 'E-commerce Security',
      description: 'Robust API security layer for e-commerce platforms, featuring advanced payment protection and PCI DSS compliance.',
      image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['FastAPI', 'MongoDB', 'AWS', 'Stripe', 'OAuth2'],
      features: ['PCI DSS Compliant', 'Rate Limiting', 'Data Encryption', 'Audit Trails'],
      icon: Lock,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Lightning Auth',
      category: 'Authentication System',
      description: 'High-performance authentication microservice with biometric integration and adaptive security measures.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'WebAuthn'],
      features: ['Biometric Support', 'Risk-based Auth', 'SSO Integration', 'Mobile SDK'],
      icon: Zap,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const handleViewAllProjects = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise through successful cybersecurity implementations and secure development projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${project.color} bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                    <project.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-900/80 backdrop-blur-sm text-cyan-400 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700/50 text-gray-300 px-2 lg:px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <button 
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;