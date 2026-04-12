import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/ui/Modal';
import { ArrowRight, Check } from 'lucide-react';

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
  title = "Application Form",
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
          subject: customSubject || `Arch: New Application - ${formData.name}`,
          from_name: "System Portal",
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
    <Modal isOpen={isOpen} onClose={onClose} className="w-[777px] h-[444px] max-w-[100vw] overflow-y-auto scrollbar-hide">
      <div className="bg-background text-foreground relative overflow-hidden h-full flex flex-col items-center justify-center rounded-none sm:rounded-sm border-0">
        
        {/* Success State */}
        {status === 'success' ? (
          <div className="p-8 w-full text-left">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: 'left' }}
              className="w-12 h-1 bg-primary mb-8"
            />
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground leading-[0.9]">
              Application <br />
              <span className="text-primary">Received.</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-sm">
              Your information has been logged. We will get back to you within 48 hours.
            </p>
            <button 
              onClick={onClose} 
              className="h-12 px-8 bg-foreground text-background font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary flex items-center gap-4 group"
            >
              <span>Close</span>
              <Check size={20} className="text-background" />
            </button>
          </div>
        ) : (
          /* Form State */
          <div className="p-8 w-full text-left overflow-y-auto scrollbar-hide">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-primary"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                {title}
              </span>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Apply <span className="text-primary">Now.</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

              {status === 'error' && (
                <div className="p-4 border border-red-500/30 text-red-500 text-sm font-bold uppercase tracking-widest">
                  [Error] Transmission failed. Check network.
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-border/60 py-2 text-base font-medium text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 rounded-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-border/60 py-2 text-base font-medium text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 rounded-none"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Project Details
                </label>
                <textarea
                  required
                  rows={2}
                  className="w-full bg-transparent border border-border/60 p-3 mt-1 text-base font-medium text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 resize-none rounded-none"
                  placeholder="Describe what you need..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  disabled={status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-2 h-12 bg-foreground text-background font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <span>{status === 'submitting' ? 'Submitting...' : 'Submit Application'}</span>
                {!status && <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />}
              </button>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
};
