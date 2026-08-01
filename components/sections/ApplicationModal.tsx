"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/ui/Modal';
import { ArrowRight, Check, Mail, Phone, Loader2, AlertCircle } from 'lucide-react';

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
  title = "Get a Solution",
  subject: customSubject,
  initialDescription = ""
}: ApplicationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
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
          subject: customSubject || `Frank Inquiry - ${formData.name}`,
          from_name: "Frank's Portal",
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
      className="w-full max-w-4xl p-6 md:p-10 overflow-hidden rounded-[2rem] border-0 shadow-2xl bg-[#f8fafc] max-h-[90vh] flex flex-col overflow-y-auto scrollbar-hide"
    >
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center py-12 px-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary mb-6 shadow-md shadow-emerald-50">
              <Check size={32} strokeWidth={3} className="animate-bounce" />
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">
              Inquiry <span className="text-primary">Sent.</span>
            </h3>

            <p className="text-slate-500 mb-8 text-base leading-relaxed max-w-md font-medium">
              Thank you! Your application has been received. I will review your requirements and follow up with a custom solution draft within 24 hours.
            </p>

            <button
              onClick={onClose}
              className="pl-2 pr-6 py-2.5 rounded-full bg-primary hover:bg-emerald-600 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-3 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                <ArrowRight size={16} />
              </span>
              <span>Back to Site</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
          >
            {/* Left Column - Info Branding */}
            <div className="md:col-span-5 flex flex-col justify-between h-full pr-0 md:pr-4 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
                  START A PROJECT
                </span>
                <h3 className="text-4xl font-black tracking-tight text-slate-900 leading-[1.15] mb-4">
                  Discuss Your <br />
                  <span className="text-primary">Software Needs</span>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  Let's engineer a production-grade system built for speed, automation, and scale.
                </p>
              </div>

              {/* Minimal Contact Information */}
              <div className="pt-6 md:pt-12 border-t border-slate-200/60 space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:devhubfusionx@gmail.com"
                    className="text-slate-800 hover:text-primary transition-colors text-base font-bold font-mono"
                  >
                    devhubfusionx@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                    Call / WhatsApp
                  </span>
                  <a
                    href="tel:+2348030531624"
                    className="text-slate-800 hover:text-primary transition-colors text-base font-bold font-mono"
                  >
                    +234 803 053 1624
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Elevated Form Card */}
            <div className="md:col-span-7">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>Transmission failed. Please check network.</span>
                    </motion.div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 mb-1.5 block ml-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#f8fafc] border border-slate-200/60 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400/60 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 mb-1.5 block ml-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-[#f8fafc] border border-slate-200/60 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400/60 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                      placeholder="jane@framer.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 mb-1.5 block ml-1">
                      Project Type
                    </label>
                    <select
                      required
                      className="w-full bg-[#f8fafc] border border-slate-200/60 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold cursor-pointer"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      disabled={status === 'submitting'}
                    >
                      <option value="" disabled>Select...</option>
                      <option value="SaaS / Web Dashboard">SaaS / Web Dashboard</option>
                      <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                      <option value="Real-Time Logistics App">Real-Time Logistics App</option>
                      <option value="Custom Database Automation">Custom Database Automation</option>
                      <option value="Bespoke Software Platform">Bespoke Software Platform</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 mb-1.5 block ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="w-full bg-[#f8fafc] border border-slate-200/60 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400/60 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold resize-none"
                      placeholder="Type your message"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Custom Action Pill Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="pl-2 pr-6 py-2.5 rounded-full bg-primary hover:bg-emerald-600 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-fit group"
                  >
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                      {status === 'submitting' ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </span>
                    <span>{status === 'submitting' ? 'Submitting...' : 'Get a Solution'}</span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};
