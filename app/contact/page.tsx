"use client";

import { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@techblog.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "123 Tech Street, Suite 100"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  const faqs = [
    {
      question: "How can I contribute to the blog?",
      answer: "We welcome guest contributors! Send us your article ideas and writing samples."
    },
    {
      question: "Do you offer consulting services?",
      answer: "Yes, we provide web development and design consulting. Contact us for more details."
    },
    {
      question: "Can I advertise on your blog?",
      answer: "We offer various advertising opportunities. Reach out to discuss partnership options."
    },
    {
      question: "How often do you publish new content?",
      answer: "We publish 2-3 high-quality articles per week covering the latest in tech and design."
    }
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
                <Globe className="w-5 h-5 text-white" />
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
              Get In Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Let's Start a
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
              Have a question, suggestion, or want to collaborate? We'd love to hear from you. 
              Reach out and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-slate-700 bg-slate-800/50 shadow-xl">
            <CardHeader className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-serif font-bold text-white">Send us a message</h3>
              </div>
              <p className="text-slate-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-900/50 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Get in touch</h3>
              <p className="text-slate-400 mb-8 font-light">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border border-slate-700 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-emerald-400 font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-slate-400">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h4 className="text-xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border border-slate-700 bg-slate-800/30">
                    <CardContent className="p-6">
                      <h5 className="font-semibold text-white mb-2">{faq.question}</h5>
                      <p className="text-slate-400 text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto font-light">
              Whether you're looking to contribute content, partner with us, or just say hello, 
              we're excited to connect with fellow tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Call
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
                  <Globe className="w-5 h-5 text-white" />
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