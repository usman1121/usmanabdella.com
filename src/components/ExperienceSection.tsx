import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "School Management System",
    dateRange: "2024",
    role: "Full-stack Developer",
    externalLink: "https://www.yeneschool.me/",
  },
  {
    company: "Employee Management System",
    dateRange: "2023",
    role: "Full-stack Developer",
    link: "/projects/employee-management",
  },
  {
    company: "Ecommerce",
    dateRange: "2023",
    role: "Full-stack Developer",
    link: "/projects/ecommerce",
  },
  {
    company: "Property Management System",
    dateRange: "2024",
    role: "Full-stack Developer",
    link: "/projects/property-management",
  },
];

const personalProjects = [
  {
    company: "Currently Learning",
    dateRange: "2024-2030",
    role: "Software Engineering @ BITS",
    link: undefined,
  },
];

const ExperienceSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Experience
      </motion.h2>
      
      <div className="flex flex-col gap-2 mb-16">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            {...exp}
            index={index}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Personal Projects
      </motion.h2>
      
      <div className="flex flex-col gap-2">
        {personalProjects.map((proj, index) => (
          <ExperienceCard
            key={proj.company}
            {...proj}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;