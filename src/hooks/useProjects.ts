import { useEffect, useState } from "react";
import type { Project, ProjectsData } from "@/data/projects";

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export const useProjects = (): UseProjectsResult => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch("/projects.json", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Failed to load projects (${res.status})`);
        }
        const data: ProjectsData = await res.json();
        if (!cancelled) {
          setProjects(data.projects || []);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load projects");
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, error };
};
