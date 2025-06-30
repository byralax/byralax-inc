import React from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Calendar } from 'lucide-react';
import { PageType } from '../App';

interface TermsOfServiceProps {
  onNavigate: (page: PageType) => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
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
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Legal terms and conditions for using Byralax services
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Scale className="w-4 h-4" />
                <span>Governed by California Law</span>
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
                <FileText className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white m-0">Agreement Overview</h2>
              </div>
              <p className="text-gray-300 leading-relaxed m-0">
                These Terms of Service ("Terms") govern your use of Byralax's cybersecurity services, website, and related 
                offerings. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully 
                before using our services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              
              <p className="text-gray-300 mb-6">
                By accessing, browsing, or using any part of our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may 
                not access or use our services.
              </p>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">Who May Use Our Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• You must be at least 18 years old or the age of majority in your jurisdiction</li>
                  <li>• You must have the legal authority to enter into this agreement</li>
                  <li>• You must not be prohibited from using our services under applicable law</li>
                  <li>• Corporate users must have proper authorization to bind their organization</li>
                </ul>
              </div>
            </section>

            {/* Services Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Services</h2>
              
              <p className="text-gray-300 mb-6">
                Byralax provides cybersecurity services including but not limited to penetration testing, security audits, 
                web application development, security monitoring, and consulting services. Our services are designed to help 
                organizations protect their digital assets and maintain security compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Professional Services</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Penetration testing and vulnerability assessments</li>
                    <li>• Security audits and compliance reviews</li>
                    <li>• Incident response and forensic analysis</li>
                    <li>• Security consulting and strategy development</li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Development Services</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Secure web application development</li>
                    <li>• Security tool and platform creation</li>
                    <li>• API security implementation</li>
                    <li>• Custom security solution development</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Service Availability</h3>
                    <p className="text-gray-300 text-sm">
                      We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                      Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities and Conduct</h2>
              
              <h3 className="text-xl font-bold text-white mb-4">Acceptable Use</h3>
              <p className="text-gray-300 mb-6">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible 
                for ensuring that your use of our services complies with all applicable laws and regulations.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-green-400 mb-2">You May:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Use our services for legitimate business purposes</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the security of your account credentials</li>
                    <li>• Report security vulnerabilities responsibly</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-red-400 mb-2">You May Not:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Use our services for illegal or unauthorized purposes</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Interfere with or disrupt our services or servers</li>
                    <li>• Share your account credentials with unauthorized parties</li>
                    <li>• Reverse engineer or attempt to extract source code</li>
                    <li>• Use our services to harm others or violate their rights</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">4. Payment Terms and Billing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Payment Processing</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Payments are processed securely through encrypted channels</li>
                    <li>• We accept major credit cards and bank transfers</li>
                    <li>• All prices are in USD unless otherwise specified</li>
                    <li>• Invoices are typically due within 30 days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Billing Policies</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Services are billed according to agreed-upon terms</li>
                    <li>• Late payments may incur additional fees</li>
                    <li>• Disputed charges must be reported within 60 days</li>
                    <li>• Refunds are subject to our refund policy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">Refund Policy</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Refunds are evaluated on a case-by-case basis. Generally, refunds may be available for:
                </p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Services not delivered as agreed</li>
                  <li>• Cancellations made within 48 hours of service commencement</li>
                  <li>• Technical issues preventing service delivery</li>
                  <li>• Mutual agreement between parties</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">5. Intellectual Property Rights</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Our Intellectual Property</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    All content, software, tools, methodologies, and materials provided by Byralax are protected by intellectual 
                    property laws. This includes but is not limited to:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Proprietary security testing methodologies</li>
                    <li>• Custom software tools and applications</li>
                    <li>• Reports, documentation, and analysis</li>
                    <li>• Trademarks, logos, and branding materials</li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Client Data and Materials</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    You retain ownership of your data and materials. By using our services, you grant us a limited license to:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Access and analyze your systems as necessary for service delivery</li>
                    <li>• Use anonymized data for improving our services</li>
                    <li>• Create reports and documentation related to our services</li>
                    <li>• Retain necessary information for compliance and legal purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">6. Confidentiality and Data Protection</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                We understand the sensitive nature of cybersecurity work and are committed to maintaining the highest 
                standards of confidentiality and data protection.
              </p>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-8 mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Commitments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Data Security</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• End-to-end encryption for all data</li>
                      <li>• Secure storage and transmission protocols</li>
                      <li>• Regular security audits and assessments</li>
                      <li>• Incident response and breach notification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Confidentiality</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Non-disclosure agreements for all staff</li>
                      <li>• Strict access controls and need-to-know basis</li>
                      <li>• Secure destruction of data when no longer needed</li>
                      <li>• Compliance with privacy regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability and Disclaimers</h2>
              
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Important Legal Notice</h3>
                    <p className="text-gray-300 text-sm">
                      Please read this section carefully as it limits our liability and affects your legal rights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Service Disclaimers</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Our services are provided "as is" and "as available." While we strive for excellence, we cannot guarantee:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• That our services will be uninterrupted or error-free</li>
                    <li>• That all security vulnerabilities will be identified</li>
                    <li>• That our recommendations will prevent all security incidents</li>
                    <li>• Specific outcomes or results from our services</li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Limitation of Damages</h3>
                  <p className="text-gray-300 text-sm">
                    To the maximum extent permitted by law, our total liability for any claims arising from or related to 
                    our services shall not exceed the amount paid by you for the specific service giving rise to the claim 
                    in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">8. Termination</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Termination by You</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    You may terminate your use of our services at any time by:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Providing written notice as specified in your service agreement</li>
                    <li>• Completing any ongoing service engagements</li>
                    <li>• Settling any outstanding payments</li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Termination by Us</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    We may terminate or suspend services if:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• You violate these Terms or applicable laws</li>
                    <li>• Payment obligations are not met</li>
                    <li>• We determine termination is necessary for security reasons</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-bold text-white mb-3">Effect of Termination</h3>
                <p className="text-gray-300 text-sm">
                  Upon termination, your right to use our services ceases immediately. We will securely delete or return 
                  your data as specified in your service agreement, subject to legal retention requirements. Provisions 
                  regarding confidentiality, intellectual property, and limitation of liability survive termination.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">9. Governing Law and Dispute Resolution</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Governing Law</h3>
                  <p className="text-gray-300 text-sm">
                    These Terms are governed by and construed in accordance with the laws of the State of California, 
                    United States, without regard to conflict of law principles. Any legal action or proceeding arising 
                    under these Terms will be brought exclusively in the federal or state courts located in San Francisco, California.
                  </p>
                </div>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Dispute Resolution</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    We encourage resolving disputes through direct communication. If a dispute cannot be resolved informally:
                  </p>
                  <ol className="space-y-1 text-gray-300 text-sm list-decimal list-inside">
                    <li>Disputes will first be addressed through good faith negotiations</li>
                    <li>If unsuccessful, disputes may be submitted to binding arbitration</li>
                    <li>Arbitration will be conducted under the rules of the American Arbitration Association</li>
                    <li>The arbitration will take place in San Francisco, California</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">10. Changes to These Terms</h2>
              
              <p className="text-gray-300 mb-6">
                We may update these Terms from time to time to reflect changes in our services, legal requirements, 
                or business practices. We will notify you of material changes by:
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Posting the updated Terms on our website with a new effective date</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sending email notifications for significant changes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Providing reasonable notice before changes take effect</span>
                </li>
              </ul>

              <p className="text-gray-300">
                Your continued use of our services after the effective date constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">11. Contact Information</h2>
                
                <p className="text-gray-300 mb-6">
                  If you have questions about these Terms or need to contact us regarding legal matters:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Legal Department</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div>Email: legal@byralax.com</div>
                      <div>Phone: +1 (555) 123-SECURE</div>
                      <div>Response time: Within 5 business days</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Mailing Address</h3>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div>Byralax Legal Team</div>
                      <div>123 Security Street</div>
                      <div>San Francisco, CA 94105</div>
                      <div>United States</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Effective Date */}
            <section className="mb-12">
              <div className="text-center bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Effective Date</h3>
                <p className="text-gray-300 text-sm">
                  These Terms of Service are effective as of January 15, 2025, and replace all previous versions.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;