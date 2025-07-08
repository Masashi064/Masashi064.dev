"use client";

import { useState } from 'react';
import { ArrowLeft, Star, Users, Target, Award, Code, Palette, Rocket, Heart, Globe, Github, Twitter, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { number: '50K+', label: 'Monthly Readers', icon: Users },
    { number: '200+', label: 'Articles Published', icon: Code },
    { number: '15+', label: 'Countries Reached', icon: Globe },
    { number: '98%', label: 'Reader Satisfaction', icon: Heart }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We prioritize depth and accuracy over quantity, ensuring every article provides real value to our readers.'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'We stay ahead of the curve, exploring emerging technologies and sharing cutting-edge insights.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our content is shaped by our community\'s needs, feedback, and the challenges they face daily.'
    },
    {
      icon: Heart,
      title: 'Passion Powered',
      description: 'Every piece of content is crafted with genuine enthusiasm for technology and its potential.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Editor-in-Chief',
      bio: 'Former senior developer at Google with 10+ years in web development. Passionate about making complex tech accessible.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Technical Writer',
      bio: 'Full-stack developer and design enthusiast. Specializes in CSS, React, and modern web architecture.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Emma Thompson',
      role: 'Lead Developer Advocate',
      bio: 'DevOps engineer turned content creator. Loves breaking down complex deployment and scaling strategies.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'David Kim',
      role: 'UX/UI Design Writer',
      bio: 'Product designer with a background in psychology. Focuses on user experience and interface design trends.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      social: { twitter: '#', linkedin: '#', github: '#' }
    }
  ];

  const milestones = [
    { year: '2020', title: 'TechBlog Founded', description: 'Started as a personal blog sharing web development insights' },
    { year: '2021', title: 'Community Growth', description: 'Reached 10,000 monthly readers and launched newsletter' },
    { year: '2022', title: 'Team Expansion', description: 'Brought on expert writers and launched multiple content series' },
    { year: '2023', title: 'Industry Recognition', description: 'Featured in top developer publications and conferences' },
    { year: '2024', title: 'Global Reach', description: 'Serving 50,000+ developers across 15+ countries' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-emerald-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold font-serif bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                TechBlog
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/20 to-blue-900/30">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6">
              About Us
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Empowering Developers
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-light">
              We're a passionate team of developers, designers, and tech enthusiasts dedicated to sharing 
              knowledge, insights, and the latest trends in web development and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border border-slate-700 bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'values', label: 'Our Values' },
              { id: 'team', label: 'Our Team' },
              { id: 'journey', label: 'Our Journey' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? 
                  "bg-gradient-to-r from-emerald-500 to-blue-500 text-white" : 
                  "text-slate-300 hover:text-white hover:bg-slate-700"
                }
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Our Story */}
        {activeTab === 'story' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">How TechBlog Began</h3>
                <div className="space-y-4 text-slate-300 font-light">
                  <p>
                    TechBlog started in 2020 as a simple personal blog by Sarah Chen, a senior developer 
                    who wanted to share her experiences and insights from working at major tech companies. 
                    What began as weekend writing sessions quickly grew into something much bigger.
                  </p>
                  <p>
                    As the developer community embraced our content, we realized there was a real need 
                    for high-quality, practical content that bridges the gap between complex technical 
                    concepts and real-world application.
                  </p>
                  <p>
                    Today, TechBlog has evolved into a comprehensive resource trusted by developers 
                    worldwide, featuring expert insights, tutorials, and industry analysis that helps 
                    professionals stay ahead in the rapidly evolving tech landscape.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white">
                      Join Our Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Values */}
        {activeTab === 'values' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">What Drives Us</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our values shape everything we do, from the content we create to the community we build.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border border-slate-700 bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-bold text-white mb-3">{value.title}</h4>
                        <p className="text-slate-300 font-light">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Our Team */}
        {activeTab === 'team' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Meet Our Team</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The passionate individuals behind TechBlog, each bringing unique expertise and perspective.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border border-slate-700 bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-700"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-emerald-400 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-slate-400 text-sm mb-4 font-light">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-slate-400 hover:text-emerald-400">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-slate-400 hover:text-emerald-400">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-slate-400 hover:text-emerald-400">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Our Journey */}
        {activeTab === 'journey' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Our Journey</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From a simple blog to a global community - here are the key milestones in our story.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10">
                      {milestone.year}
                    </div>
                    <Card className="flex-1 border border-slate-700 bg-slate-800/50">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-serif font-bold text-white mb-2">{milestone.title}</h4>
                        <p className="text-slate-300 font-light">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto font-light">
              Whether you're a seasoned developer or just starting your journey, we invite you to be part 
              of our growing community of tech enthusiasts and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                Subscribe to Newsletter
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Get In Touch
                </Button>
              </Link>
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
                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
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
          <Separator className="my-8 bg-slate-800" />
          <div className="text-center text-slate-500">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}