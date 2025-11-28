import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include product management, shopping cart, and payment integration.",
      tags: ["React", "Next.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#",
      image: "/ecommerce-dashboard.jpg",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management app built with React and Firebase. Real-time sync, team collaboration, and beautiful UI.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#",
      image: "/task-management-board.png",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool using OpenAI API. Generate blog posts, social media content, and more with a few clicks.",
      tags: ["Next.js", "OpenAI", "Tailwind CSS"],
      link: "#",
      github: "#",
      image: "/ai-tool.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-card">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
