
import React from 'react';
import { Linkedin, Twitter, Mail, Award, Globe, BookOpen } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold font-heading text-white mb-6">Leadership at Orbitonomics</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Orbitonomics is driven by Aryav Agrawal's vision to transform global disaster response through precision satellite intelligence.
          </p>
        </header>

        {/* Founder Bio */}
        <article className="glass p-1px rounded-3xl border border-white/5 overflow-hidden" aria-labelledby="founder-name">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-2">
               <img 
                 src="https://picsum.photos/seed/aryav-agrawal/800/1000" 
                 alt="Aryav Agrawal, Founder and CEO of Orbitonomics" 
                 className="w-full h-full object-cover min-h-[400px]"
               />
            </div>
            <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block">Founder & CEO</span>
                <h2 id="founder-name" className="text-4xl font-bold text-white font-heading mb-4">Aryav Agrawal</h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                As the sole founder of <span className="text-white font-semibold">Orbitonomics</span>, Aryav Agrawal leads the development of next-generation satellite mapping technologies. Since founding the company in 2023, he has successfully mapped 3,000+ high-risk regions and deployed 640+ safety routes across public buildings in three countries.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3 text-slate-400">
                  <Award className="text-blue-500 w-5 h-5" aria-hidden="true" />
                  <span>Disaster Tech Innovator</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Globe className="text-blue-500 w-5 h-5" aria-hidden="true" />
                  <span>Global Mapping Specialist</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <BookOpen className="text-blue-500 w-5 h-5" aria-hidden="true" />
                  <span>Geospatial AI Expert</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="text-blue-500 w-5 h-5" aria-hidden="true" />
                  <span>aryav@orbitonomics.com</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" aria-label="Follow Aryav Agrawal on LinkedIn" className="p-3 bg-white/5 hover:bg-blue-600/20 text-white rounded-xl transition-all border border-white/10">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Follow Aryav Agrawal on Twitter" className="p-3 bg-white/5 hover:bg-blue-400/20 text-white rounded-xl transition-all border border-white/10">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Vision Quote Section */}
        <section className="mt-32 text-center max-w-3xl mx-auto" aria-label="Mission Statement">
          <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8">
            <Globe className="text-blue-500 w-8 h-8 animate-pulse" aria-hidden="true" />
          </div>
          <blockquote className="text-2xl font-bold font-heading text-white mb-6 italic">
            "Orbitonomics isn't just a company; it's a commitment to using the highest vantage point to protect those on the ground."
          </blockquote>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">— ARYAV AGRAWAL, MISSION LEAD</p>
        </section>
      </div>
    </div>
  );
};

export default Team;
