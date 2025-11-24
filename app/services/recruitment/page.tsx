import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/features/ServiceDetail";
import { getServiceBySlug } from "@/lib/api/services";

export default async function RecruitmentServicePage() {
    const service = await getServiceBySlug("recruitment");

    if (!service) {
        notFound();
    }

    return <ServiceDetailContent service={service} />;
}
