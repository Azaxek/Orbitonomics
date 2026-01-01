
import React from 'react';
import MapVisual from '../components/MapVisual';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, ShieldCheck, MapPin, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const chartData = [
    { name: 'USA', routes: 240, color: '#3b82f6' },
    { name: 'India', routes: 210, color: '#60a5fa' },
    { name: 'Japan', routes: 190, color: '#93c5fd' },
  ];

  const recentRegions = [
    { name: 'Odisha Coastal Zone', country: 'India', status: 'Active Monitoring', risk: 'High' },
    { name: 'Shizuoka Prefecture', country: 'Japan', status: 'Route Optimized', risk: 'Critical' },
    { name: 'California Basin', country: 'USA', status: 'Mapping Complete', risk: 'Medium' },
    { name: 'Tohoku Region', country: 'Japan', status: 'Safety Certified', risk: 'Low' },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold font-heading text-white mb-6">Impact & Mapping</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Visualizing our global network of satellite-mapped regions and safety routes.
          </p>
        </div>

        {/* Live Map Visualization */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Activity className="text-blue-500 w-6 h-6" /> Live Satellite Grid
            </h2>
            <div className="flex gap-4">
               <div className="glass px-4 py-2 rounded-lg text-sm text-slate-400">Mapped: <span className="text-white font-bold">3,000+</span></div>
               <div className="glass px-4 py-2 rounded-lg text-sm text-slate-400">Routes: <span className="text-white font-bold">640</span></div>
            </div>
          </div>
          <MapVisual />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Charts */}
          <div className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-8">Safety Routes by Country</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="routes" radius={[6, 6, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Region Table */}
          <div className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-8">Active Monitoring Log</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-sm border-b border-white/5">
                    <th className="pb-4 font-medium">Region</th>
                    <th className="pb-4 font-medium">Country</th>
                    <th className="pb-4 font-medium">Risk Level</th>
                    <th className="pb-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {recentRegions.map((region, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 text-white font-medium">{region.name}</td>
                      <td className="py-4 text-slate-400">{region.country}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                          region.risk === 'Critical' ? 'bg-red-500/20 text-red-400' :
                          region.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                          region.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {region.risk}
                        </span>
                      </td>
                      <td className="py-4 text-slate-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        {region.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex gap-6 p-8 glass rounded-3xl border border-white/5">
              <div className="bg-blue-600/20 p-4 rounded-2xl h-fit">
                 <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                 <h4 className="text-white font-bold text-lg mb-2">Public Infrastructure Safety</h4>
                 <p className="text-slate-400 text-sm">Our safety routes are deployed in schools, hospitals, and government offices, providing life-saving guidance during earthquakes and floods.</p>
              </div>
           </div>
           <div className="flex gap-6 p-8 glass rounded-3xl border border-white/5">
              <div className="bg-blue-600/20 p-4 rounded-2xl h-fit">
                 <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                 <h4 className="text-white font-bold text-lg mb-2">3,000+ Regions Analyzed</h4>
                 <p className="text-slate-400 text-sm">Extensive mapping database covering coastlines, fault lines, and floodplains across Asia, North America, and beyond.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
