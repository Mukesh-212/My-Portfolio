export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

export interface Experience {
  organization: string;
  role: string;
  duration: string;
  description: string;
}

export interface Certification {
  name: string;
  organization: string;
  year: string;
  credential?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExploringArea {
  title: string;
  description: string;
  topics: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  status: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
}
