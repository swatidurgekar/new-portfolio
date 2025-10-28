"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const ProjectSection = () => {

  const projects = [
    {
      id: 1,
      title: "Todo app",
      tags: ["Nextjs", "JavaScript", "MongoDB"],
      description: "Simple task management.",
      fullDescription: "A simple and user-friendly task management app that allows users to add, mark as complete, and delete daily tasks.",
      image: "/todo.png",
      techStack: ["Nextjs", "JavaScript", "MongoDB", "CSS"]
    },
    {
      id: 2,
      title: "Group chat",
      tags: ["React", "MySQL", "AWS"],
      description: "Chat application",
      fullDescription: "A real-time chat application enabling multiple users to send/receive messages.",
      image: "/group-chat.png",
      techStack: ["React", "JavaScript", "AWS", "MySQL"]
    },
    {
      id: 3,
      title: "Ecommerce website",
      tags: ["React", "JavaScript", "CSS"],
      description: "Ecommerce",
      fullDescription: "An e-commerce application where users can browse products, add items to the cart, manage quantities.",
      image: "/ecommerce.png",
      techStack: ["React", "Redux", "Firebase", "CSS"]
    },
  ]

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id)
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % projects.length;

    setSelectedProject(projects[nextIndex].id);
  }

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if (currentIndex === -1) {
      return null;
    }

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    setSelectedProject(projects[prevIndex].id);
  }


  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <button onClick={() => handleProjectClick(project.id)} key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50
          hover:border-purple-500/50 transition-colors hover:shadow-sm text-left">
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border
                   border-purple-500/30">{tag}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProject && (
        < ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
}

export default ProjectSection;