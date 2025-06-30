import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Byron Ijie',
      role: 'Chief Security Officer & Lead Full-Stack Developer',
      expertise: 'Penetration Testing & Threat Analysis',
      image: 'https://i.imgur.com/fGSfbel.png',
      bio: 'Former NSA cybersecurity specialist with 3+ years in critical infrastructure protection.',
      certifications: ['CISSP', 'CEH', 'OSCP']
    },
    {
      name: 'Doubra Ariaye',
      role: 'DevSecOps Engineer',
      expertise: 'Infrastructure Security & Automation',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in secure CI/CD pipelines and cloud security architecture for enterprise environments.',
      certifications: ['CKS', 'AWS Security', 'Azure Security']
    }
  ];

  const handleViewPositions = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-16 lg:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Expert Team
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the cybersecurity professionals and developers who make digital security their mission
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 lg:p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105"
            >
              <div className="relative mb-4 lg:mb-6">
                <div className="relative overflow-hidden rounded-xl mx-auto w-24 h-24 lg:w-32 lg:h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>

              <h3 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2 group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>
              
              <p className="text-cyan-400 font-semibold mb-1 lg:mb-2 text-sm lg:text-base">
                {member.role}
              </p>
              
              <p className="text-gray-400 text-xs lg:text-sm mb-3 lg:mb-4">
                {member.expertise}
              </p>
              
              <p className="text-gray-300 text-xs lg:text-sm mb-3 lg:mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-1 lg:gap-2 mb-4 lg:mb-6">
                {member.certifications.map((cert, certIndex) => (
                  <span
                    key={certIndex}
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-3 lg:space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Join Our Team</h3>
          <p className="text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm lg:text-base">
            We're always looking for talented cybersecurity professionals and developers who share our passion for digital protection.
          </p>
          <button 
            onClick={handleViewPositions}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 lg:px-8 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
