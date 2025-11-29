import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import img1 from '../assets/image/dashboard.jpg'
import img2 from '../assets/image/course_dashboard.png'
import img3 from '../assets/image/ai.jpg'
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Django Rest Framework, and PostgreSQL. Features include product management, shopping cart, and payment integration.",
      tags: ["React", "Django Rest Framework", "PostgreSQL", "Stripe"],
      link: "https://phi-mart-client-omega.vercel.app/",
      f_github: "https://github.com/shadowstacker21/PhiMart-Client",
      b_github:"https://github.com/shadowstacker21/PhiMart",
      image: img1,
    },
    {
      title: "Course Management System",
      description:
        "Scalable Course Management System built with Django REST Framework and React. Supports real-time updates, role-based access, structured course content, and a streamlined, modern dashboard.",
      tags: ["React", "Django Rest Framework",'PostgreSQL', "Tailwind CSS"],
      link: "https://onlineschool-nine.vercel.app/",
      f_github: "https://github.com/shadowstacker21/Online-School-Frontend",
      b_github:"https://github.com/shadowstacker21/Online-School-Management-System",
      image: img2,
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool using OpenAI API. Generate blog posts, social media content, and more with a few clicks.",
      tags: ["Django", "OpenAI", "Tailwind CSS"],
      link: "#",
      f_github: "#",
      b_github: "#",
      image: img3,
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                      <FaExternalLinkAlt size={16} />
                      Live Demo

                </a>

                  <a
                    href={project.b_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} />
                    BackEnd Code
                  </a>
                  <a
                    href={project.f_github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} />
                    FrontEnd Code
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
