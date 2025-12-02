import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProjectDetail from '@/components/ProjectDetail';
import { Project } from '@/types';
import { projects as initialProjects } from '@/data/projects';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [heroImage, setHeroImage] = useState<string>('/placeholder.svg');
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    const savedHeroImage = localStorage.getItem('heroImage');
    if (savedHeroImage) setHeroImage(savedHeroImage);

    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) setProjects(JSON.parse(savedProjects));
  }, []);

  const handleHeroImageChange = (imageUrl: string) => {
    setHeroImage(imageUrl);
    localStorage.setItem('heroImage', imageUrl);
  };

  const handleProjectUpdate = (updatedProject: Project) => {
    const updatedProjects = projects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    );
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)}
        onUpdate={handleProjectUpdate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        image={heroImage}
        onImageChange={handleHeroImageChange}
      />
      <Projects 
        projects={projects}
        onProjectClick={setSelectedProject}
        onProjectUpdate={handleProjectUpdate}
      />
      <About />
      <Contact />
    </div>
  );
};

export default Index;