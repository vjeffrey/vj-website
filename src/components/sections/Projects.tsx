"use client";

import { useState } from "react";
import { projects, Project } from "../../data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="bg-white section-padding">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-[var(--gray-dark)] mb-4">
          Portfolio
        </h2>
        <div className="divider-star divider-star-primary" />

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}
