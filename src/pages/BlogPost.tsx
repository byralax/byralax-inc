import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ThumbsUp, MessageCircle } from 'lucide-react';
import { PageType } from '../App';

interface BlogPostProps {
  postId: string | null;
  onNavigate: (page: PageType) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onNavigate }) => {
  // This would typically fetch the post data based on postId
  const post = {
    id: 'zero-trust-architecture-2025',
    title: 'Zero Trust Architecture: The Future of Enterprise Security in 2025',
    excerpt: 'Explore how Zero Trust principles are reshaping cybersecurity strategies and why traditional perimeter-based security is no longer sufficient.',
    author: 'Alex Chen',
    authorRole: 'Chief Security Officer',
    authorBio: 'Former NSA cybersecurity specialist with 12+ years in critical infrastructure protection. Alex leads our security research and implementation strategies.',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'threat-intelligence',
    tags: ['Zero Trust', 'Enterprise Security', 'Architecture'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    likes: 127,
    comments: 23,
    shares: 45
  };

  const relatedPosts = [
    {
      id: 'ai-powered-threat-detection',
      title: 'AI-Powered Threat Detection: Machine Learning in Cybersecurity',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      readTime: '12 min read'
    },
    {
      id: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices: AWS, Azure, and GCP',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      readTime: '14 min read'
    },
    {
      id: 'incident-response-playbook',
      title: 'Building an Effective Incident Response Playbook',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{post.author}</div>
                  <div className="text-gray-400 text-sm">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-between py-4 border-t border-b border-gray-700">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>{post.shares}</span>
              </button>
            </div>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">The Evolution of Security Perimeters</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Traditional network security models operated on the assumption that everything inside the corporate network could be trusted, while everything outside was potentially dangerous. This "castle and moat" approach worked reasonably well when employees primarily worked from corporate offices and accessed applications hosted on-premises.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              However, the digital transformation of the past decade has fundamentally changed how organizations operate. Cloud adoption, remote work, mobile devices, and IoT have dissolved the traditional network perimeter. Today's workforce accesses applications and data from anywhere, using various devices, often connecting through untrusted networks.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Core Principles of Zero Trust</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Zero Trust is built on the principle of "never trust, always verify." Instead of assuming that everything inside the network is safe, Zero Trust treats every user, device, and application as potentially compromised. This approach requires continuous verification of identity and authorization for every access request.
            </p>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Zero Trust Principles</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Verify explicitly:</strong> Always authenticate and authorize based on all available data points</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Use least privilege access:</strong> Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Assume breach:</strong> Minimize blast radius and segment access</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Implementation Strategies</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Implementing Zero Trust is not a one-size-fits-all approach. Organizations must assess their current security posture, identify critical assets, and develop a phased implementation plan. The journey typically begins with identity and access management (IAM) improvements and gradually extends to network segmentation, device security, and application protection.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Phase 1: Identity Foundation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Start by strengthening identity management with multi-factor authentication (MFA), single sign-on (SSO), and privileged access management (PAM). Implement conditional access policies that consider user behavior, device health, and location when making access decisions.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Phase 2: Network Segmentation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Implement micro-segmentation to create secure zones within your network. Use software-defined perimeters (SDP) and secure access service edge (SASE) solutions to provide secure, direct connectivity between users and applications.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Phase 3: Application Security</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protect applications with web application firewalls (WAF), API gateways, and runtime application self-protection (RASP). Implement zero trust network access (ZTNA) solutions to provide secure remote access to applications.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Challenges and Considerations</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              While Zero Trust offers significant security benefits, implementation comes with challenges. Organizations must balance security with user experience, manage the complexity of multiple security tools, and ensure that security policies don't impede business operations.
            </p>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Best Practices for Success</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Start with a pilot program focusing on critical assets</li>
                <li>Invest in user education and change management</li>
                <li>Choose interoperable solutions that work together</li>
                <li>Continuously monitor and adjust policies based on user behavior</li>
                <li>Plan for scalability from the beginning</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">The Future of Zero Trust</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              As we move into 2025, Zero Trust will continue to evolve with advances in artificial intelligence, machine learning, and automation. We can expect to see more intelligent access decisions based on behavioral analytics, automated threat response, and seamless integration between security tools.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Organizations that embrace Zero Trust principles today will be better positioned to handle the security challenges of tomorrow. The investment in Zero Trust architecture pays dividends not just in improved security, but also in operational efficiency and business agility.
            </p>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-700 pt-8 mt-12">
            <div className="flex items-start space-x-4">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{post.authorRole}</p>
                <p className="text-gray-300 leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-700 mt-8">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span>Like ({post.likes})</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              Follow Author
            </button>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="py-16 lg:py-24 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Related Articles
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;