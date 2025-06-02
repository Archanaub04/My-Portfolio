import { Briefcase, Code, Layers, Monitor, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer & Tech Explorer
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Passionate Full-Stack Developer with 3 years of Laravel expertise,
              specializing in building scalable, secure web applications with
              clean architecture. Comfortable across the entire stack delivering
              complete solutions.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Planning to expand to modern technologies like React, Next.js, and
              Node.js with a goal to become a versatile software architect
              proficient in major tech stacks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <div className="cosmic-button">
                <a href="#contact">Get In Touch</a>
              </div>

              <a
                href="/cv/Archana U B - PHP Full Stack Developer.pdf"
                download
                className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/10  font-semibold transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Building scalable APIs and backend systems with Laravel and
                    CodeIgniter, focusing on clean architecture and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Delivered full-stack apps with Laravel, JavaScript, jQuery,
                    AJAX, and React.js. Skilled in handling end-to-end data flow
                    and complex logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Creating responsive UIs with JavaScript, jQuery, AJAX and
                    React.js using modern design principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
