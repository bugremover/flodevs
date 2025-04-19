export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  links: UserLink[];
  skills: Skill[];
  following: number;
  followers: number;
}

export interface UserLink {
  id: string;
  platform: string;
  url: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  attachments?: string[];
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  tags: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  collaborators: User[];
  createdAt: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  children: MindMapNode[];
  type: 'task' | 'idea' | 'project' | 'note';
  color?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  potentialRoles: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'course' | 'book' | 'video';
  url: string;
  rating: number;
}