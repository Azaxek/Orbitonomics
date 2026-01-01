
import React from 'react';
import { Satellite, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Satellite className="text-blue-500 w-8 h-8" />
              <span className="text-xl font-bold font-heading text-white">Orbitonomics</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming disaster response with next-generation satellite impact maps and AI-driven safety routing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="mailto:info@orbitonomics.com" className="text-slate-500 hover:text-blue-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-white transition-colors text-sm">Our Founder</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white transition-colors text-sm">Our Technology</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest impact reports.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Orbitonomics. All rights reserved. Founded by Aryav Agrawal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
