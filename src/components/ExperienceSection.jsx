import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Here's a timeline of my professional journey, highlighting key
            roles, responsibilities, and achievements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
