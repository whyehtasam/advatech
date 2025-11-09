import { Course } from "@/data/types";
import { courses } from "@/data/courses";

// API integration points for courses
// Replace mock data with actual API calls when backend is ready

export async function getCourses(): Promise<Course[]> {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/courses');
  // return response.json();
  return Promise.resolve(courses);
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/courses/${slug}`);
  // return response.json();
  const course = courses.find((c) => c.slug === slug);
  return Promise.resolve(course || null);
}

export async function searchCourses(query: string): Promise<Course[]> {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/courses/search?q=${query}`);
  // return response.json();
  const lowerQuery = query.toLowerCase();
  return Promise.resolve(
    courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lowerQuery) ||
        course.description.toLowerCase().includes(lowerQuery) ||
        course.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  );
}

export async function filterCourses(filters: {
  category?: string;
  mode?: string;
  level?: string;
  minFee?: number;
  maxFee?: number;
}): Promise<Course[]> {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/courses/filter', {
  //   method: 'POST',
  //   body: JSON.stringify(filters),
  // });
  // return response.json();
  return Promise.resolve(
    courses.filter((course) => {
      if (filters.category && course.category !== filters.category) return false;
      if (filters.mode && course.mode !== filters.mode) return false;
      if (filters.level && course.level !== filters.level) return false;
      if (filters.minFee && course.fee < filters.minFee) return false;
      if (filters.maxFee && course.fee > filters.maxFee) return false;
      return true;
    })
  );
}

