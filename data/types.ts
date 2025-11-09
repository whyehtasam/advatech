// TypeScript interfaces for all data types

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  duration: string;
  mode: "Online" | "Offline" | "Hybrid";
  level: "Beginner" | "Intermediate" | "Advanced";
  fee: number;
  originalFee?: number;
  rating: number;
  totalReviews: number;
  nextBatch: string;
  seats: number;
  category: string;
  tags: string[];
  curriculum: Module[];
  trainers: Trainer[];
  projects: Project[];
  placements: Placement[];
  faqs: FAQ[];
  reviews: Review[];
  stats: {
    studentsEnrolled: number;
    avgPackage: number;
    placementRate: number;
  };
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  hasProject: boolean;
  progress?: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "assignment";
  videoUrl?: string;
  thumbnail?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  expertise: string[];
  rating: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: string;
  benefits: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  links: {
    label: string;
    href: string;
  }[];
}

export interface Placement {
  id: string;
  studentName: string; // Anonymized
  course: string;
  company: string;
  companyLogo?: string;
  role: string;
  package: number;
  packageBreakdown?: {
    gross: number;
    ctc: number;
    components: string[];
  };
  year: number;
  testimonial?: string;
  project?: string;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images?: string[];
  video?: string;
  type: "capstone" | "industry" | "academic";
  techStack: string[];
  year: number;
  team: {
    name: string;
    role: string;
  }[];
  outcomes: string[];
  caseStudy?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course?: string;
  company?: string;
  photo?: string;
  video?: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  type: "batch" | "workshop" | "webinar" | "event";
  category: string;
  image?: string;
  registrationLink?: string;
  seats?: number;
  registered?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful?: number;
}

export interface Notice {
  id: string;
  title: string;
  description: string;
  category: "admissions" | "placements" | "courses" | "general";
  date: string;
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
  important: boolean;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

export interface RegistrationFormData {
  userType: "student" | "company" | "employer";
  basicInfo: {
    name: string;
    phone: string;
    email: string;
  };
  purpose: {
    interests: string[];
    courseId?: string;
    jobId?: string;
  };
  details: {
    education?: string;
    resume?: File;
    city: string;
    preferredStartDate?: string;
  };
  consent: {
    terms: boolean;
    privacy: boolean;
    marketing?: boolean;
  };
}

