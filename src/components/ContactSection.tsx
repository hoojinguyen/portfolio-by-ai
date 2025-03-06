import React from "react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-yellow-500/30"
                required
              />
            </div>
            <div className="group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-yellow-500/30"
                required
              />
            </div>
          </div>

          <div className="group">
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-yellow-500/30"
              required
            />
          </div>

          <div className="group">
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 transform hover:scale-[1.02] group-hover:border-yellow-500/30 resize-none"
              required
            />
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(234,179,8,0.3)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
