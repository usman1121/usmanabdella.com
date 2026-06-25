import { motion } from "framer-motion";
import heroShowcase from "@/assets/hero-showcase.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 py-32 max-w-7xl mx-auto">
      {/* Animated Name with layered depth effect */}
      <div className="relative mb-16">
        {/* Background layers for depth */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight select-none"
          style={{ transform: "translateY(-6px)" }}
          aria-hidden="true"
        >
          Usman Abdella
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight select-none"
          style={{ transform: "translateY(-4px)" }}
          aria-hidden="true"
        >
          Usman Abdella
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight select-none"
          style={{ transform: "translateY(-2px)" }}
          aria-hidden="true"
        >
          Usman Abdella
        </motion.span>
        
        {/* Primary text layer */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight"
        >
          Usman Abdella
        </motion.h1>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4"
      >
        Software Engineering Student.
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl"
      >
        Building real-world applications at BITS School of Science and Technology.
      </motion.p>

      {/* Featured Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-24 rounded-2xl overflow-hidden bg-secondary/50 border border-foreground/5"
      >
        <img
          src={heroShowcase}
          alt="Usman Abdella - Software Engineering projects showcase"
          className="w-full h-auto object-cover aspect-video"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;