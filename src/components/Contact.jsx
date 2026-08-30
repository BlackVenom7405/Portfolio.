import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socials = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/BlackVenom7405', 
      icon: (
        <motion.svg 
          className="w-5 h-5 text-white group-hover:text-[#ff2a2a] transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </motion.svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/bharath-gowda-d-9779081ab/', 
      icon: (
        <motion.svg 
          className="w-5 h-5 text-white group-hover:text-[#0077b5] transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ y: -4, scale: 1.25 }}
          transition={{ type: "spring", stiffness: 350 }}
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </motion.svg>
      )
    },
    { 
      name: 'Twitter / X', 
      href: 'https://x.com/BharathGow83675', 
      icon: (
        <motion.svg 
          className="w-5 h-5 text-white group-hover:text-black transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ rotate: 180, scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </motion.svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/_bharu__xo_/', 
      icon: (
        <motion.svg 
          className="w-5 h-5 text-white group-hover:text-[#e1306c] transition-colors" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </motion.svg>
      )
    }
  ];

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900 font-sans">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 md:mb-16">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90 mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-black">Let's build something secure together.</h2>
            </div>
            
            <a 
              href="mailto:bharathg98765@gmail.com" 
              className="px-5 py-2.5 rounded-full bg-black/30 border border-white/30 text-white text-xs md:text-sm font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 backdrop-blur-md flex items-center gap-2 group"
            >
              <span>✉️</span> bharathg98765@gmail.com
            </a>
          </div>

          {/* Social Links Row with Animated Icons */}
          <div className="flex flex-wrap gap-4 mb-12 border-y border-white/20 py-6 items-center">
            <span className="text-xs uppercase font-extrabold tracking-widest text-white/80 mr-2">Socials:</span>
            {socials.map((s) => (
              <motion.a 
                key={s.name} 
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 rounded-xl bg-black/30 hover:bg-white hover:text-[#ff2a2a] text-xs font-bold transition-all duration-300 flex items-center gap-2.5 border border-white/20 shadow-md group"
              >
                <div className="flex items-center justify-center">
                  {s.icon}
                </div>
                <span>{s.name}</span>
              </motion.a>
            ))}
          </div>

          {submitted && (
            <div className="bg-black/80 text-white p-4 rounded-xl mb-8 border border-white/30 text-sm font-bold animate-bounce text-center">
              🎉 Thank you! Your message has been received. I'll get back to you shortly at bharathg98765@gmail.com!
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    placeholder="Your Full Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject (e.g. Security Audit / Web Project)" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    required
                    placeholder="Type your message here..." 
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-4">
              <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  required
                  className="w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer leading-snug text-xs sm:text-sm">
                  I grant permission to respond back to this inquiry.
                </label>
              </div>
              
              <button 
                type="submit" 
                className="px-8 py-3.5 rounded-full bg-black text-white border border-white/40 font-bold text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-stretch sm:self-auto shadow-xl"
              >
                Send Message 🚀
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
