import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {

  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Contact
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-base font-semibold text-foreground mb-6">Get in touch</h3>
          <div className="flex flex-col gap-1">
            <a href="mailto:usmanabdella1121@gmail.com" className="contact-link group">
              <Mail className="contact-link-icon" />
              <span>usmanabdella1121@gmail.com</span>
            </a>
            <a 
              href="https://github.com/usman1121" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link group"
            >
              <Github className="contact-link-icon" />
              <span>github.com/usman1121</span>
              <ArrowUpRight className="contact-link-arrow" />
            </a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default ContactSection;