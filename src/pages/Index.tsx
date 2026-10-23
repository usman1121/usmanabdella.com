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
              Senior Full-Stack Engineer
            </p>
          </div>

          <nav className="flex flex-col gap-3 mb-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button
              onClick={() => setResumeOpen(true)}
              className="nav-link text-left flex items-center gap-2 cursor-pointer pt-3 border-t border-border/50 text-foreground hover:opacity-80 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume (PDF)
            </button>
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
            <p className="body-text max-w-xl">
              Senior full-stack engineer crafting resilient, high-leverage digital systems. Focused on turning complex business logic and operational bottlenecks into reliable, human-centered software.
            </p>

          </section>



          {/* Projects Section */}
          <section id="projects" className="flex-1">
            <h2 className="section-header">Selected Projects</h2>

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
                  I'm Usman Abdella, a senior full stack engineer with 4 years of experience at Afro Digital Innovation Labs (Jan 2022 – Aug 2026). Over this time, I've led and contributed to building end-to-end web applications and resilient digital infrastructure that solve tangible operational and community challenges.
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

      {/* Experience & Education Section */}
      <section id="experience-education" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 p-6 lg:p-8"></div>
          <div className="lg:col-span-10 p-6 lg:p-8 py-16 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="section-header">Work Experience & Education</h2>
              <div className="space-y-12">
                {/* Work Experience */}
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <p className="text-lg font-medium text-foreground">Afro Digital Innovation Labs</p>
                      <p className="text-sm text-muted-foreground font-mono">Jan 2022 – Aug 2026 · 4 yrs</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs font-mono text-muted-foreground/80 mt-1">
                      <span>Senior Full-Stack Engineer</span>
                      <span>Addis Ababa, Ethiopia · Full-Time</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Led full-stack engineering and system architecture across production web applications, distributed digital systems, and critical client platforms. Spearheaded core backend APIs, robust relational databases, and responsive client applications from initial requirement scoping through deployment.
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground/90 pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span><strong>End-to-End System Architecture:</strong> Architected and delivered resilient web platforms (telemedicine, school management ERP, inventory distribution) from relational schema modeling to accessible frontends.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span><strong>Distributed Job Queues:</strong> Engineered high-throughput asynchronous job processing pipelines using Redis and BullMQ for automated report generation, batch email/SMS notifications, and scheduled background tasks.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span><strong>API & Database Design:</strong> Designed normalized PostgreSQL schemas, optimized query execution, and developed predictable, type-safe RESTful APIs in NestJS with strict validation pipelines.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span><strong>Security & Payment Integrations:</strong> Built enterprise-grade authentication with role-based access control (RBAC), encrypted session handling, and seamless localized payment gateways with Chapa.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span><strong>Frontend Engineering:</strong> Built fast, mobile-first interfaces utilizing Next.js (App Router), React, TypeScript, Tailwind CSS, and Shadcn UI, maintaining sub-100ms UI response times.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-xs">▸</span>
                      <span><strong>Engineering Standards & DevOps:</strong> Orchestrated Docker containerization, Linux server administration, and Nginx reverse proxy configurations, while leading code reviews and mentoring junior engineers.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["TypeScript", "JavaScript", "Next.js", "React", "NestJS", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "Linux", "Nginx", "Chapa", "Tailwind CSS", "REST APIs"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-muted-foreground/80 bg-white/[0.03] border border-white/10 rounded px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="pt-8 border-t border-border">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-lg font-medium text-foreground">Bachelor of Engineering (B.E.) in Software Engineering</p>
                    <p className="text-sm text-muted-foreground font-mono">2024 – 2030</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 font-mono">BITS School of Science and Technology · Addis Ababa, Ethiopia</p>
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
                      href={`${import.meta.env.BASE_URL}Usman_Resume.pdf?v=20261020-senior`}
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
