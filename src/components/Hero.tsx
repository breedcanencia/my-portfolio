import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-float relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-xl opacity-50"></div>
            <span className="relative z-10">{portfolioData.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-6 animate-gradient">
            {portfolioData.name}
          </h1>
          
          <div className="inline-block px-6 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-4">
            <p className="text-xl md:text-2xl text-purple-300 font-medium">
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
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:transform hover:scale-105"
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
            className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105"
          >
            View Experience
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <svg 
            className="w-8 h-8 mx-auto text-purple-400" 
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
