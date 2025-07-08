"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
  1: {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    content: `
      <p class="text-lg leading-relaxed text-slate-700 mb-6">
        The web development landscape is evolving at an unprecedented pace, with new technologies and methodologies emerging constantly. As we look toward 2025, several key trends are set to reshape how we build and interact with web applications.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">1. AI-Powered Development Tools</h2>
      <p class="text-slate-700 mb-6">
        Artificial Intelligence is revolutionizing the way developers write code. From intelligent code completion to automated testing and bug detection, AI tools are becoming indispensable in modern development workflows. GitHub Copilot, TabNine, and similar tools are just the beginning of this transformation.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">2. WebAssembly (WASM) Adoption</h2>
      <p class="text-slate-700 mb-6">
        WebAssembly continues to gain traction as a way to run high-performance applications in web browsers. With major browsers supporting WASM and new tools making it easier to compile various languages to WebAssembly, we're seeing more complex applications running directly in the browser.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">3. Edge Computing and Serverless</h2>
      <p class="text-slate-700 mb-6">
        The shift toward edge computing is accelerating, with platforms like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge leading the charge. This trend promises faster response times and better user experiences globally.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">4. Progressive Web Apps (PWAs) 2.0</h2>
      <p class="text-slate-700 mb-6">
        PWAs are evolving beyond simple offline functionality. New APIs are enabling capabilities like file system access, advanced camera controls, and near-native performance, making PWAs a viable alternative to native applications.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">5. Web3 and Decentralized Applications</h2>
      <p class="text-slate-700 mb-6">
        While still in early stages, Web3 technologies are beginning to influence mainstream web development. The integration of blockchain technologies, decentralized storage, and crypto wallets is creating new paradigms for user authentication and data ownership.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Looking Ahead</h2>
      <p class="text-slate-700 mb-6">
        As we move into 2025, the web development ecosystem will continue to evolve rapidly. Staying current with these trends while maintaining focus on fundamental principles like performance, accessibility, and user experience will be crucial for success.
      </p>
      
      <p class="text-slate-700">
        The future of web development is bright, with technologies that promise to make development more efficient, applications more powerful, and user experiences more engaging than ever before.
      </p>
    `,
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Web Development", "AI", "WebAssembly", "Edge Computing", "PWA", "Web3"]
  },
  2: {
    id: 2,
    title: "Mastering Modern CSS: Advanced Techniques and Best Practices",
    content: `
      <p class="text-lg leading-relaxed text-slate-700 mb-6">
        CSS has evolved tremendously over the past few years, introducing powerful new features that enable developers to create more sophisticated and maintainable stylesheets. Let's explore some advanced techniques that can elevate your CSS skills.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Container Queries: The Future of Responsive Design</h2>
      <p class="text-slate-700 mb-6">
        Container queries allow you to apply styles based on the size of a container rather than the viewport. This revolutionary feature enables true component-based responsive design, making your components more modular and reusable.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">CSS Grid: Beyond the Basics</h2>
      <p class="text-slate-700 mb-6">
        While CSS Grid is now widely supported, many developers only scratch the surface of its capabilities. Advanced grid techniques like subgrid, grid areas, and implicit grid lines can solve complex layout challenges elegantly.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Custom Properties (CSS Variables) Strategies</h2>
      <p class="text-slate-700 mb-6">
        CSS custom properties are more than just variables. They enable dynamic theming, component-level customization, and can even be manipulated with JavaScript for interactive designs.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Modern CSS Architecture</h2>
      <p class="text-slate-700 mb-6">
        Organizing CSS for large projects requires thoughtful architecture. Methodologies like CUBE CSS, along with CSS-in-JS solutions, provide scalable approaches to styling modern applications.
      </p>
    `,
    author: "Michael Rodriguez",
    date: "December 12, 2024",
    readTime: "12 min read",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["CSS", "Responsive Design", "Grid", "Architecture", "Best Practices"]
  }
};

export default function BlogPost() {
  const params = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const postId = parseInt(params.id as string);
  const post = blogPosts[postId as keyof typeof blogPosts];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-1 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-emerald-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-yellow-400" : "text-slate-400 hover:text-slate-300"}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-300">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-slate-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium text-slate-300">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} className="bg-slate-800 text-slate-300 border border-slate-600 text-sm hover:bg-slate-700">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600">
          <CardContent className="p-0">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.split(' ').map(name => name[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-serif font-bold text-white mb-2">{post.author}</h4>
                <p className="text-slate-300 mb-4 font-light">
                  Senior Web Developer and Technology Writer with over 8 years of experience in modern web development. 
                  Passionate about sharing knowledge and exploring cutting-edge technologies.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">Follow</Button>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">More Articles</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}