import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 flex items-center justify-center text-white text-4xl font-bold relative">
            <span className="relative z-10">{portfolioData.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white mb-6">
            {portfolioData.name}
          </h1>
          
          <div className="inline-block px-6 py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-600/40 mb-4">
            <p className="text-xl md:text-2xl text-blue-300 font-medium">
              {portfolioData.title}
            </p>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.tagline}
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="group px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </a>
          <a 
            href="#experience" 
            className="px-8 py-4 border-2 border-blue-600/50 text-blue-300 hover:border-blue-500 hover:bg-blue-800/20 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105"
          >
            View Experience
          </a>
        </div>

        <div className="mt-20">
          <svg 
            className="w-8 h-8 mx-auto text-blue-400" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
