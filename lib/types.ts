import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface ProjectTech {
  name: string;
  icon: IconType;
  color: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: ProjectTech[];
  links: ProjectLink[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  duration: string;
  logo: string;
  logoAlt: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
  logoAlt: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
}

export interface Award {
  id: string;
  title: string;
  event: string;
  organizer: string;
}
