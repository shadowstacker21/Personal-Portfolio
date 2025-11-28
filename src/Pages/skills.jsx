import { DiDjango } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import {  SiNextdotjs, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
export default function Skills() {
  const skills = [
    { icon: FaReact, label: "React", category: "Frontend" },
    { icon: SiNextdotjs, label: "Next.js", category: "Frontend" },
    { icon: IoLogoJavascript, label: "JavaScript", category: "Language" },
    { icon: FaJava, label: "Java", category: "Language" },
    { icon: FaPython, label: "Python", category: "Language" },
    { icon: SiTailwindcss, label: "Tailwind CSS", category: "Styling" },
    { icon: DiDjango, label: "Django", category: "Backend" },
    { icon: SiPostgresql, label: "PostgreSQL", category: "Database" },
    { icon: FaGitAlt, label: "Git", category: "Tools" },
    
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group  p-6 rounded-xl border border-border bg-card hover:bg-card/80 hover:border-accent/50 transition-all cursor-pointer"
              >
                <IconComponent className="text-3xl text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
