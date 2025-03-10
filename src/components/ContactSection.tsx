import React from 'react';
import ScrollReveal from './animations/ScrollReveal';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-8 shadow-[0_24px_80px_var(--color-shadow)] border border-[var(--color-border-primary)]">
      <ScrollReveal direction="up" width="100%">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <ScrollReveal direction="up" width="100%" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border-secondary)]/50 rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent-primary)]/50 focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-[var(--color-accent-primary)]/30"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border-secondary)]/50 rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent-primary)]/50 focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-[var(--color-accent-primary)]/30"
                    required
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" width="100%" delay={0.2}>
              <div className="group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border-secondary)]/50 rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent-primary)]/50 focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-[var(--color-accent-primary)]/30"
                  required
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" width="100%" delay={0.3}>
              <div className="group">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border-secondary)]/50 rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent-primary)]/50 focus:ring-2 focus:ring-[var(--color-accent-primary)]/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-[var(--color-accent-primary)]/30 resize-none"
                  required
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" width="100%" delay={0.4}>
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/90 text-[var(--color-bg-primary)] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_30px_var(--color-accent-primary)/30]"
                >
                  Send Message
                </button>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ContactSection;
