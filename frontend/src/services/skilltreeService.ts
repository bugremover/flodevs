import api from '../utils/api';

interface SkillTreeNode {
  id: string;
  content: string;
  level: number;
}

interface SkillTreeConnection {
  from: string;
  to: string;
}

interface SkillTree {
  id: string;
  title: string;
  description: string;
  category: string;
  nodes: SkillTreeNode[];
  connections: SkillTreeConnection[];
  isPublic: boolean;
  author: string;
}

export const skilltreeService = {
  async getAll() {
    const response = await api.get<SkillTree[]>('/skilltree');
    return response.data;
  },

  async getById(id: string) {
    const response = await api.get<SkillTree>(`/skilltree/${id}`);
    return response.data;
  },

  async create(data: Omit<SkillTree, 'id' | 'author'>) {
    const response = await api.post<SkillTree>('/skilltree', data);
    return response.data;
  },

  async update(id: string, data: Partial<SkillTree>) {
    const response = await api.put<SkillTree>(`/skilltree/${id}`, data);
    return response.data;
  },

  async delete(id: string) {
    await api.delete(`/skilltree/${id}`);
  }
}; 