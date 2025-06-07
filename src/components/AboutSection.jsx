import { Briefcase, Code, Layers, Monitor, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            My professional journey and future aspirations
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-5 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Full-Stack Web Developer & Tech Explorer
            </h3>
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                Passionate Full-Stack Developer with 3 years of Laravel
                expertise, specializing in building scalable, secure web
                applications with clean architecture. Comfortable across the
                entire stack delivering complete solutions.
              </p>
              <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                Planning to expand to modern technologies like React, Next.js,
                and Node.js with a goal to become a versatile software architect
                proficient in major tech stacks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
              <div className="cosmic-button w-full sm:w-auto">
                <a href="#contact">Get In Touch</a>
              </div>

              <a
                href="/cv/Archana U B - PHP Full Stack Developer.pdf"
                download
                className="px-5 py-2 border border-primary text-primary rounded-full hover:bg-primary/10  font-semibold transition-colors duration-300 text-center text-sm md:text-base"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-5">
            <div className="skillCard">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                  <Code className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    Backend Development
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building scalable APIs and backend systems with Laravel and
                    CodeIgniter, focusing on clean architecture and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="skillCard">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Delivered full-stack apps with Laravel, JavaScript, jQuery,
                    AJAX, and React.js. Skilled in handling end-to-end data flow
                    and complex logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="skillCard">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
