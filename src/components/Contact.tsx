import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'security@byralax.com',
      description: 'Get a response within 1 hour',
      href: 'mailto:security@byralax.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-SECURE',
      description: '24/7 emergency hotline',
      href: 'tel:+15551235732'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'Secure meeting facilities available',
      href: '#'
    }
  ];

  const handleEmergencyHotline = () => {
    window.open('tel:+15551235732', '_self');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your digital future? Contact our cybersecurity experts for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 lg:p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 card-hover"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <info.icon className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2">{info.title}</h3>
              {info.href !== '#' ? (
                <a 
                  href={info.href}
                  className="text-cyan-400 font-semibold mb-1 lg:mb-2 text-sm lg:text-base hover:text-cyan-300 transition-colors focus-ring"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-cyan-400 font-semibold mb-1 lg:mb-2 text-sm lg:text-base">{info.content}</p>
              )}
              <p className="text-gray-400 text-xs lg:text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm">Thank you for your message! We'll get back to you within 1 hour.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">There was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`form-input ${errors.name ? 'error-state' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`form-input ${errors.email ? 'error-state' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="web-development">Secure Web Development</option>
                    <option value="security-monitoring">Security Monitoring</option>
                    <option value="infrastructure-security">Infrastructure Security</option>
                    <option value="consulting">Security Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`form-textarea ${errors.message ? 'error-state' : ''}`}
                  placeholder="Tell us about your security needs and requirements..."
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-base lg:text-lg flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'loading' : ''
                }`}
                aria-describedby="submit-description"
              >
                <Send className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
                <span>{isSubmitting ? 'Sending...' : 'Send Secure Message'}</span>
              </button>
              <p id="submit-description" className="sr-only">
                Submit your secure message to our cybersecurity team
              </p>
            </form>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Why Choose Byralax?</h3>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-1 lg:mb-2">Enterprise-Grade Security</h4>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Military-grade encryption and security protocols protecting Fortune 500 companies worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-1 lg:mb-2">24/7 Rapid Response</h4>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Our security experts are available around the clock for immediate threat response and support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-1 lg:mb-2">Confidential Consultation</h4>
                    <p className="text-gray-300 text-sm lg:text-base">
                      All communications are encrypted and confidential. We sign NDAs for sensitive projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-4 lg:p-6">
              <h4 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Emergency Security Response</h4>
              <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base">
                Experiencing a security incident? Our emergency response team is available 24/7.
              </p>
              <button 
                onClick={handleEmergencyHotline}
                className="bg-red-600 hover:bg-red-500 px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base hover:scale-105 transition-transform duration-200 focus-ring"
                aria-label="Call emergency security hotline"
              >
                Emergency Hotline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;