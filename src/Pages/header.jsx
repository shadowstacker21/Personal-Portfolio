import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
    {label:"Resume",id:"resume"},
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <h1 className="text-2xl font-bold text-blue-500">Portfolio</h1>
       

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors 
                ${
                  activeSection === item.id
                    ? "text-green-500"
                    : "text-gray-400 hover:text-green-400"
                }`}
              >
           <div className="flex items-center gap-2">
              {item.label === "Resume" ? (
                <a
                  href="https://docs.google.com/document/d/1jwNjo-Ir2T_S-146_M4NOKzmuGZyI4hYzuarxrBcwq8/edit?tab=t.0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BiDownload />
                  {item.label}
                </a>
              ) : (
                item.label
              )}
          </div>
             
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden grid gap-4 border-t border-gray-700 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium transition-colors
                ${
                  activeSection === item.id
                    ? "text-green-500"
                    : "text-gray-400 hover:text-green-400"
                }`}
              >
                 <div className="flex items-center gap-2">
              {item.label === "Resume" ? (
                <a
                  href="https://docs.google.com/document/d/1jwNjo-Ir2T_S-146_M4NOKzmuGZyI4hYzuarxrBcwq8/edit?tab=t.0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BiDownload />
                  {item.label}
                </a>
              ) : (
                item.label
              )}
          </div>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
