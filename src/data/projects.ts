export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
  description: string;
  links?: {
    live?: string;
    code?: string;
  };
}

export const projects: Project[] = [
  {
    id: "frogger",
    title: "Frogger",
    subtitle: "Udacity Nanodegree Project",
    thumbnail: "/images/projects/game.png",
    description:
      "I developed this frogger-like game for my Udacity Front-End Web Development Nanodegree. The project demonstrates JavaScript programming skills, object-oriented programming concepts, and HTML5 Canvas for game rendering.",
    links: {
      live: "http://vjeffrey.github.io/udacity-nanodegree-project-three/",
      code: "https://github.com/vjeffrey/udacity-nanodegree-project-three/",
    },
  },
  {
    id: "sde",
    title: "Software Development Engineer",
    subtitle: "Level I & II at Chef Software",
    thumbnail: "/images/projects/cake.png",
    description:
      "I began my software engineering career at Chef Software in June 2015. As an SDE I, I focused on JavaScript UI work and began giving presentations on InSpec at conferences. After about a year and a half, I was promoted to SDE II, where I shifted my focus to Golang development, working on cloud SDK integrations for AWS, Azure, and GCP.",
  },
  {
    id: "eng-lead",
    title: "Engineering Lead",
    subtitle: "Chef Software",
    thumbnail: "/images/projects/circus.png",
    description:
      "As an Engineering Lead at Chef Software, my primary responsibility was the execution of our team goals. I worked closely with product management to define requirements, coordinated with other teams on cross-functional projects, and mentored junior developers while continuing to contribute code to our codebase.",
  },
  {
    id: "eng-manager",
    title: "Engineering Manager",
    subtitle: "Chef Software & Beyond",
    thumbnail: "/images/projects/submarine.png",
    description:
      "As an Engineering Manager at Chef, I was responsible for the domain services of Automate. I managed two teams with approximately 10 direct reports total. My responsibilities included bi-weekly 1:1 meetings, backlog refinement, sprint planning, performance reviews, and fostering a positive team culture focused on continuous improvement.",
  },
];
