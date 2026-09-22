import { motion } from "framer-motion";
import { ArrowUpRight, Download, FileText, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProjects } from "@/hooks/useProjects";

const ResumeViewer = lazy(() => import("@/components/ResumeViewer"));

const Index = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { projects, loading } = useProjects();

  return (
    <main className="min-h-screen w-full bg-background text-foreground relative z-10">
      <div className="grid-layout">
        {/* Left Sidebar - Name and Navigation */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid-sidebar flex flex-col justify-between"
        >
          <div>
            <Link to="/" className="name-display block hover:opacity-80 transition-opacity">
              Usman<br />Abdella
            </Link>
            <p className="text-xs text-muted-foreground/70 font-mono tracking-wide -mt-6 mb-8">
              Full-Stack Engineer
            </p>
          </div>
          
          <nav className="flex flex-col gap-3 mb-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid-main flex flex-col"
        >
          {/* Hero Text */}
          <section id="about" className="mb-16 pt-8 lg:pt-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for projects & engineering roles
            </div>
            <p className="body-text max-w-xl">
              Software engineer crafting thoughtful, high-leverage digital systems. Co-founder of Afro Digital Innovation Labs, transforming operational bottlenecks into reliable, human-centered products.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <a href="#about-full" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                My Story & Approach <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Featured Work <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="flex-1">
            <h2 className="section-header">Selected Work</h2>
            
            <div className="space-y-4">
              {loading && (
                <p className="text-sm text-muted-foreground">Loading projects...</p>
              )}
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="work-item group block p-4 -mx-4 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-200"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="work-item-title group-hover:text-foreground">
                        {project.title}
                        <ArrowUpRight className="work-item-arrow opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </span>
                      <span className="work-item-year font-mono text-xs">{project.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-muted-foreground/80 bg-white/[0.03] border border-white/10 rounded px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="text-[11px] font-mono text-muted-foreground/50 self-center px-1">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Right Section - Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid-secondary flex flex-col justify-between"
          id="contact"
        >
          <div className="pt-8 lg:pt-16">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-3 block">Get in touch</span>
            <h2 className="contact-heading mb-4">
              Let's create something meaningful.
            </h2>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed mb-6">
              Whether you have an upcoming project, a challenging architecture to build, or want to discuss full-stack engineering, I'm always open to talking.
            </p>
            <a
              href="mailto:usmanabdella1121@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors font-mono border-b border-foreground/40 pb-1"
            >
              usmanabdella1121@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-8 pb-8 pt-12">
            {/* Large Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-end"
            >
              <a 
                href="mailto:usmanabdella1121@gmail.com" 
                className="group"
                aria-label="Send email"
              >
                <ArrowUpRight className="arrow-large group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About Section - Full */}
      <section id="about-full" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 p-6 lg:p-8"></div>
          <div className="lg:col-span-10 p-6 lg:p-8 py-16 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="section-header">About & Approach</h2>
              <div className="space-y-6">
                <p className="body-text">
                  I'm Usman Abdella, a Software Engineering student at BITS School of Science and Technology and co-founder of Afro Digital Innovation Labs.
                </p>
                <p className="body-text">
                  I care about engineering software that bridges the gap between intricate business logic and intuitive, friction-free experiences. Rather than building software as an abstract exercise, I tackle real operational pain points—from unifying school administration for hundreds of students and teachers to coordinating essential disability care resources for families.
                </p>
                <p className="body-text">
                  My primary technical stack centers around full-stack TypeScript, Next.js, NestJS, PostgreSQL, and distributed job queues with Redis and BullMQ. I take pride in crafting clean database schemas, predictable API contracts, and performant user interfaces.
                </p>
                <p className="body-text italic text-muted-foreground border-l-2 border-border pl-4">
                  "Software should bring order and clarity to complexity, not add to it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 p-6 lg:p-8"></div>
          <div className="lg:col-span-10 p-6 lg:p-8 py-16 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="section-header">Education & Foundation</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-lg font-normal text-foreground">Bachelor of Engineering (B.E.) in Software Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1 font-mono">BITS School of Science and Technology · 2024 – 2030</p>
                  <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                    Engineering core covering algorithms, data structures, relational database systems, software design patterns, and distributed systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-r border-border p-6 lg:p-8">
            <p className="text-sm text-muted-foreground">© Usman Abdella</p>
          </div>
          <div className="lg:col-span-10 p-6 lg:p-8 flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <a href="mailto:usmanabdella1121@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
              <a href="https://github.com/usman1121" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
                <DialogTrigger asChild>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 cursor-pointer">
                    Resume
                    <FileText className="w-4 h-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[85vh] flex flex-col p-0">
                  <DialogHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between space-y-0">
                    <DialogTitle className="text-base font-normal">Resume</DialogTitle>
                    <a
                      href={`${import.meta.env.BASE_URL}Usman_Resume.pdf`}
                      download="Usman_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mr-6"
                    >
                      Download PDF
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </DialogHeader>
                  <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
                    <Suspense
                      fallback={
                        <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
                          Loading resume...
                        </div>
                      }
                    >
                      <ResumeViewer />
                    </Suspense>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <a href="https://t.me/us8349" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              Telegram
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;