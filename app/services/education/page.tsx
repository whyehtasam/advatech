import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/features/ServiceDetail";
import { getServiceBySlug } from "@/lib/api/services";

export default async function EducationServicePage() {
    const service = await getServiceBySlug("education");

    if (!service) {
        notFound();
    }

    return <ServiceDetailContent service={service} />;
}
