"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="portfolio-item group w-full aspect-square cursor-pointer focus:outline-none focus:ring-4 focus:ring-[var(--accent)] focus:ring-offset-2"
      aria-label={`View details for ${project.title}`}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="overlay">
        <Search size={48} className="text-white" />
      </div>
    </button>
  );
}
