import stackImage from '../assets/about/image.png';

const About = () => {
  const techStack = [
    {
      category: 'Languages',
      icon: '⚡',
      items: ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'HTML/CSS']
    },
    {
      category: 'Frameworks & Libraries',
      icon: '🛠️',
      items: ['React', 'Node.js', 'Vite', 'Flask']
    },
    {
      category: 'Cybersecurity Tools',
      icon: '🛡️',
      items: ['Kali Linux', 'Nmap', 'Wireshark', 'Burp Suite']
    }
  ];

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: ID Badge and Education */}
        <div className="flex flex-col items-center w-full md:w-[320px] lg:w-[350px] shrink-0 mt-8 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full mb-8">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-red-500/30">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/40 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-[#ff2a2a]/40 relative group">
                <img 
                  src={stackImage} 
                  alt="Bharath Gowda D" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-center">
                  <h3 className="text-white font-black text-sm tracking-wide">BHARATH GOWDA D</h3>
                  <p className="text-red-400 text-[11px] font-bold">SECURITY & DEV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div data-aos="fade-up" data-aos-delay="300" className="w-full bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#ff2a2a] text-white text-lg">🎓</span>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-red-200">Education & Qualification</h4>
                <p className="text-sm font-black text-white">B.E. Computer Science</p>
              </div>
            </div>
            <p className="text-xs font-medium text-red-100 leading-relaxed bg-black/30 p-3 rounded-xl border border-white/10">
              Specializing in <span className="font-bold text-white">IoT, CyberSecurity & Blockchain</span>.
            </p>
          </div>

        </div>

        {/* Right Side: Detailed Bio Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-4 md:mt-0 relative z-20">
          
          <div className="inline-block bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-red-200 mb-4 border border-white/20">
            About Me
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
            Building Secure & Impactful Technology.
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-medium text-red-50 leading-relaxed">
            <p className="bg-black/20 p-4 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors">
              I am an aspiring <strong className="text-white">Cybersecurity Professional</strong> and <strong className="text-white">Software Developer</strong> with a strong interest in building secure, innovative, and user-focused digital solutions. I enjoy exploring cybersecurity concepts, web technologies, and software development while continuously improving my technical skills through hands-on learning and real-world projects.
            </p>

            <p className="bg-black/20 p-4 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors">
              My journey in technology is driven by curiosity and a passion for understanding how systems work, identifying security challenges, and developing practical solutions. I have worked on projects involving web development, cybersecurity, AI-powered applications, and security-focused systems.
            </p>

            <p className="bg-black/20 p-4 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors">
              I am particularly interested in ethical hacking, secure application development, and emerging tech. I believe in continuous learning and enjoy taking on new challenges that help me grow both technically and professionally.
            </p>

            <p className="bg-black/30 p-4 rounded-2xl border border-white/20 text-white font-semibold">
              🎯 My goal is to build a successful career in cybersecurity and software development, contribute to meaningful projects, and create technology that is secure, reliable, and impactful.
            </p>
          </div>

        </div>
      </div>

      {/* Tech Stack & Tools Section */}
      <div id="skills" className="max-w-6xl mx-auto mt-20 relative z-20">
        <div data-aos="fade-up" className="text-center mb-10">
          <div className="inline-block bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-red-200 mb-2 border border-white/20">
            Expertise & Arsenal
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-black">Tech Stack & Tools</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((group, idx) => (
            <div 
              key={group.category}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                <span className="text-2xl">{group.icon}</span>
                <h4 className="text-base font-bold text-white tracking-wide">{group.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#ff2a2a] text-white text-xs font-bold transition-all duration-300 border border-white/10 hover:border-white/40 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
