import img from '../assets/image/download.png'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0  from-primary/20 via-background to-accent/10" />
      </div>
     
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold">Welcome to my portfolio</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-pretty">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                 Alamin Hossain
                 </span>

              </h1>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web experiences. I specialize in
              React, Django, and modern web technologies.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/shadowstacker21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors text-foreground"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alamin-hossain-854456330/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors text-foreground"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors text-foreground"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent"
                className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors text-foreground"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96">
              {/* Gradient Frame */}
              <div className="absolute inset-0 rounded-2xl  from-primary to-accent opacity-75 blur-2xl" />
              <div className="absolute inset-0 rounded-2xl  from-primary/30 to-accent/30" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden border border-accent/30 bg-card">
                <img
                  src={img}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
