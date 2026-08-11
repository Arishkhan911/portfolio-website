export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  sort_order: number;
  created_at: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  read: boolean;
  created_at: string;
}

export type ProjectInput = Omit<Project, 'id' | 'created_at'>;
export type SkillInput = Omit<Skill, 'id' | 'created_at'>;
export type MessageInput = Omit<Message, 'id' | 'created_at' | 'read'>;
