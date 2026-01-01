
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Map as MapIcon, Navigation, Globe, ArrowRight, Zap, Users } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Satellite Regions Mapped', value: '3,000+', description: 'Disaster-prone zones identified and monitored globally.', icon: <MapIcon className="w-6 h-6" /> },
    { label: 'Public Safety Routes', value: '640', description: 'Optimized evacuation routes across 3 countries.', icon: <Navigation className="w-6 h-6" /> },
    { label: 'Global Implementation', value: '3 Countries', description: 'Deployment across critical public infrastructure.', icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-24 px-4 overflow-hidden" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4" aria-hidden="true" />
            <span>Pioneering Satellite Intelligence & Disaster Mapping Since 2023</span>
          </div>
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 tracking-tight leading-tight">
            Transforming Disaster Response <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              With Satellite Impact Maps
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Orbitonomics provides real-time predictive satellite data and optimized safety routing to protect communities and critical infrastructure during catastrophic events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/25">
              View Global Impact Maps <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
              Learn About Orbitonomics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 px-4" aria-label="Orbitonomics Achievements">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <article key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="bg-blue-600/10 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-heading">{stat.value}</div>
                <h2 className="text-lg font-semibold text-blue-400 mb-2">{stat.label}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-24 bg-slate-900/50 px-4" aria-labelledby="commitment-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="commitment-heading" className="text-4xl font-bold font-heading text-white mb-6">
              Our Commitment to Global Safety <br />
              <span className="text-blue-500">Infrastructure Intelligence.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Founded in 2023 by <span className="text-white font-semibold">Aryav Agrawal</span>, Orbitonomics was established to utilize advanced orbital data for humanitarian safety and disaster mitigation. 
            </p>
            <div className="space-y-6">
              {[
                { title: 'Satellite Predictive Mapping', desc: 'Analyzing geospatial risks before they escalate.', icon: <Shield className="w-5 h-5" /> },
                { title: 'Dynamic Safety Routing', desc: 'Real-time escape path optimization for public buildings.', icon: <Navigation className="w-5 h-5" /> },
                { title: 'Scaleable Humanitarian Tech', desc: 'A universal framework for global disaster resilience.', icon: <Users className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-xl text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-blue-600/20 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
              <img src="https://picsum.photos/seed/satellite-data/800/800" alt="High-resolution satellite impact mapping visualization by Orbitonomics" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10">
                <blockquote className="text-white italic mb-2">"Technology is most powerful when it serves as a shield for the vulnerable."</blockquote>
                <cite className="text-blue-400 font-bold not-italic">— Aryav Agrawal, Founder & CEO</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
