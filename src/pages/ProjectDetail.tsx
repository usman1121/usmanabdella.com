import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { projects, loading, error } = useProjects();
  const project = projects.find((p) => p.slug === slug);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading project...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">{error}</p>
      </main>
    );
  }

  if (!project) {
    return <NotFound />;
  }

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
              Usman<br />Abdella
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
                  {project.title}
                </h1>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed mb-12"
              >
                {project.summary}
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
                  <p className="text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                  <p className="text-foreground">{project.timeline}</p>
                </div>
                {project.team && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                    <p className="text-foreground">{project.team}</p>
                  </div>
                )}
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-2 mb-12"
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-6">
                {project.externalLink && (
                  <motion.a
                    href={`https://${project.externalLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity border-b border-foreground pb-1"
                  >
                    Visit {project.externalLink}
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                )}
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity border-b border-foreground pb-1"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Hero Image */}
            {project.images[0] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-20 -mx-6 lg:-mx-12"
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} hero`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}
            
            {/* Content Sections */}
            <div className="max-w-3xl">
              {project.sections.map((section, index) => (
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
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Images */}
            {project.images.length > 1 && (
              <div className="space-y-8 mt-20 -mx-6 lg:-mx-12">
                {project.images.slice(1).map((src, index) => (
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
                      alt={`${project.title} project screenshot ${index + 2}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </article>
          
          {/* Footer */}
          <footer className="border-t border-border p-6 lg:p-12 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© Usman Abdella</p>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
