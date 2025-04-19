import api from '../utils/api';

interface ContributionStats {
  mindmaps: number;
  skilltrees: number;
  total: number;
}

interface Contribution {
  id: string;
  type: 'mindmap' | 'skilltree';
  title: string;
  description: string;
  isPublic: boolean;
  createdAt: string;
}

export const contributeService = {
  async getContributions() {
    const response = await api.get<Contribution[]>('/contribute');
    return response.data;
  },

  async getStats() {
    const response = await api.get<ContributionStats>('/contribute/stats');
    return response.data;
  },

  async updateVisibility(type: 'mindmap' | 'skilltree', id: string, isPublic: boolean) {
    const response = await api.put(`/contribute/visibility`, { type, id, isPublic });
    return response.data;
  },

  async deleteContribution(type: 'mindmap' | 'skilltree', id: string) {
    await api.delete(`/contribute/${type}/${id}`);
  }
}; 