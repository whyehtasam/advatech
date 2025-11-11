import { notFound } from "next/navigation";
import { CourseDetailContent } from "@/components/features/CourseDetail";
import { getCourseBySlug } from "@/lib/api/courses";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailContent course={course} />;
}
