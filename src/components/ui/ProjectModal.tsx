"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink, Code } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white max-w-3xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--primary)] hover:opacity-50 transition-opacity"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        {/* Project Image */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h2
          id="modal-title"
          className="text-3xl text-center text-[var(--gray-dark)] mb-2"
        >
          {project.title}
        </h2>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-center text-[var(--gray-light)] text-lg mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Star Divider */}
        <div className="divider-star divider-star-primary" />

        {/* Description */}
        <p className="text-lg leading-relaxed my-8 text-[var(--gray-default)]">
          {project.description}
        </p>

        {/* Links */}
        {project.links && (
          <div className="flex justify-center gap-4 flex-wrap">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Code size={18} />
                View Code
              </a>
            )}
          </div>
        )}

        {/* Close Button at Bottom */}
        <div className="mt-8 text-center">
          <button onClick={onClose} className="btn-outline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
