import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudySection {
  heading?: string;
  content: React.ReactNode;
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  team?: string;
  sections: CaseStudySection[];
  externalLink?: string;
  images: string[];
  year: string;
}

const CaseStudy = ({ 
  title, 
  subtitle, 
  role,
  timeline,
  team,
  sections,
  externalLink, 
  images, 
  year 
}: CaseStudyProps) => {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 border-r border-border p-6 lg:p-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <div>
            <Link to="/" className="name-display block hover:opacity-80 transition-opacity">
              Maya<br />Chen
            </Link>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.aside>

        {/* Main Content */}
        <div className="lg:col-span-10">
          <article className="p-6 lg:p-12 py-12 lg:py-20">
            {/* Header */}
            <div className="max-w-3xl mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-baseline gap-4 mb-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-none font-display">
                  {title}
                </h1>
                <span className="text-sm text-muted-foreground">{year}</span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed mb-12"
              >
                {subtitle}
              </motion.p>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-t border-b border-border py-8"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                  <p className="text-foreground">{role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                  <p className="text-foreground">{timeline}</p>
                </div>
                {team && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                    <p className="text-foreground">{team}</p>
                  </div>
                )}
              </motion.div>
              
              {externalLink && (
                <motion.a
                  href={`https://${externalLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity border-b border-foreground pb-1"
                >
                  Visit {externalLink}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              )}
            </div>

            {/* Hero Image */}
            {images[0] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-20 -mx-6 lg:-mx-12"
              >
                <img
                  src={images[0]}
                  alt={`${title} hero`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}
            
            {/* Content Sections */}
            <div className="max-w-3xl">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                      {section.heading}
                    </h2>
                  )}
                  <div className="body-text space-y-4">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Images */}
            {images.length > 1 && (
              <div className="space-y-8 mt-20 -mx-6 lg:-mx-12">
                {images.slice(1).map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`${title} project screenshot ${index + 2}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </article>
          
          {/* Footer */}
          <footer className="border-t border-border p-6 lg:p-12 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© Maya Chen</p>
            <p className="text-sm text-muted-foreground">Made in California</p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default CaseStudy;
