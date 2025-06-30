import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Users, label: 'Clients Protected', value: '200+' },
    { icon: Clock, label: 'Response Time', value: '<1hr' },
    { icon: Target, label: 'Success Rate', value: '99.8%' }
  ];

  const handleLearnMore = () => {
    const teamSection = document.querySelector('#team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Byralax
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
              Founded by cybersecurity experts with decades of combined experience, Byralax emerged from 
              the critical need for comprehensive digital protection in an increasingly connected world.
            </p>
            
            <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
              We specialize in creating robust cybersecurity frameworks while developing cutting-edge web 
              applications. Our unique approach combines deep security expertise with modern development 
              practices, ensuring your digital assets are not just functional, but fundamentally secure.
            </p>

            <div className="space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  <strong className="text-white">Security-First Development:</strong> Every line of code 
                  written with security principles at its core
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  <strong className="text-white">Proactive Protection:</strong> Identifying and mitigating 
                  threats before they become problems
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  <strong className="text-white">Continuous Innovation:</strong> Staying ahead of emerging 
                  threats with cutting-edge solutions
                </p>
              </div>
            </div>

            <button 
              onClick={handleLearnMore}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 lg:px-8 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Learn More About Our Approach
            </button>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 lg:p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs lg:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;