const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/10">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white uppercase">Cybersecurity Analyst</p>
          <p className="text-gray-400">Full-Stack Web Developer</p>
          <p className="text-gray-400">AI & Security Tools</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>IoT, CyberSecurity & Blockchain</p>
          <a href="#projects" className="underline hover:text-[#ff2a2a] transition-colors mt-1 underline-offset-4 decoration-1 font-bold">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for Roles & Projects</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[12vw] md:text-[11vw] leading-none font-sans font-black tracking-tighter select-none text-[#f4f4f4] hover:text-[#ff2a2a] transition-colors duration-500 w-full text-center">
          Bharath Gowda D
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <a href="https://github.com/BlackVenom7405" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/bharath-gowda-d-9779081ab/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/BharathGow83675" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://www.instagram.com/_bharu__xo_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p className="text-white/40 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Bharath Gowda D | Built with React & Vite
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:bharathg98765@gmail.com" className="underline hover:text-[#ff2a2a] transition-colors underline-offset-4 decoration-1 lowercase font-bold text-sm">
            bharathg98765@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="/Bharath_Gowda_D_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Bharath_Gowda_D_Resume.pdf" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
