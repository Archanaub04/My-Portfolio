import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Archana
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              U B
            </span>
          </h1>

          <p className="">
            I’m a full-stack web developer crafting fast and scalable web apps.
            I specialize in Laravel, React, and modern JavaScript — blending
            clean backend architecture with sleek frontend experiences.
          </p>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mt-6">
            Tech I work with:
          </p>

          <div className="text-primary font-medium text-xl mt-4">
            <Typewriter
              words={[
                "Laravel",
                "CodeIginter",
                "React",
                "JavaScript",
                "REST APIs",
                "jQuery",
                "AJAX",
              ]}
              loop={0} // infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
