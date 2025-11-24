import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/features/ServiceDetail";
import { getServiceBySlug } from "@/lib/api/services";

export default async function TrainingServicePage() {
    const service = await getServiceBySlug("training");

    if (!service) {
        notFound();
    }

    return <ServiceDetailContent service={service} />;
}
