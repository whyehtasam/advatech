import { Service } from "@/data/types";
import { services } from "@/data/services";

export async function getServices(): Promise<Service[]> {
  // TODO: Replace with actual API call
  return Promise.resolve(services);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // TODO: Replace with actual API call
  const service = services.find((s) => s.slug === slug);
  return Promise.resolve(service || null);
}

