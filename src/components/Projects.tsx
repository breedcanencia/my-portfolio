import { portfolioData } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjNWYjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djFoNHYxaC00ek0zNiAzMHYxaDR2MWgtNHptMC00djFoNHYxaC00ek0wIDM0djFoNHYxaC00ek0wIDMwdjFoNHYxaC00ek0wIDI2djFoNHYxaC00ek0zNiAyNnYxaDR2MWgtNHptMzYgOHYxaDR2MWgtNHptMzYtOHYxaDR2MWgtNHptMzYtOHYxaDR2MWgtNHptMCA0djFoNHYxaC00ek0wIDQydjFoNHYxaC00ek0zNiA0MnYxaDR2MWgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="relative z-10 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600 hover:border-blue-500 hover:text-blue-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
