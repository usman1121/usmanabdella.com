import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) - Software Engineering",
    dateRange: "2024-2030",
    institution: "BITS School of Science and Technology",
  },
];

const EducationSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Education
      </motion.h2>
      
      <div className="flex flex-col gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-base font-semibold text-foreground">{edu.degree}</span>
              <span className="text-sm text-muted-foreground/70 font-medium">{edu.dateRange}</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
