import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/features/ServiceDetail";
import { getServiceBySlug } from "@/lib/api/services";

export default async function ProjectManagementServicePage() {
    const service = await getServiceBySlug("project-management");

    if (!service) {
        notFound();
    }

    return <ServiceDetailContent service={service} />;
}
