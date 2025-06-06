import { useState } from "react";
import { projects } from "@/datas/ProjectsData";
import { ExternalLink, Github, Code2 } from "lucide-react";

const ProjectsSection = () => {
  const [showAllTags, setShowAllTags] = useState({});

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-foreground/70 mb-8 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              {/* Top Bar with Links on Both Sides */}
              <div className="flex items-center justify-between p-1 bg-secondary/30 border-b border-border/30">
                {/* Left Link - Demo */}
                <a
                  href={project.demoURL}
                  className="linkbutton bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground  hover:shadow-primary/25"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <ExternalLink size={15} />
                </a>

                {/* Status Bar Below Top Bar */}
                <div className="px-4 py-2 bg-secondary/20 border-b border-border/20">
                  <div
                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/15 border border-green-500/20 text-success"
                        : "bg-amber-500/15 border border-amber-500/20 text-warning"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Right Link - GitHub */}
                <a
                  href={project.gitHubURL}
                  className="linkbutton bg-foreground/10 text-foreground hover:bg-foreground hover:text-background hover:shadow-foreground/25 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github size={15} />
                </a>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 opacity-80">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {(showAllTags[project.id]
                    ? project.tags
                    : project.tags.slice(0, 6)
                  ).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-secondary/60 text-foreground/80 rounded-md border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* only show 6 tags and hide other and when clcik that expand uisng state
                        eg:

                        showAllTags = {
                            1: true,    // Project ID 1 shows all tags
                            2: false,   // Project ID 2 shows only 6 tags
                            3: true     // Project ID 3 shows all tags
                        }
                    */}
                  {project.tags.length > 6 && (
                    <button
                      onClick={() =>
                        setShowAllTags((prev) => ({
                          ...prev,
                          [project.id]: !prev[project.id],
                        }))
                      }
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-all duration-300"
                    >
                      {showAllTags[project.id]
                        ? "Show Less"
                        : `+${project.tags.length - 6} more`}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary-hover transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-primary/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
