import { Service } from "./types";

export const services: Service[] = [
  {
    id: "1",
    slug: "training",
    title: "Professional Training",
    description: "Comprehensive training programs in Architecture, CAD, BIM, and related technologies. Industry-aligned curriculum with hands-on projects and expert instructors.",
    shortDescription: "Industry-aligned training programs with hands-on projects",
    icon: "GraduationCap",
    image: "/images/services/training.jpg",
    benefits: [
      "Industry-expert instructors",
      "Hands-on project-based learning",
      "Placement assistance",
      "Flexible schedules",
      "Certification programs",
    ],
    stats: [
      { label: "Students Trained", value: "5000+" },
      { label: "Avg Package", value: "₹3.6L" },
      { label: "Placement Rate", value: "85%" },
    ],
    links: [
      { label: "View Courses", href: "/courses" },
      { label: "Corporate Training", href: "/services/training#corporate" },
      { label: "Upcoming Batches", href: "/events" },
    ],
  },
  {
    id: "2",
    slug: "recruitment",
    title: "Recruitment Services",
    description: "Connect top talent with leading companies. We help employers find skilled professionals and assist candidates in landing their dream jobs.",
    shortDescription: "Connect top talent with leading companies",
    icon: "Users",
    image: "/images/services/recruitment.jpg",
    benefits: [
      "Verified candidate profiles",
      "Industry-specific matching",
      "Quick turnaround time",
      "Post-placement support",
      "Competitive packages",
    ],
    stats: [
      { label: "Companies", value: "200+" },
      { label: "Placements", value: "1500+" },
      { label: "Success Rate", value: "90%" },
    ],
    links: [
      { label: "Post a Job", href: "/services/recruitment#post-job" },
      { label: "View Jobs", href: "/jobs" },
      { label: "For Employers", href: "/services/recruitment#employers" },
    ],
  },
  {
    id: "3",
    slug: "education",
    title: "Education & College Tie-ups",
    description: "Partnership programs with colleges and universities to provide industry-relevant training and certification programs.",
    shortDescription: "Partnership programs with educational institutions",
    icon: "School",
    image: "/images/services/education.jpg",
    benefits: [
      "Industry-aligned curriculum",
      "Certification programs",
      "Guest lectures",
      "Internship opportunities",
      "Placement support",
    ],
    stats: [
      { label: "Partner Colleges", value: "50+" },
      { label: "Students", value: "10000+" },
      { label: "Programs", value: "20+" },
    ],
    links: [
      { label: "View Partners", href: "/services/education#partners" },
      { label: "Become a Partner", href: "/contact" },
    ],
  },
  {
    id: "4",
    slug: "project-management",
    title: "Project Management",
    description: "End-to-end project management services for construction and architecture projects. From planning to execution, we ensure successful project delivery.",
    shortDescription: "End-to-end project management for construction projects",
    icon: "Briefcase",
    image: "/images/services/projects.jpg",
    benefits: [
      "Experienced project managers",
      "Timely delivery",
      "Quality assurance",
      "Cost optimization",
      "Risk management",
    ],
    stats: [
      { label: "Projects Completed", value: "100+" },
      { label: "Client Satisfaction", value: "95%" },
      { label: "On-time Delivery", value: "98%" },
    ],
    links: [
      { label: "View Portfolio", href: "/projects" },
      { label: "Request Quote", href: "/contact" },
    ],
  },
];

