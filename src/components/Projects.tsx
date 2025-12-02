import { projects } from '@/data/projects';
import { Project } from '@/types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">{project.title}</h3>
              {project.year && (
                <p className="text-sm text-gray-500">{project.year}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
