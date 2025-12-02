import { useState } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProjectDetail from '@/components/ProjectDetail';
import { Project } from '@/types';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Projects onProjectClick={setSelectedProject} />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
