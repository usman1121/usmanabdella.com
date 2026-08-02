import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ResumeViewer from "@/components/ResumeViewer";
import { useProjects } from "@/hooks/useProjects";

interface WorkItem {
  title: string;
  year: string;
  link?: string;
  externalLink?: string;
}

const Index = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { projects, loading } = useProjects();

  const works: WorkItem[] = projects.map((project) => ({
    title: project.title,
    year: project.year,
    link: `/projects/${project.slug}`,
    externalLink: project.externalLink
      ? `https://${project.externalLink}`
      : project.githubLink,
  }));

  return (
    <main
      className="min-h-screen w-full relative"
      style={{
        width: "100%",
        height: "100%",
        "--s": "75px",
        "--tree-color": "#228b22",
        "--ornament-color": "#ff0000",
        "--snowflake-color": "#ffffff",
        "--background-color": "#000000",
        "--_c": "var(--tree-color), var(--background-color) 1deg 79deg, var(--background-color) 81deg",
        "--g0": "conic-gradient(from 140deg at 50% 87.5%, var(--_c))",
        "--g1": "conic-gradient(from 140deg at 50% 81.25%, var(--_c))",
        "--g2": "conic-gradient(from 140deg at 50% 75%, var(--_c))",
        "--g3": "conic-gradient(at 10% 20%, #0000 75%, var(--snowflake-color) 0)",
        "--g4": "repeating-conic-gradient(from 45deg, var(--ornament-color) 0 25%, #fff 0 50%)",
        background: "var(--g0) 0 calc(var(--s) / -4), var(--g0) var(--s) calc(3 * var(--s) / 4), var(--g1), var(--g1) var(--s) var(--s), var(--g2) 0 calc(var(--s) / 4), var(--g2) var(--s) calc(5 * var(--s) / 4), var(--g3) calc(var(--s) / -10) var(--s), var(--g3) calc(9 * var(--s) / 10) calc(2 * var(--s)), var(--g4) calc(var(--s) / 2) var(--s)",
        backgroundSize: "calc(2 * var(--s)) calc(2 * var(--s))",
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
      }}
    >
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
            <p className="body-text max-w-lg">
              Building practical software for real-world problems. Full-stack developer focused on business and educational platforms.
            </p>
            <a href="#about-full" className="inline-flex items-center gap-1 mt-6 text-base text-muted-foreground hover:text-foreground transition-colors">
              About Me <ArrowUpRight className="w-4 h-4" />
            </a>
          </section>

          {/* Work Section */}
          <section id="work" className="flex-1">
            <h2 className="section-header">Work</h2>
            
            <div className="space-y-6">
              {loading && (
                <p className="text-sm text-muted-foreground">Loading projects...</p>
              )}
              {works.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {work.link && (
                    <Link to={work.link} className="work-item group">
                      <span className="work-item-title">
                        {work.title}
                        <ArrowUpRight className="work-item-arrow opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="work-item-year">{work.year}</span>
                    </Link>
                  )}
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
            <h2 className="contact-heading">
              Contact me
            </h2>
          </div>

          <div className="flex flex-col gap-8 pb-8">
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
              <h2 className="section-header">About</h2>
              <div className="space-y-6">
                <p className="body-text">
                  Software Engineering student at BITS School of Science and Technology and Co-founder of Afro Digital Innovation Labs. Passionate about building practical, scalable applications.
                </p>
                <p className="body-text">
                  I specialize in creating solutions for real-world problems, from educational platforms to business management systems.
                </p>
                <p className="body-text">
                  Currently focused on developing full-stack applications with modern technologies and best practices.
                </p>
                <p className="body-text italic text-muted-foreground">
                  Always learning, always building.
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
              <h2 className="section-header">Education</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-lg font-normal text-foreground">Bachelor of Engineering (B.E.) - Software Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">BITS School of Science and Technology · 2024-2030</p>
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
                <DialogContent className="max-w-4xl h-[85vh] flex flex-col p-0 pt-10">
                  <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
                    <ResumeViewer />
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