import { LucideIcon } from "lucide-react";
import {
  Terminal,
  Database,
  Layout,
  Server,
  Shield,
  Brain,
} from "lucide-react";

export interface Skill {
  category: string;
  icon: LucideIcon;
  skills: {
    name: string;
    level: number;
    experience: string;
  }[];
}

export const skillsData: Skill[] = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "React/Next.js", level: 74, experience: "2 Años" },
      { name: "TypeScript", level: 88, experience: "1 Año" },
      { name: "Tailwind/Chakra UI", level: 55, experience: "2 Años" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 92, experience: "2 Años" },
      { name: "Python", level: 75, experience: "1 Año" },
      { name: "GraphQL", level: 40, experience: "1 Año" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 63, experience: "2 Años" },
      { name: "MongoDB", level: 88, experience: "2 Años" },
      { name: "MySQL", level: 82, experience: "1 Año" },
    ],
  },
  {
    category: "DevOps",
    icon: Terminal,
    skills: [
      { name: "Docker", level: 55, experience: "2 Años" },
      { name: "AWS", level: 60, experience: "1 Año" },
      { name: "CI/CD", level: 72, experience: "1 Año" },
    ],
  },
  {
    category: "Security",
    icon: Shield,
    skills: [
      { name: "Auth0/JWT", level: 90, experience: "2 Años" },
      { name: "Web Security", level: 85, experience: "2 Años" },
      { name: "Encryption", level: 62, experience: "2 Años" },
    ],
  },
  {
    category: "Tools and Others",
    icon: Brain,
    skills: [
      { name: "Git", level: 89, experience: "2 Años" },
      { name: "Insomnia/Postman", level: 81, experience: "2 Años" },
      { name: "Jira", level: 62, experience: "1 Año" },
    ],
  },
];
