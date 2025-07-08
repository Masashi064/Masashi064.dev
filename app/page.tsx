"use client";

import { useState, useEffect } from 'react';
import { Search, Clock, User, Calendar, ChevronRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Discover the cutting-edge technologies and methodologies that will shape the web development landscape in the coming year.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: 2,
    title: "Mastering Modern CSS: Advanced Techniques and Best Practices",
    excerpt: "Learn advanced CSS techniques that will elevate your web designs and improve your development workflow.",
    author: "Michael Rodriguez",
    date: "December 12, 2024",
    readTime: "12 min read",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable Applications with Next.js 14",
    excerpt: "A comprehensive guide to building performant and scalable web applications using the latest Next.js features.",
    author: "Emma Thompson",
    date: "December 10, 2024",
    readTime: "15 min read",
    category: "Development",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: 4,
    title: "The Art of UI/UX Design: Creating Memorable User Experiences",
    excerpt: "Explore the principles and practices that make digital experiences truly exceptional and user-friendly.",
    author: "David Kim",
    date: "December 8, 2024",
    readTime: "10 min read",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: 5,
    title: "JavaScript Performance Optimization: Tips and Tricks",
    excerpt: "Learn how to optimize your JavaScript code for better performance and user experience.",
    author: "Lisa Wang",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Development",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: 6,
    title: "The Psychology of Color in Web Design",
    excerpt: "Understanding how color choices impact user behavior and emotional responses in digital interfaces.",
    author: "Alex Johnson",
    date: "December 3, 2024",
    readTime: "9 min read",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  }
];

const categories = ["All", "Technology", "Design", "Development", "Business", "Lifestyle"];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(featuredPosts);

  useEffect(() => {
    const filtered = featuredPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const mainFeaturedPost = featuredPosts.find(post => post.featured);
  const secondaryFeaturedPosts = featuredPosts.filter(post => post.featured && post.id !== mainFeaturedPost?.id);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold font-serif bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                TechBlog
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Categories</Link>
              <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</Link>
              <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</Link>
            </nav>
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/20 to-blue-900/30">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Explore the Future of
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
              Discover insights, tutorials, and trends from the world of web development, design, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:bg-slate-800/70 focus:border-emerald-500"
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold">
                Start Reading
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {mainFeaturedPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h3 className="text-3xl font-serif font-bold text-white mb-2">Featured Articles</h3>
            <p className="text-slate-400">Our most popular and impactful content</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Post */}
            <Card className="group overflow-hidden border border-slate-700 bg-slate-800/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={mainFeaturedPost.image}
                  alt={mainFeaturedPost.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">Featured</Badge>
                </div>
              </div>
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{mainFeaturedPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{mainFeaturedPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{mainFeaturedPost.readTime}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {mainFeaturedPost.title}
                </h4>
                <p className="text-slate-300 mb-6">{mainFeaturedPost.excerpt}</p>
                <Link href={`/blog/${mainFeaturedPost.id}`}>
                  <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            {/* Secondary Featured Posts */}
            <div className="space-y-6">
              {secondaryFeaturedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group overflow-hidden border border-slate-700 bg-slate-800/50 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                  <div className="flex">
                    <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex-1">
                      <div className="flex items-center space-x-2 text-sm text-slate-400 mb-2">
                        <Badge className="bg-slate-700 text-slate-300">{post.category}</Badge>
                        <span>{post.readTime}</span>
                      </div>
                      <h5 className="font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h5>
                      <p className="text-sm text-slate-300 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 
                "bg-gradient-to-r from-emerald-500 to-blue-500 text-white" : 
                "text-slate-300 hover:text-white hover:bg-slate-800 border-slate-600"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-white mb-2">Recent Articles</h3>
          <p className="text-slate-400">Stay updated with our latest content</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="group overflow-hidden border border-slate-700 bg-slate-800/50 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-slate-800/90 text-slate-200 border border-slate-600">{post.category}</Badge>
                </div>
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 hover:text-white hover:border-transparent">
                  Read Article
                </Button>
              </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto font-light">
              Subscribe to our newsletter and never miss out on the latest insights, tutorials, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:bg-slate-800/70 focus:border-white/50"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold">TechBlog</h4>
              </div>
              <p className="text-slate-400 mb-4 font-light">
                Your go-to resource for web development, design, and technology insights.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-slate-200">Categories</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Technology</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Design</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Development</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Business</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-slate-200">Company</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-slate-200">Follow Us</h5>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">GitHub</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">YouTube</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}