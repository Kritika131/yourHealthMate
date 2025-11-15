"use client"
import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br bottom-0  from-slate-900 via-emerald-950 to-emerald-900 text-white overflow-hidden ">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Main Content */}
        <div className={`relative z-10 max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4 group">
              <div className="relative">
                <Heart className="h-10 w-10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:text-red-300" />
                <div className="absolute inset-0 bg-red-400 rounded-full opacity-30 animate-ping"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">
                Your Health Mate
              </h2>
            </div>
            <p className="text-xl text-blue-200 font-light max-w-2xl mx-auto leading-relaxed">
              Connect with doctors anytime, anywhere
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Phone Card */}
            <div className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
              isVisible ? 'animate-fade-in-up' : ''
            }`} style={{animationDelay: '0.2s'}}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">24/7 Support</h4>
                  <p className="text-blue-200 hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
              isVisible ? 'animate-fade-in-up' : ''
            }`} style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-blue-400 group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-blue-200 hover:text-white transition-colors cursor-pointer">care@healthmate.com</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
              isVisible ? 'animate-fade-in-up' : ''
            }`} style={{animationDelay: '0.6s'}}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-pink-400 group-hover:bounce transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Visit Us</h4>
                  <p className="text-blue-200 hover:text-white transition-colors cursor-pointer">Healthcare Plaza, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className={`flex flex-wrap justify-center gap-8 mb-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`} style={{transitionDelay: '0.8s'}}>
            {['About', 'Services', 'Privacy', 'Terms', 'Support'].map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-blue-200 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                {link}
              </a>
            ))}
          </div> */}

          {/* Bottom Section */}
          <div className={`border-t border-white/20 pt-8 text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`} style={{transitionDelay: '1s'}}>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-blue-300 text-sm">
                © {currentYear} Your Health Mate. Crafted with care.
              </p>
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <span>Secure</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>HIPAA Compliant</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>Trusted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
          >
            <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        )}
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Footer;