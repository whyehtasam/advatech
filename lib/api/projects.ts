import { Project } from "@/data/types";
import { projects } from "@/data/projects";

export async function getProjects(filters?: {
  type?: string;
  techStack?: string[];
  year?: number;
}): Promise<Project[]> {
  // TODO: Replace with actual API call
  let filtered = projects;
  if (filters) {
    if (filters.type) filtered = filtered.filter((p) => p.type === filters.type);
    if (filters.year) filtered = filtered.filter((p) => p.year === filters.year);
    if (filters.techStack && filters.techStack.length > 0) {
      filtered = filtered.filter((p) =>
        filters.techStack!.some((tech) => p.techStack.includes(tech))
      );
    }
  }
  return Promise.resolve(filtered);
}

export async function getProjectById(id: string): Promise<Project | null> {
  // TODO: Replace with actual API call
  const project = projects.find((p) => p.id === id);
  return Promise.resolve(project || null);
}

