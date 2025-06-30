import React from 'react';
import { ArrowLeft, Award, CheckCircle, Calendar, ExternalLink, Download, Shield, Globe, Lock, Eye } from 'lucide-react';
import { PageType } from '../App';

interface CertificationsProps {
  onNavigate: (page: PageType) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ onNavigate }) => {
  const companyCertifications = [
    {
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      description: 'System and Organization Controls for service organizations',
      validUntil: '2025-12-31',
      status: 'Active',
      category: 'Compliance',
      icon: Shield,
      color: 'from-green-400 to-blue-500',
      details: 'Demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy of customer data.'
    },
    {
      name: 'ISO 27001:2013',
      issuer: 'International Organization for Standardization',
      description: 'Information Security Management System',
      validUntil: '2025-08-15',
      status: 'Active',
      category: 'Security',
      icon: Globe,
      color: 'from-blue-400 to-purple-500',
      details: 'International standard for information security management systems, ensuring systematic approach to managing sensitive information.'
    },
    {
      name: 'FedRAMP Authorized',
      issuer: 'U.S. General Services Administration',
      description: 'Federal Risk and Authorization Management Program',
      validUntil: '2026-03-20',
      status: 'Active',
      category: 'Government',
      icon: Lock,
      color: 'from-red-400 to-pink-500',
      details: 'Government-wide program providing standardized approach to security assessment for cloud products and services.'
    },
    {
      name: 'PCI DSS Level 1',
      issuer: 'PCI Security Standards Council',
      description: 'Payment Card Industry Data Security Standard',
      validUntil: '2025-06-30',
      status: 'Active',
      category: 'Payment Security',
      icon: Eye,
      color: 'from-yellow-400 to-orange-500',
      details: 'Highest level of PCI DSS compliance for organizations processing over 6 million card transactions annually.'
    }
  ];

  const teamCertifications = [
    {
      category: 'Security Leadership',
      certifications: [
        { name: 'CISSP', holder: 'Alex Chen', issuer: '(ISC)²', validUntil: '2026-04-15' },
        { name: 'CISM', holder: 'Alex Chen', issuer: 'ISACA', validUntil: '2025-11-20' },
        { name: 'CISSP', holder: 'Sarah Johnson', issuer: '(ISC)²', validUntil: '2025-09-10' }
      ]
    },
    {
      category: 'Penetration Testing',
      certifications: [
        { name: 'OSCP', holder: 'Alex Chen', issuer: 'Offensive Security', validUntil: '2025-12-01' },
        { name: 'CEH', holder: 'Sarah Johnson', issuer: 'EC-Council', validUntil: '2026-02-28' },
        { name: 'GPEN', holder: 'Sarah Johnson', issuer: 'SANS', validUntil: '2025-07-15' }
      ]
    },
    {
      category: 'Cloud Security',
      certifications: [
        { name: 'AWS Certified Security - Specialty', holder: 'David Kumar', issuer: 'Amazon Web Services', validUntil: '2026-01-10' },
        { name: 'Azure Security Engineer Associate', holder: 'David Kumar', issuer: 'Microsoft', validUntil: '2025-08-25' },
        { name: 'Google Cloud Professional Cloud Security Engineer', holder: 'Maya Rodriguez', issuer: 'Google Cloud', validUntil: '2025-10-30' }
      ]
    },
    {
      category: 'Development Security',
      certifications: [
        { name: 'CSSLP', holder: 'Maya Rodriguez', issuer: '(ISC)²', validUntil: '2026-03-15' },
        { name: 'GWEB', holder: 'Maya Rodriguez', issuer: 'SANS', validUntil: '2025-12-20' }
      ]
    },
    {
      category: 'Incident Response',
      certifications: [
        { name: 'GCIH', holder: 'Sarah Johnson', issuer: 'SANS', validUntil: '2025-11-05' },
        { name: 'GCFA', holder: 'Alex Chen', issuer: 'SANS', validUntil: '2026-01-20' }
      ]
    },
    {
      category: 'Kubernetes Security',
      certifications: [
        { name: 'CKS', holder: 'David Kumar', issuer: 'Cloud Native Computing Foundation', validUntil: '2025-09-15' },
        { name: 'CKA', holder: 'David Kumar', issuer: 'Cloud Native Computing Foundation', validUntil: '2025-06-10' }
      ]
    }
  ];

  const stats = [
    { label: 'Company Certifications', value: '15+', icon: Award },
    { label: 'Team Certifications', value: '45+', icon: CheckCircle },
    { label: 'Compliance Frameworks', value: '8', icon: Shield },
    { label: 'Annual Audits', value: '12', icon: Calendar }
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
                Certifications & Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our commitment to excellence is validated through industry-leading certifications and compliance standards
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

      {/* Company Certifications */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Company Certifications
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyCertifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} bg-opacity-20 rounded-xl flex items-center justify-center`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-cyan-400 font-semibold mb-4">{cert.issuer}</p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {cert.details}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-medium">{cert.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Valid Until:</span>
                    <span className="text-white font-medium">{new Date(cert.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Certificate</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Certifications */}
      <div className="py-16 lg:py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Team Certifications
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamCertifications.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.certifications.map((cert, certIndex) => (
                    <div
                      key={certIndex}
                      className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                      <div>
                        <div className="text-white font-semibold">{cert.name}</div>
                        <div className="text-cyan-400 text-sm">{cert.holder}</div>
                        <div className="text-gray-400 text-xs">{cert.issuer}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-300 text-sm">Valid until</div>
                        <div className="text-white text-sm font-medium">
                          {new Date(cert.validUntil).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Framework */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Compliance Frameworks
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'NIST Cybersecurity Framework',
              'GDPR Compliance',
              'HIPAA Security Rule',
              'CCPA Compliance',
              'SOX Controls',
              'FISMA Compliance',
              'CIS Controls',
              'COBIT Framework'
            ].map((framework, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-sm">{framework}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit Information */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Continuous Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We maintain the highest standards through regular audits and continuous monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12</div>
              <div className="text-gray-300">Annual Audits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Compliance Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Audit Success Rate</div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Request Compliance Documentation</h3>
            <p className="text-gray-300 mb-6">
              Need specific compliance documentation or audit reports? Contact our compliance team for secure access to detailed reports and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Compliance Team
              </button>
              <button className="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Compliance Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;