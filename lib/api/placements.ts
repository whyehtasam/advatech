import { Placement } from "@/data/types";
import { placements } from "@/data/placements";

export async function getPlacements(filters?: {
  year?: number;
  course?: string;
  minPackage?: number;
  maxPackage?: number;
  role?: string;
}): Promise<Placement[]> {
  // TODO: Replace with actual API call
  let filtered = placements;
  if (filters) {
    if (filters.year) filtered = filtered.filter((p) => p.year === filters.year);
    if (filters.course) filtered = filtered.filter((p) => p.course === filters.course);
    if (filters.minPackage) filtered = filtered.filter((p) => p.package >= filters.minPackage!);
    if (filters.maxPackage) filtered = filtered.filter((p) => p.package <= filters.maxPackage!);
    if (filters.role) filtered = filtered.filter((p) => p.role.toLowerCase().includes(filters.role!.toLowerCase()));
  }
  return Promise.resolve(filtered);
}

export async function getPlacementById(id: string): Promise<Placement | null> {
  // TODO: Replace with actual API call
  const placement = placements.find((p) => p.id === id);
  return Promise.resolve(placement || null);
}

