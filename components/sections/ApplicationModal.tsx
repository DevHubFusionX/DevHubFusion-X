import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/ui/Modal';
import { ArrowRight, Check, User, Mail, MessageSquare, MapPin, Sparkles, AlertCircle, Loader2 } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subject?: string;
  initialDescription?: string;
}

export const ApplicationModal = ({
  isOpen,
  onClose,
  title = "Start Your Project",
  subject: customSubject,
  initialDescription = ""
}: ApplicationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: initialDescription
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (initialDescription) {
      setFormData(prev => ({ ...prev, description: initialDescription }));
    }
  }, [initialDescription]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: customSubject || `DevHubFusionX Inquiry - ${formData.name}`,
          from_name: "DevHubFusionX Portal",
          replyto: formData.email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      className="w-full max-w-4xl p-0 overflow-hidden rounded-3xl border-0 shadow-2xl bg-white max-h-[90vh] md:h-[600px] flex flex-col md:flex-row md:grid md:grid-cols-5"
    >
      {/* Left Sidebar - Brand Identity Panel (Hidden on mobile) */}
      <div className="relative hidden md:flex md:col-span-2 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-10 text-white flex-col justify-between overflow-hidden">
        {/* Glowing Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest bg-primary/20 text-accent px-3 py-1.5 rounded-full border border-primary/30">
              DevHubFusionX
            </span>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-3xl font-black tracking-tight leading-tight uppercase">
              Let&apos;s build <br />
              something <br />
              <span className="text-primary">exceptional.</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Collaborate with Anyanwu Franklin to scale your digital presence. Get a production-grade application engineered for speed, conversion, and scalability.
            </p>
          </div>

          <ul className="space-y-3 pt-4 text-xs font-semibold text-slate-200">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center text-primary text-[10px]">✓</span>
              <span>Tailored Next.js & React Frontend</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center text-primary text-[10px]">✓</span>
              <span>Scalable Backend Systems</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center text-primary text-[10px]">✓</span>
              <span>Secure Payment Integration</span>
            </li>
          </ul>
        </div>

        {/* Footer info */}
        <div className="relative z-10 border-t border-white/10 pt-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
            <MapPin size={14} className="text-primary" />
            <span>Lagos, Nigeria • Remote Worldwide</span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            devhubfusionx@gmail.com
          </p>
        </div>
      </div>

      {/* Right Content - Form Area */}
      <div className="col-span-5 md:col-span-3 bg-white p-8 md:p-12 flex flex-col justify-center h-full overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-left py-6"
            >
              {/* Animated Icon Ring */}
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary mb-6 shadow-md shadow-emerald-50">
                <Check size={32} strokeWidth={3} className="animate-bounce" />
              </div>
              
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900 leading-[0.9]">
                Application <br />
                <span className="text-primary">Received.</span>
              </h3>
              
              <p className="text-slate-500 mb-8 text-base leading-relaxed max-w-md font-medium">
                Thank you for reaching out! Your project inquiry has been successfully transmitted. Anyanwu Franklin will review the details and respond via email within 24–48 hours.
              </p>

              <button 
                onClick={onClose} 
                className="h-13 px-8 bg-slate-900 hover:bg-primary text-white font-bold tracking-widest uppercase transition-all duration-300 rounded-xl shadow-lg hover:shadow-primary/20 flex items-center gap-3 cursor-pointer"
              >
                <span>Back to Site</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              {/* Header Title */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">
                    {title}
                  </span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 leading-[1]">
                  Apply <span className="text-primary">Now.</span>
                </h3>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold uppercase tracking-wider flex items-center gap-3"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>Transmission failed. Please check network.</span>
                  </motion.div>
                )}

                {/* Name Input */}
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1 ml-1 block">
                    Your Name
                  </label>
                  <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-xl focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300 pl-4">
                    <User size={18} className="text-slate-400 shrink-0" />
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent px-3 py-3 text-slate-800 placeholder:text-slate-400/60 focus:outline-none text-base font-semibold"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1 ml-1 block">
                    Email Address
                  </label>
                  <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-xl focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300 pl-4">
                    <Mail size={18} className="text-slate-400 shrink-0" />
                    <input
                      required
                      type="email"
                      className="w-full bg-transparent px-3 py-3 text-slate-800 placeholder:text-slate-400/60 focus:outline-none text-base font-semibold"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1 ml-1 block">
                    Project Details
                  </label>
                  <div className="flex bg-slate-50 border border-slate-200/80 rounded-xl focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300 pl-4 pt-3.5">
                    <MessageSquare size={18} className="text-slate-400 shrink-0 mt-0.5" />
                    <textarea
                      required
                      rows={3}
                      className="w-full bg-transparent px-3 pb-3 text-slate-800 placeholder:text-slate-400/60 focus:outline-none text-base font-semibold resize-none"
                      placeholder="Describe what you need..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full mt-2 h-13 bg-slate-900 hover:bg-primary text-white font-bold tracking-widest uppercase transition-all duration-300 rounded-xl shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 cursor-pointer group"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
};
