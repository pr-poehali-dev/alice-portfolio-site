import { Project } from '@/types';
import Icon from '@/components/ui/icon';
import ImageUpload from '@/components/ImageUpload';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onUpdate: (project: Project) => void;
}

const ProjectDetail = ({ project, onBack, onUpdate }: ProjectDetailProps) => {
  const handleImageChange = (index: number, imageUrl: string) => {
    const updatedImages = [...project.images];
    updatedImages[index] = imageUrl;
    onUpdate({ ...project, images: updatedImages });
  };
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Назад</span>
          </button>
          <h2 className="text-xl font-light">{project.title}</h2>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="pt-20 pb-20 px-6 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-6">{project.title}</h1>
            <div className="flex items-center justify-center gap-8 text-gray-600">
              {project.year && <span>{project.year}</span>}
              {project.role && <span>{project.role}</span>}
            </div>
          </div>

          <div className="prose prose-lg max-w-3xl mx-auto mb-16">
            <p className="text-xl leading-relaxed text-gray-700">{project.description}</p>
          </div>

          <div className="space-y-12">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ImageUpload
                  currentImage={image}
                  onImageChange={(url) => handleImageChange(index, url)}
                  label={`Фото ${index + 1} из ${project.images.length}`}
                  aspectRatio="aspect-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;