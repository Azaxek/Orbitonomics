
import React from 'react';
import { Target, Eye, Rocket, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-heading text-white mb-6">Our Story</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Orbitonomics was established in 2023 with a vision to redefine how the world approaches disaster management and humanitarian response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-3xl"></div>
               <h2 className="text-3xl font-bold font-heading text-white mb-6">Innovation through Orbit</h2>
               <p className="text-slate-400 mb-6 leading-relaxed">
                 Founded by tech visionary <span className="text-white">Aryav Agrawal</span>, Orbitonomics began as a research project focused on the intersection of high-resolution satellite imagery and neural networks. We realized that while satellite data was abundant, it wasn't being translated into actionable safety intelligence at the ground level.
               </p>
               <p className="text-slate-400 mb-6 leading-relaxed">
                 Today, we are proud to have mapped over 3,000 disaster-prone regions, providing critical data to governments and NGOs that helps them prepare for the unpredictable. Our technology goes beyond just pictures; we build living, breathing models of the world's most vulnerable infrastructure.
               </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Orbitonomics Global Headquarters Representation" 
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Our Mission", 
              desc: "To minimize human loss and economic impact during disasters by providing real-time, precision-guided intelligence.", 
              icon: <Target className="w-8 h-8 text-blue-500" /> 
            },
            { 
              title: "Our Vision", 
              desc: "A world where no disaster catches a community unprepared, thanks to the omnipresent watch of satellite technology.", 
              icon: <Eye className="w-8 h-8 text-blue-500" /> 
            },
            { 
              title: "Our Strategy", 
              desc: "Partnering with global urban planners to embed safety routes into the very fabric of public infrastructure.", 
              icon: <Rocket className="w-8 h-8 text-blue-500" /> 
            },
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-3xl border border-white/5 text-center">
              <div className="bg-blue-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-heading">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Overview */}
        <div className="glass p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-heading text-white mb-8">Technology Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Synthetic Aperture Radar (SAR)</h4>
                <p className="text-slate-400">Our systems utilize SAR to peer through clouds, smoke, and darkness, ensuring 24/7 visibility regardless of atmospheric conditions. This is critical during natural disasters like hurricanes or wildfires where visual clarity is often compromised.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Path-Finding Algorithms</h4>
                <p className="text-slate-400">Our proprietary routing engine calculates safety routes in real-time, accounting for dynamic hazards. We utilize graph theory and AI to ensure every individual in a public building has the fastest, safest path to extraction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
