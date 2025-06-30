import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Calendar, Mail } from 'lucide-react';
import { PageType } from '../App';

interface PrivacyPolicyProps {
  onNavigate: (page: PageType) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy and data security are our top priorities
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white m-0">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-300 leading-relaxed m-0">
                At Byralax, we understand that privacy is fundamental to trust. This Privacy Policy explains how we collect, 
                use, protect, and share your personal information when you use our services, visit our website, or interact 
                with us in any way. We are committed to transparency and giving you control over your data.
              </p>
            </div>

            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Information You Provide to Us</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Contact Information:</strong> Name, email address, phone number, company name, and job title when you contact us or request our services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Account Information:</strong> Username, password, and profile information when you create an account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Service Data:</strong> Information you provide when using our cybersecurity services, including system configurations and security requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Communication Data:</strong> Messages, feedback, and other communications you send to us</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Information We Collect Automatically</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Usage Information:</strong> How you interact with our website and services, including pages visited, features used, and time spent</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and mobile network information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Location Information:</strong> General geographic location based on IP address</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies</span>
                </li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Provide cybersecurity services and support</li>
                    <li>• Process transactions and manage accounts</li>
                    <li>• Communicate about services and updates</li>
                    <li>• Respond to inquiries and requests</li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Improvement & Analytics</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Analyze usage patterns and preferences</li>
                    <li>• Improve our services and user experience</li>
                    <li>• Develop new features and capabilities</li>
                    <li>• Conduct research and analytics</li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">Security & Compliance</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Protect against fraud and security threats</li>
                    <li>• Comply with legal and regulatory requirements</li>
                    <li>• Enforce our terms of service</li>
                    <li>• Investigate and prevent misuse</li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">Marketing & Communication</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Send relevant marketing communications</li>
                    <li>• Provide security updates and alerts</li>
                    <li>• Share industry insights and best practices</li>
                    <li>• Invite to events and webinars</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">How We Protect Your Data</h2>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-8 mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Security Measures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technical Safeguards</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• End-to-end encryption for data in transit</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Secure cloud infrastructure (SOC 2 Type II)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Operational Safeguards</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Access controls and least privilege principles</li>
                      <li>• Employee background checks and training</li>
                      <li>• Incident response and breach notification procedures</li>
                      <li>• Regular backup and disaster recovery testing</li>
                      <li>• Vendor security assessments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">When We Share Your Information</h2>
              
              <p className="text-gray-300 mb-6">
                We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white mb-2">Service Providers</h3>
                  <p className="text-gray-300 text-sm">
                    With trusted third-party service providers who help us deliver our services, such as cloud hosting providers, 
                    payment processors, and analytics services. These providers are contractually bound to protect your data.
                  </p>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white mb-2">Legal Requirements</h3>
                  <p className="text-gray-300 text-sm">
                    When required by law, regulation, legal process, or government request, or to protect our rights, 
                    property, or safety, or that of our users or the public.
                  </p>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white mb-2">Business Transfers</h3>
                  <p className="text-gray-300 text-sm">
                    In connection with a merger, acquisition, or sale of assets, where your information may be transferred 
                    as part of the business transaction, subject to equivalent privacy protections.
                  </p>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white mb-2">With Your Consent</h3>
                  <p className="text-gray-300 text-sm">
                    When you explicitly consent to sharing your information for specific purposes not covered by this policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">Access & Portability</h3>
                    <p className="text-gray-300 text-sm">
                      Request access to your personal information and receive a copy in a portable format.
                    </p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-blue-400 mb-2">Correction</h3>
                    <p className="text-gray-300 text-sm">
                      Request correction of inaccurate or incomplete personal information.
                    </p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-purple-400 mb-2">Deletion</h3>
                    <p className="text-gray-300 text-sm">
                      Request deletion of your personal information, subject to legal and contractual obligations.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Opt-Out</h3>
                    <p className="text-gray-300 text-sm">
                      Opt out of marketing communications and certain data processing activities.
                    </p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Restriction</h3>
                    <p className="text-gray-300 text-sm">
                      Request restriction of processing in certain circumstances.
                    </p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Objection</h3>
                    <p className="text-gray-300 text-sm">
                      Object to processing based on legitimate interests or for direct marketing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
              
              <p className="text-gray-300 mb-6">
                We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
              </p>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Account Information</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Active accounts: Duration of relationship</li>
                      <li>• Closed accounts: 3 years after closure</li>
                      <li>• Marketing data: Until opt-out + 30 days</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Service Data</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Security logs: 7 years</li>
                      <li>• Transaction records: 7 years</li>
                      <li>• Support communications: 3 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
              
              <p className="text-gray-300 mb-6">
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place for international transfers, including:
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Standard Contractual Clauses approved by the European Commission</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Adequacy decisions for transfers to countries with adequate protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Binding Corporate Rules for intra-group transfers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Your explicit consent for specific transfers</span>
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                </div>
                
                <p className="text-gray-300 mb-6">
                  If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Privacy Officer</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div>Email: privacy@byralax.com</div>
                      <div>Phone: +1 (555) 123-SECURE</div>
                      <div>Response time: Within 30 days</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Mailing Address</h3>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div>Byralax Privacy Team</div>
                      <div>123 Security Street</div>
                      <div>San Francisco, CA 94105</div>
                      <div>United States</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Policy Updates</h2>
              
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. We will notify you of material changes by:
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Posting the updated policy on our website with a new "Last Updated" date</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sending email notifications to registered users for significant changes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Providing prominent notice on our website for 30 days</span>
                </li>
              </ul>

              <p className="text-gray-300">
                Your continued use of our services after the effective date of the updated policy constitutes acceptance of the changes.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;