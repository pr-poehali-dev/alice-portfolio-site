import { Project } from '@/types';
import Icon from '@/components/ui/icon';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onProjectUpdate: (project: Project) => void;
}

const Projects = ({ projects, onProjectClick, onProjectUpdate }: ProjectsProps) => {
  const handleCoverImageChange = (projectId: string, imageUrl: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      onProjectUpdate({ ...project, coverImage: imageUrl });
    }
  };

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
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <label className="cursor-pointer bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Icon name="Upload" size={18} />
                    Загрузить обложку
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            handleCoverImageChange(project.id, reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </label>
                </div>
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