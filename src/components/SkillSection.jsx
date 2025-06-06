import { useState } from "react";
import { cn } from "@/lib/utils";
import { skills, categories } from "../datas/skillsData";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // get color by prficiency level
  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Expert":
        return "text-primary";
      case "Advanced":
        return "text-indigo-500";
      case "Intermediate":
        return "text-teal-500";
      case "Beginner":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section id="skills" className="py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Here's a showcase of my technical skills and expertise. Filter by
          category to see specific skills.
        </p>

        {/* categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-4 py-1.5 rounded-full transition-all duration-300 text-sm flex items-center gap-1.5",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary/70 text-foreground hover:bg-primary-hover hover:text-primary-foreground"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-3 rounded-lg border border-border/50 hover:shadow-sm transition-all duration-300 card-hover hover:scale-[1.02] group"
            >
              {/* skill logo */}
              <div className="flex items-center gap-2">
                <div className="text-2xl p-1.5 rounded-md bg-background group-hover:bg-primary/10 transition-colors duration-300">
                  {skill.icon}
                </div>

                {/* skill name & category */}
                <div>
                  <h3 className="font-semibold text-base">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.category}
                  </span>
                </div>
              </div>

              <div className="mt-2">
                {/* proficiency level */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-muted-foreground">
                    Proficiency
                  </span>
                  <span
                    className={`text-xs font-semibold ${getProficiencyColor(
                      skill.proficiency
                    )}`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                {/* proficiency level progress bar */}
                <div className="w-full bg-secondary/30 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r origin-left animate-[grow_1.5s_ease-out] transition-all duration-1000 ease-out",
                      skill.proficiency === "Expert" &&
                        "from-primary to-primary/70",
                      skill.proficiency === "Advanced" &&
                        "from-indigo-700 to-indigo-600",
                      skill.proficiency === "Intermediate" &&
                        "from-teal-500 to-teal-400",
                      skill.proficiency === "Beginner" &&
                        "from-gray-400 to-gray-300"
                    )}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No skills found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
