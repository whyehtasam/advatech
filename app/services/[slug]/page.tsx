import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/features/ServiceDetail";
import { getServiceBySlug } from "@/lib/api/services";
import { Service } from "@/data/types";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}

