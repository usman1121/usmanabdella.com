import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Lock, Plus, Trash2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project, ProjectSection, ProjectsData } from "@/data/projects";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "";
const AUTH_KEY = "admin_authed";

const emptyProject = (): Project => ({
  slug: "",
  title: "",
  year: "",
  role: "",
  timeline: "",
  team: "",
  summary: "",
  externalLink: "",
  githubLink: "",
  tech: [],
  images: [],
  sections: [],
});

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [savedMessage, setSavedMessage] = useState("");
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === "true",
  );
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [draft, setDraft] = useState<Project>(emptyProject());

  useEffect(() => {
    if (!authed) return;
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}projects.json`);
        const data: ProjectsData = await res.json();
        setProjects(data.projects || []);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ADMIN_PASSWORD) {
      setPasswordError("Set VITE_ADMIN_PASSWORD in a .env file to enable admin access.");
      return;
    }
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setAuthed(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPassword("");
  };

  const openNew = () => {
    setDraft(emptyProject());
    setEditingIndex(null);
    setDialogOpen(true);
  };

  const openEdit = (index: number) => {
    setDraft(JSON.parse(JSON.stringify(projects[index])) as Project);
    setEditingIndex(index);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingIndex(null);
  };

  const updateDraft = (patch: Partial<Project>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  };

  const updateSection = (
    sectionIndex: number,
    patch: Partial<ProjectSection>,
  ) => {
    setDraft((prev) => ({
      ...prev,
      sections: prev.sections.map((s, j) =>
        j === sectionIndex ? { ...s, ...patch } : s,
      ),
    }));
  };

  const addSection = () => {
    setDraft((prev) => ({
      ...prev,
      sections: [...prev.sections, { heading: "", paragraphs: [] }],
    }));
  };

  const removeSection = (sectionIndex: number) => {
    setDraft((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, j) => j !== sectionIndex),
    }));
  };

  const updateParagraphs = (sectionIndex: number, value: string) => {
    const paragraphs = value.split("\n").filter((p) => p.trim() !== "");
    updateSection(sectionIndex, { paragraphs });
  };

  const saveProject = () => {
    setProjects((prev) => {
      if (editingIndex === null) {
        return [...prev, draft];
      }
      return prev.map((p, i) => (i === editingIndex ? draft : p));
    });
    closeDialog();
  };

  const removeProject = (index: number) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  const downloadJson = () => {
    const data: ProjectsData = { projects };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.json";
    a.click();
    URL.revokeObjectURL(url);
    setSavedMessage("Downloaded! Replace public/projects.json with this file, then commit & push.");
  };

  if (!authed) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm border border-border rounded-lg p-8 space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-xl font-display text-foreground">Admin Access</h1>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
            />
          </div>
          {passwordError && (
            <p className="text-sm text-destructive">{passwordError}</p>
          )}
          <Button type="submit" className="w-full">
            Unlock
          </Button>
          <Link
            to="/"
            className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </form>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-display text-foreground">Projects Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
            <Button variant="outline" onClick={downloadJson}>
              <Download className="w-4 h-4" />
              Download JSON
            </Button>
            <Button onClick={openNew}>
              <Plus className="w-4 h-4" />
              New Project
            </Button>
          </div>
        </div>

        {savedMessage && (
          <p className="text-sm text-muted-foreground mb-6 bg-muted border border-border rounded-md p-3">
            {savedMessage}
          </p>
        )}

        <div className="border border-border rounded-lg divide-y divide-border">
          {projects.length === 0 && (
            <p className="p-6 text-sm text-muted-foreground">No projects yet. Click "New Project" to add one.</p>
          )}
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <button
                onClick={() => openEdit(index)}
                className="flex-1 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">{project.title || "Untitled project"}</span>
                  <span className="text-xs text-muted-foreground">/{project.slug || "no-slug"}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeProject(index)}
                aria-label="Delete project"
                className="ml-4"
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>{editingIndex === null ? "New Project" : "Edit Project"}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pr-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={draft.title}
                  onChange={(e) => updateDraft({ title: e.target.value })}
                  placeholder="My Project"
                />
              </div>
              <div>
                <Label>Slug</Label>
                <Input
                  value={draft.slug}
                  onChange={(e) => updateDraft({ slug: e.target.value })}
                  placeholder="my-project"
                />
              </div>
              <div>
                <Label>Year</Label>
                <Input
                  value={draft.year}
                  onChange={(e) => updateDraft({ year: e.target.value })}
                  placeholder="2026"
                />
              </div>
              <div>
                <Label>Role</Label>
                <Input
                  value={draft.role}
                  onChange={(e) => updateDraft({ role: e.target.value })}
                  placeholder="Full-stack Developer"
                />
              </div>
              <div>
                <Label>Timeline</Label>
                <Input
                  value={draft.timeline}
                  onChange={(e) => updateDraft({ timeline: e.target.value })}
                  placeholder="2026"
                />
              </div>
              <div>
                <Label>Team</Label>
                <Input
                  value={draft.team || ""}
                  onChange={(e) => updateDraft({ team: e.target.value })}
                  placeholder="Solo"
                />
              </div>
              <div>
                <Label>External Link (e.g. www.site.com)</Label>
                <Input
                  value={draft.externalLink || ""}
                  onChange={(e) => updateDraft({ externalLink: e.target.value })}
                  placeholder="www.example.com"
                />
              </div>
              <div>
                <Label>GitHub Link</Label>
                <Input
                  value={draft.githubLink || ""}
                  onChange={(e) => updateDraft({ githubLink: e.target.value })}
                  placeholder="https://github.com/..."
                />
              </div>
            </div>

            <div>
              <Label>Summary</Label>
              <Textarea
                value={draft.summary}
                onChange={(e) => updateDraft({ summary: e.target.value })}
                placeholder="One-line summary shown on the detail page."
              />
            </div>

            <div>
              <Label>Tech Stack (comma separated)</Label>
              <Input
                value={draft.tech.join(", ")}
                onChange={(e) =>
                  updateDraft({
                    tech: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                  })
                }
                placeholder="React, TypeScript, Node.js"
              />
            </div>

            <div>
              <Label>Images (URLs, one per line)</Label>
              <Textarea
                value={draft.images.join("\n")}
                onChange={(e) =>
                  updateDraft({
                    images: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
                  })
                }
                placeholder="/assets/screenshot-1.png"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Sections</Label>
                <Button variant="outline" size="sm" onClick={addSection}>
                  <Plus className="w-4 h-4" />
                  Add Section
                </Button>
              </div>
              {draft.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border border-border rounded-md p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Input
                      value={section.heading || ""}
                      onChange={(e) => updateSection(sectionIndex, { heading: e.target.value })}
                      placeholder="Section heading (e.g. The Challenge)"
                      className="max-w-md"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSection(sectionIndex)}
                      aria-label="Remove section"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                  <Textarea
                    value={section.paragraphs.join("\n")}
                    onChange={(e) => updateParagraphs(sectionIndex, e.target.value)}
                    placeholder={"One paragraph per line.\n\nEach line becomes a <p> block."}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <Button variant="outline" onClick={closeDialog}>
              Cancel
            </Button>
            <Button onClick={saveProject}>
              Save Project
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Admin;
