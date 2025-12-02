import { Project } from '@/types';
import ImageUpload from '@/components/ImageUpload';

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
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="cursor-pointer" onClick={() => onProjectClick(project)}>
                <ImageUpload
                  currentImage={project.coverImage}
                  onImageChange={(url) => handleCoverImageChange(project.id, url)}
                  label={`Обложка: ${project.title}`}
                  aspectRatio="aspect-[3/4]"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 mt-4">{project.title}</h3>
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