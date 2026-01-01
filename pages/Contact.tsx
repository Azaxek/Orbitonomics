
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    console.log('Sending message to Orbitonomics:', formData);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-bold font-heading text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Have questions about our satellite mapping technology? Want to partner with Orbitonomics to improve your region's safety?
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-slate-400">contact@orbitonomics.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-slate-400">+1 (555) ORB-DATA</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Headquarters</h4>
                  <p className="text-slate-400">Tech Hub North, Global Innovation Center</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
               <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-500" /> FAQ
               </h4>
               <p className="text-slate-400 text-sm italic">"How fast is response data updated?"</p>
               <p className="text-slate-300 text-sm mt-2">Our satellite nodes update telemetry every 15-45 minutes depending on orbital position.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-10 lg:p-12 rounded-[2.5rem] border border-white/5 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                type="submit"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSent ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'
                } text-white`}
              >
                {isSent ? (
                  <>Sent Successfully! <Send className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-slate-500">
               <MessageSquare className="w-5 h-5" />
               <p className="text-sm">Typical response time: Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
