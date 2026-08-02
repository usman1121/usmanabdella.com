import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        About
      </motion.h2>
      
      <div className="flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="body-text"
        >
          Software Engineering student at BITS School of Science and Technology with a passion for building practical, scalable applications. Currently developing full-stack solutions using modern technologies and strong engineering practices.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="body-text"
        >
          I specialize in creating solutions for real-world problems, from{" "}
          <span className="body-text-emphasis">educational platforms</span> to{" "}
          <span className="body-text-emphasis">business management systems</span>.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="body-text"
        >
          Currently focused on developing full-stack applications with modern technologies and best practices.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="body-text italic"
        >
          Always learning, always building.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="body-text"
        >
          Co-founder of Afro Digital Innovation Labs, building innovative solutions that blend technology with cultural impact.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;