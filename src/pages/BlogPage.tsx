import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Search, Filter, TrendingUp, Shield, Zap, Lock, Eye, Globe, AlertTriangle } from 'lucide-react';
import { PageType } from '../App';

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onSelectPost: (postId: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onSelectPost }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', label: 'All Posts', count: 24 },
    { id: 'threat-intelligence', label: 'Threat Intelligence', count: 8 },
    { id: 'web-security', label: 'Web Security', count: 6 },
    { id: 'compliance', label: 'Compliance', count: 4 },
    { id: 'incident-response', label: 'Incident Response', count: 3 },
    { id: 'best-practices', label: 'Best Practices', count: 3 }
  ];

  const blogPosts = [
    {
      id: 'zero-trust-architecture-2025',
      title: 'Zero Trust Architecture: The Future of Enterprise Security in 2025',
      excerpt: 'Explore how Zero Trust principles are reshaping cybersecurity strategies and why traditional perimeter-based security is no longer sufficient.',
      content: 'Full article content would go here...',
      author: 'Alex Chen',
      authorRole: 'Chief Security Officer',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'threat-intelligence',
      tags: ['Zero Trust', 'Enterprise Security', 'Architecture'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      icon: Shield
    },
    {
      id: 'ai-powered-threat-detection',
      title: 'AI-Powered Threat Detection: Machine Learning in Cybersecurity',
      excerpt: 'How artificial intelligence and machine learning are revolutionizing threat detection and response capabilities.',
      content: 'Full article content would go here...',
      author: 'Sarah Johnson',
      authorRole: 'Security Researcher',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      category: 'threat-intelligence',
      tags: ['AI', 'Machine Learning', 'Threat Detection'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      icon: Eye
    },
    {
      id: 'web-application-security-checklist',
      title: 'The Ultimate Web Application Security Checklist for 2025',
      excerpt: 'A comprehensive guide to securing web applications against the latest threats and vulnerabilities.',
      content: 'Full article content would go here...',
      author: 'Maya Rodriguez',
      authorRole: 'Lead Full-Stack Developer',
      authorImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      publishDate: '2025-01-10',
      readTime: '15 min read',
      category: 'web-security',
      tags: ['Web Security', 'OWASP', 'Best Practices'],
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      icon: Lock
    },
    {
      id: 'incident-response-playbook',
      title: 'Building an Effective Incident Response Playbook',
      excerpt: 'Step-by-step guide to creating and implementing an incident response plan that minimizes damage and recovery time.',
      content: 'Full article content would go here...',
      author: 'David Kumar',
      authorRole: 'DevSecOps Engineer',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      publishDate: '2025-01-08',
      readTime: '10 min read',
      category: 'incident-response',
      tags: ['Incident Response', 'Playbook', 'Crisis Management'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      icon: AlertTriangle
    },
    {
      id: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices: AWS, Azure, and GCP',
      excerpt: 'Essential security configurations and best practices for major cloud platforms to protect your infrastructure.',
      content: 'Full article content would go here...',
      author: 'Alex Chen',
      authorRole: 'Chief Security Officer',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      publishDate: '2025-01-05',
      readTime: '14 min read',
      category: 'best-practices',
      tags: ['Cloud Security', 'AWS', 'Azure', 'GCP'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      icon: Globe
    },
    {
      id: 'penetration-testing-methodology',
      title: 'Modern Penetration Testing Methodology and Tools',
      excerpt: 'Comprehensive overview of current penetration testing approaches, methodologies, and the latest tools.',
      content: 'Full article content would go here...',
      author: 'Sarah Johnson',
      authorRole: 'Security Researcher',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      publishDate: '2025-01-03',
      readTime: '11 min read',
      category: 'best-practices',
      tags: ['Penetration Testing', 'Security Testing', 'Tools'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      icon: Zap
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handlePostClick = (postId: string) => {
    onSelectPost(postId);
    onNavigate('blog-post');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 focus-ring"
            aria-label="Go back to homepage"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Security Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Expert insights, threat intelligence, and best practices from our cybersecurity team
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors focus:outline-none"
                  aria-label="Search blog articles"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-ring ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                    }`}
                    aria-pressed={selectedCategory === category.id}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="py-16 lg:py-24 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer card-hover"
                  onClick={() => handlePostClick(post.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePostClick(post.id);
                    }
                  }}
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <post.icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-cyan-500/20 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={post.authorImage}
                        alt={`${post.author} profile`}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 ml-auto">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" aria-hidden="true" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Latest Articles
            </span>
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden">
                  <div className="skeleton h-48 w-full"></div>
                  <div className="p-6 space-y-4">
                    <div className="skeleton h-4 w-3/4"></div>
                    <div className="skeleton h-4 w-1/2"></div>
                    <div className="skeleton h-20 w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 cursor-pointer card-hover"
                  onClick={() => handlePostClick(post.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePostClick(post.id);
                    }
                  }}
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <post.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                      </div>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-cyan-500/20 backdrop-blur-sm text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={post.authorImage}
                        alt={`${post.author} profile`}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm">{post.author}</div>
                        <div className="flex items-center space-x-3 text-xs text-gray-400">
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</div>
              <button
                onClick={clearFilters}
                className="text-cyan-400 hover:text-cyan-300 transition-colors focus-ring"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stay Updated
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest cybersecurity insights and threat intelligence delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors focus:outline-none"
              aria-label="Email address for newsletter"
            />
            <button 
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;