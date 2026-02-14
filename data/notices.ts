export interface NoticeItem {
  id: string;
  title: string;
  description: string;
  category: "admissions" | "placements" | "courses" | "general";
  date: string;
  link: string;
}

export const notices: NoticeItem[] = [
  {
    id: "1",
    title: "Admission Open for Revit Architecture Training - Batch 15",
    description: "Admissions are now open for our comprehensive Revit Architecture Training program. Limited seats available.",
    category: "admissions",
    date: "2026-03-01",
    link: "/notices/1",
  },
  {
    id: "2",
    title: "Placement Drive - March 2026",
    description: "Exclusive placement drive for our students. Top companies are hiring BIM and CAD professionals.",
    category: "placements",
    date: "2026-02-28",
    link: "/notices/2",
  },
  {
    id: "3",
    title: "New Course: BIM Project Management",
    description: "We're excited to announce our new BIM Project Management course. Enroll now!",
    category: "courses",
    date: "2026-02-25",
    link: "/notices/3",
  },
  {
    id: "4",
    title: "Scholarship Program 2026",
    description: "Apply for our scholarship program. Financial assistance available for deserving students.",
    category: "admissions",
    date: "2026-02-20",
    link: "/notices/4",
  },
];

/** Latest notices for the floating dock (same order as /notices: newest first), limit 5 */
export function getLatestNotices(limit = 5): NoticeItem[] {
  return [...notices]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export const categories = ["all", "admissions", "placements", "courses"] as const;
