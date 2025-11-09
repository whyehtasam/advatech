import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Residential Complex Design",
    description: "Complete BIM model and documentation for a 50-story residential complex including MEP coordination.",
    shortDescription: "50-story residential complex with full BIM implementation",
    thumbnail: "/images/projects/residential.jpg",
    images: ["/images/projects/residential-1.jpg", "/images/projects/residential-2.jpg"],
    type: "industry",
    techStack: ["Revit", "Navisworks", "AutoCAD", "BIM 360"],
    year: 2024,
    team: [
      { name: "Rajesh Kumar", role: "BIM Manager" },
      { name: "Priya Sharma", role: "Architect" },
      { name: "Amit Patel", role: "MEP Coordinator" },
    ],
    outcomes: [
      "Reduced construction time by 15%",
      "Identified 200+ clashes before construction",
      "Improved collaboration across teams",
    ],
  },
  {
    id: "2",
    title: "Commercial Office Building",
    description: "3D modeling and visualization for a LEED-certified commercial building project.",
    shortDescription: "LEED-certified commercial building with advanced BIM workflows",
    thumbnail: "/images/projects/commercial.jpg",
    type: "industry",
    techStack: ["Revit", "Enscape", "Dynamo", "AutoCAD"],
    year: 2024,
    team: [
      { name: "Sneha Mehta", role: "Project Lead" },
      { name: "Vikram Singh", role: "BIM Specialist" },
    ],
    outcomes: [
      "Achieved LEED Gold certification",
      "Optimized energy efficiency by 25%",
      "Streamlined documentation process",
    ],
  },
  {
    id: "3",
    title: "Hospital Design Project",
    description: "Complete hospital design with MEP systems, medical equipment coordination, and facility management integration.",
    shortDescription: "Comprehensive hospital design with MEP coordination",
    thumbnail: "/images/projects/hospital.jpg",
    type: "capstone",
    techStack: ["Revit", "Navisworks", "FMS", "AutoCAD"],
    year: 2023,
    team: [
      { name: "Anjali Desai", role: "Lead Architect" },
      { name: "Rohit Verma", role: "MEP Engineer" },
      { name: "Kavita Nair", role: "BIM Coordinator" },
    ],
    outcomes: [
      "Zero clash in final model",
      "Reduced rework by 30%",
      "Improved facility management efficiency",
    ],
  },
];

