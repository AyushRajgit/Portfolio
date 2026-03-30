import { useState } from 'react';
import { projects } from '../../Constant';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans relative">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-300"
              onClick={() => handleOpenProject(project)}
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <div className="p-6 pt-2 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-6 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/20 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col">
            
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none">
              <button
                onClick={handleCloseProject}
                className="text-white text-4xl font-bold hover:text-purple-500 pointer-events-auto leading-none"
              >
                &times;
              </button>
            </div>

            <div className="px-6 sm:px-8 pb-8 -mt-8">
              <div className="w-full flex justify-center mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-64 object-cover sm:object-contain rounded-xl shadow-lg border border-gray-700"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] border border-purple-500/30 text-xs sm:text-sm font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition-colors"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-[#8245ec] hover:bg-purple-600 text-white px-4 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition-colors shadow-lg shadow-purple-500/30"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
