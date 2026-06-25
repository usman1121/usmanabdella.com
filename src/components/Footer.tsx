import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-foreground/10 mt-32"
    >
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground/70 font-medium">
          © Usman Abdella
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;