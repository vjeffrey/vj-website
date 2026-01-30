"use client";

import dynamic from "next/dynamic";
import { Github } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// Dynamically import GitHubCalendar to avoid SSR issues
const GitHubCalendarComponent = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 flex items-center justify-center text-gray-light">
        Loading GitHub activity...
      </div>
    ),
  }
);

export default function GitHubSection() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-[var(--gray-dark)] mb-4">
          GitHub Activity
        </h2>
        <div className="divider-star divider-star-primary" />

        {/* GitHub Calendar */}
        <div className="mt-12 flex justify-center overflow-x-auto">
          <GitHubCalendarComponent
            username={SITE_CONFIG.github}
            colorScheme="light"
            fontSize={14}
            blockSize={12}
            blockMargin={4}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#18BC9C"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#18BC9C"],
            }}
          />
        </div>

        {/* GitHub Link */}
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${SITE_CONFIG.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-bold"
          >
            <Github size={20} />
            View my GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}
