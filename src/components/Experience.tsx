import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjNWYjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djFoNHYxaC00ek0zNiAzMHYxaDR2MWgtNHptMC00djFoNHYxaC00ek0wIDM0djFoNHYxaC00ek0wIDMwdjFoNHYxaC00ek0wIDI2djFoNHYxaC00ek0zNiAyNnYxaDR2MWgtNHptMzYgOHYxaDR2MWgtNHptMzYtOHYxaDR2MWgtNHptMzYtOHYxaDR2MWgtNHptMCA0djFoNHYxaC00ek0wIDQydjFoNHYxaC00ek0zNiA0MnYxaDR2MWgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-4 animate-gradient">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the roles I've held
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2"></div>
                
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 mt-6 shadow-lg shadow-purple-500/50"></div>
                
                <div className="md:w-1/2 pl-16 md:pl-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-purple-400 text-lg font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <ul className="text-gray-300 space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600 hover:border-purple-500 hover:text-purple-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-purple-500/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-purple-400 text-xl font-semibold mb-1">
                  {portfolioData.education.degree}
                </p>
                <p className="text-gray-300 text-lg">
                  {portfolioData.education.institution}
                </p>
              </div>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium">
                {portfolioData.education.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
