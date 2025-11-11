export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  type: "project" | "event" | "training" | "placement" | "general";
  thumbnail: string;
  fullSize: string;
  description?: string;
  date?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Revit Architecture Training Session",
    category: "Training",
    type: "training",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=90",
    description: "Students learning Revit Architecture in our training center",
    date: "2024-12-01",
  },
  {
    id: "2",
    title: "BIM Project Collaboration",
    category: "Project",
    type: "project",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=90",
    description: "Team collaboration on BIM project",
    date: "2024-11-15",
  },
  {
    id: "3",
    title: "Placement Drive 2024",
    category: "Placement",
    type: "placement",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop&q=90",
    description: "Annual placement drive with top companies",
    date: "2024-11-20",
  },
  {
    id: "4",
    title: "AutoCAD Workshop",
    category: "Training",
    type: "training",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&q=90",
    description: "Hands-on AutoCAD workshop session",
    date: "2024-11-10",
  },
  {
    id: "5",
    title: "Residential Complex Design",
    category: "Project",
    type: "project",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=90",
    description: "50-story residential complex BIM model",
    date: "2024-10-25",
  },
  {
    id: "6",
    title: "Student Success Celebration",
    category: "Placement",
    type: "placement",
    thumbnail: "https://images.unsplash.com/photo-1758270703648-1559ddc68a22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
    fullSize: "https://images.unsplash.com/photo-1758270703648-1559ddc68a22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=90&w=1200&h=800",
    description: "Celebrating student achievements and placements",
    date: "2024-11-05",
  },
  {
    id: "7",
    title: "BIM Workflows Workshop",
    category: "Training",
    type: "training",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=90",
    description: "Advanced BIM workflows training session",
    date: "2024-10-30",
  },
  {
    id: "8",
    title: "Commercial Office Building",
    category: "Project",
    type: "project",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop&q=90",
    description: "LEED-certified commercial building project",
    date: "2024-10-15",
  },
  {
    id: "9",
    title: "Industry Expert Session",
    category: "Event",
    type: "event",
    thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop&q=90",
    description: "Guest lecture from industry expert",
    date: "2024-11-12",
  },
  {
    id: "10",
    title: "CAD Training Lab",
    category: "Training",
    type: "training",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&q=90",
    description: "State-of-the-art CAD training laboratory",
    date: "2024-11-08",
  },
  {
    id: "11",
    title: "Hospital Design Project",
    category: "Project",
    type: "project",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop&q=90",
    description: "Comprehensive hospital design with MEP coordination",
    date: "2024-10-20",
  },
  {
    id: "12",
    title: "Placement Success Stories",
    category: "Placement",
    type: "placement",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&q=80",
    fullSize: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop&q=90",
    description: "Our successful placement stories",
    date: "2024-11-18",
  },
];

