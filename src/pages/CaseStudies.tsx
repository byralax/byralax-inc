import React from 'react';
import { ArrowLeft, Calendar, Clock, Users, TrendingUp, Shield, Zap, Lock, Eye, Database, Globe } from 'lucide-react';
import { PageType } from '../App';

interface CaseStudiesProps {
  onNavigate: (page: PageType) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigate }) => {
  const caseStudies = [
    {
      id: 'securebank-transformation',
      title: 'SecureBank Digital Transformation',
      client: 'Major Regional Bank',
      industry: 'Financial Services',
      duration: '8 months',
      teamSize: '12 specialists',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Legacy banking system vulnerable to modern cyber threats with outdated security protocols',
      solution: 'Complete security overhaul implementing zero-trust architecture and real-time fraud detection',
      results: [
        '99.9% reduction in security incidents',
        '40% faster transaction processing',
        'SOC 2 Type II compliance achieved',
        '$2.3M saved in potential fraud losses'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      icon: Shield,
      color: 'from-green-400 to-blue-500',
      featured: true
    },
    {
      id: 'cyberguard-monitoring',
      title: 'CyberGuard Threat Detection Platform',
      client: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      duration: '6 months',
      teamSize: '8 specialists',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'No real-time visibility into network threats across 50+ global facilities',
      solution: 'AI-powered threat detection dashboard with automated incident response',
      results: [
        '24/7 real-time monitoring implemented',
        '85% faster threat detection',
        '60% reduction in false positives',
        'Zero successful breaches in 12 months'
      ],
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'Elasticsearch', 'Grafana'],
      icon: Eye,
      color: 'from-purple-400 to-pink-500',
      featured: true
    },
    {
      id: 'ecommerce-security',
      title: 'E-Commerce Security Hardening',
      client: 'Leading Online Retailer',
      industry: 'E-Commerce',
      duration: '4 months',
      teamSize: '6 specialists',
      image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Payment processing vulnerabilities and PCI DSS compliance gaps',
      solution: 'Comprehensive API security layer with advanced payment protection',
      results: [
        'PCI DSS Level 1 compliance achieved',
        '99.99% payment processing uptime',
        '50% reduction in chargebacks',
        '$1.8M increase in customer trust metrics'
      ],
      technologies: ['FastAPI', 'MongoDB', 'Stripe', 'OAuth2', 'Kubernetes'],
      icon: Lock,
      color: 'from-cyan-400 to-blue-500',
      featured: false
    },
    {
      id: 'healthcare-hipaa',
      title: 'Healthcare HIPAA Compliance Platform',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      duration: '10 months',
      teamSize: '15 specialists',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Patient data security across multiple hospitals and clinics',
      solution: 'End-to-end encrypted patient management system with audit trails',
      results: [
        'HIPAA compliance across all facilities',
        '100% data encryption at rest and transit',
        '90% improvement in audit response time',
        'Zero patient data breaches'
      ],
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS KMS'],
      icon: Database,
      color: 'from-red-400 to-pink-500',
      featured: false
    },
    {
      id: 'government-infrastructure',
      title: 'Government Infrastructure Security',
      client: 'State Government Agency',
      industry: 'Government',
      duration: '12 months',
      teamSize: '20 specialists',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Critical infrastructure protection against nation-state threats',
      solution: 'Multi-layered defense system with advanced threat intelligence',
      results: [
        'NIST Cybersecurity Framework implementation',
        '100% critical asset protection',
        '95% reduction in successful attacks',
        'FedRAMP authorization achieved'
      ],
      technologies: ['Angular', 'Java', 'Oracle', 'Splunk', 'Azure'],
      icon: Globe,
      color: 'from-blue-400 to-indigo-500',
      featured: false
    },
    {
      id: 'fintech-startup',
      title: 'FinTech Startup Security Foundation',
      client: 'Emerging Payment Platform',
      industry: 'Financial Technology',
      duration: '5 months',
      teamSize: '10 specialists',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Building security-first architecture for rapid scaling',
      solution: 'Microservices architecture with built-in security controls',
      results: [
        'Security-by-design implementation',
        '500% user growth with zero breaches',
        'Series A funding secured',
        'Regulatory approval in 3 states'
      ],
      technologies: ['Next.js', 'Go', 'PostgreSQL', 'Docker', 'Terraform'],
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: TrendingUp },
    { label: 'Security Incidents Prevented', value: '10,000+', icon: Shield },
    { label: 'Client Satisfaction', value: '99.8%', icon: Users },
    { label: 'Average Response Time', value: '<30min', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Real-world cybersecurity transformations that protected organizations and enabled growth
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="py-16 lg:py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Success Stories
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.filter(study => study.featured).map((study) => (
              <div
                key={study.id}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${study.color} bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-cyan-500/20 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold mb-4">{study.client} • {study.industry}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Case Studies */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              All Case Studies
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${study.color} bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm`}>
                      <study.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {study.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-cyan-500/20 backdrop-blur-sm text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold mb-3 text-sm">{study.industry}</p>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{study.challenge}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Security?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can protect and empower your organization with cutting-edge cybersecurity solutions.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;