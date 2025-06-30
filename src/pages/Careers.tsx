import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Coffee, Zap, Shield, Code, Eye } from 'lucide-react';
import { PageType } from '../App';

interface CareersProps {
  onNavigate: (page: PageType) => void;
}

const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Positions', count: 12 },
    { id: 'security', label: 'Security', count: 5 },
    { id: 'development', label: 'Development', count: 4 },
    { id: 'operations', label: 'Operations', count: 2 },
    { id: 'sales', label: 'Sales & Marketing', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 'senior-security-engineer',
      title: 'Senior Security Engineer',
      department: 'security',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      experience: '5+ years',
      description: 'Lead security assessments, penetration testing, and vulnerability management for enterprise clients.',
      requirements: [
        'CISSP, CEH, or OSCP certification required',
        '5+ years in cybersecurity or related field',
        'Experience with penetration testing tools',
        'Strong knowledge of network security protocols',
        'Excellent communication and client-facing skills'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Professional Development', 'Stock Options'],
      icon: Shield,
      featured: true
    },
    {
      id: 'full-stack-developer',
      title: 'Senior Full-Stack Developer (Security Focus)',
      department: 'development',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      experience: '4+ years',
      description: 'Build secure web applications and security tools using modern frameworks with security-first principles.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Knowledge of secure coding practices',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Understanding of OWASP Top 10',
        'Experience with DevSecOps practices'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Learning Budget', 'Flexible Hours'],
      icon: Code,
      featured: true
    },
    {
      id: 'security-analyst',
      title: 'Security Analyst',
      department: 'security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      experience: '2+ years',
      description: 'Monitor security events, investigate incidents, and support threat detection and response activities.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '2+ years in security operations or analysis',
        'Experience with SIEM tools and log analysis',
        'Knowledge of incident response procedures',
        'Security+ or similar certification preferred'
      ],
      benefits: ['Health Insurance', 'Training Programs', 'Career Growth', 'Team Events'],
      icon: Eye,
      featured: false
    },
    {
      id: 'devops-engineer',
      title: 'DevSecOps Engineer',
      department: 'operations',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      experience: '3+ years',
      description: 'Implement and maintain secure CI/CD pipelines, infrastructure as code, and cloud security controls.',
      requirements: [
        'Experience with Docker, Kubernetes, and cloud platforms',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Understanding of security scanning tools and practices',
        'Experience with CI/CD pipeline security',
        'Scripting skills in Python, Bash, or similar'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Equipment Budget', 'Conference Attendance'],
      icon: Zap,
      featured: false
    },
    {
      id: 'penetration-tester',
      title: 'Penetration Tester',
      department: 'security',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      experience: '3+ years',
      description: 'Conduct comprehensive penetration tests and security assessments for web applications and networks.',
      requirements: [
        'OSCP, CEH, or similar penetration testing certification',
        '3+ years of hands-on penetration testing experience',
        'Proficiency with testing tools (Burp Suite, Metasploit, Nmap)',
        'Strong report writing and communication skills',
        'Experience with web application and network testing'
      ],
      benefits: ['Health Insurance', 'Certification Support', 'Flexible Schedule', 'Tool Budget'],
      icon: Shield,
      featured: false
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer (Security Dashboard)',
      department: 'development',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      experience: '3+ years',
      description: 'Develop intuitive security dashboards and user interfaces for our cybersecurity platform.',
      requirements: [
        'Expert-level React and TypeScript skills',
        'Experience with data visualization libraries',
        'Understanding of security UX/UI principles',
        'Knowledge of responsive design and accessibility',
        'Experience with modern build tools and workflows'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Design Tools Budget', 'Flexible Hours'],
      icon: Code,
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and certification support'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and activities'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  const featuredJobs = jobOpenings.filter(job => job.featured);

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
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Help us protect the digital future. Join a team of passionate cybersecurity professionals making a real impact.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                  }`}
                >
                  {dept.label} ({dept.count})
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Team Members</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">12</div>
                <div className="text-gray-300 text-sm">Open Positions</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Employee Satisfaction</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2">Remote</div>
                <div className="text-gray-300 text-sm">Work Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Positions */}
      {featuredJobs.length > 0 && (
        <div className="py-16 lg:py-24 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Positions
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                      <job.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Positions */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Open Positions
            </span>
          </h2>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <job.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {job.title}
                          </h3>
                          {job.featured && (
                            <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {job.benefits.slice(0, 4).map((benefit, index) => (
                            <span
                              key={index}
                              className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-6 flex-shrink-0">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 px-6 py-2 rounded-lg font-medium transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No positions found in this department.</div>
              <button
                onClick={() => setSelectedDepartment('all')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View all positions
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 lg:py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Work With Us
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
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
              Ready to Make an Impact?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see the perfect role? We're always looking for talented individuals who share our passion for cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              Contact Our Team
            </button>
            <button className="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;