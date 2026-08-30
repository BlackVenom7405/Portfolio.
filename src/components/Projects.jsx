import React, { useState } from 'react';
import ArrowRevealButton from './originkit/ui/arrow-reveal-button';
import sentinelImg from '../assets/projects/sentinel.jpg';
import metadataCleanerAnalyzerImg from '../assets/projects/metadata_cleaner_analyzer.jpg';
import grievanceImg from '../assets/projects/grievance.jpg';
import metadataCleanerImg from '../assets/projects/metadata_cleaner.jpg';
import metadataAnalyzerImg from '../assets/projects/metadata_analyzer.jpg';
import aiCodeExplainerImg from '../assets/projects/ai_code_explainer.jpg';

const projects = [
  {
    id: 1,
    title: 'Sentinel.X — Web-Based Honeypot System',
    description: 'A web-based honeypot system designed to attract, capture, monitor, and analyse attacker activities in a controlled environment.',
    image: sentinelImg,
    tags: ['Python', 'Flask', 'Cybersecurity'],
    github: 'https://github.com/BlackVenom7405/honeypot',
    category: 'Cybersecurity'
  },
  {
    id: 2,
    title: 'Metadata Cleaner & Analyzer',
    description: 'A privacy-focused tool that analyzes hidden metadata and removes sensitive information from files.',
    image: metadataCleanerAnalyzerImg,
    tags: ['Python', 'Flask', 'Metadata'],
    github: 'https://github.com/BlackVenom7405/Metadata-Analyzer-and-Cleaner',
    category: 'Privacy'
  },
  {
    id: 3,
    title: 'Smart Public Grievance System',
    description: 'A smart public grievance platform that enables citizens to submit, track, and manage public complaints efficiently.',
    image: grievanceImg,
    tags: ['JavaScript', 'Python', 'HTML', 'CSS'],
    github: 'https://github.com/BlackVenom7405/Public-Grievance-Tracker',
    category: 'Web Dev'
  },
  {
    id: 4,
    title: 'Metadata Cleaner',
    description: 'A privacy-focused tool that removes hidden metadata from digital files to help protect sensitive information.',
    image: metadataCleanerImg,
    tags: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/BlackVenom7405/metadata-cleaner',
    category: 'Privacy'
  },
  {
    id: 5,
    title: 'Metadata Analyzer',
    description: 'A metadata analysis tool that extracts and analyzes hidden metadata from files for security and privacy insights.',
    image: metadataAnalyzerImg,
    tags: ['Python', 'HTML', 'CSS'],
    github: 'https://github.com/BlackVenom7405/Metadata-Analyzer',
    category: 'Privacy'
  },
  {
    id: 6,
    title: 'AI Code Explainer & Analyzer',
    description: 'An AI-powered tool that analyzes source code and provides clear explanations, summaries, and insights to help users better understand code.',
    image: aiCodeExplainerImg,
    tags: ['Python', 'AI', 'Machine Learning'],
    github: 'https://github.com/BlackVenom7405/AI-Code-Explainer-and-Analyzer',
    category: 'AI'
  }
];

const categories = ['All', 'Cybersecurity', 'Privacy', 'Web Dev', 'AI'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#0c0c0c] pt-28 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white border-t border-white/10">
      
      {/* Background Accent Blur */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-extrabold uppercase tracking-widest mb-4">
            Featured Works
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Featured <span className="text-[#ff2a2a]">Projects</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
            Explore my hands-on technical solutions ranging from cybersecurity honeypots and metadata privacy tools to intelligent AI platforms and smart web apps.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.5)] scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#ff2a2a]/60 hover:shadow-[0_10px_40px_rgba(255,42,42,0.2)] transition-all duration-500 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-red-400 uppercase tracking-widest border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[11px] font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Action Arrow Reveal Button */}
                  <ArrowRevealButton 
                    link={project.github}
                    newTab={true}
                    className="w-full justify-between shadow-md"
                    colors={{
                      bg: "rgba(255, 255, 255, 0.05)",
                      text: "#ffffff",
                      border: "rgba(255, 255, 255, 0.15)",
                      hoverBg: "#ff2a2a",
                      hoverText: "#ffffff",
                      glow: "rgba(255, 42, 42, 0.5)",
                    }}
                    rounded={16}
                    padding="12px 20px"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      View Code on GitHub
                    </span>
                  </ArrowRevealButton>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
