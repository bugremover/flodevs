import api from '../utils/api';

interface MindMapNode {
  id: string;
  content: string;
  x: number;
  y: number;
}

interface MindMapConnection {
  from: string;
  to: string;
}

interface MindMap {
  id: string;
  title: string;
  description: string;
  nodes: MindMapNode[];
  connections: MindMapConnection[];
  isPublic: boolean;
  author: string;
}

export const mindmapService = {
  async getAll() {
    const response = await api.get<MindMap[]>('/mindmap');
    return response.data;
  },

  async getById(id: string) {
    const response = await api.get<MindMap>(`/mindmap/${id}`);
    return response.data;
  },

  async create(data: Omit<MindMap, 'id' | 'author'>) {
    const response = await api.post<MindMap>('/mindmap', data);
    return response.data;
  },

  async update(id: string, data: Partial<MindMap>) {
    const response = await api.put<MindMap>(`/mindmap/${id}`, data);
    return response.data;
  },

  async delete(id: string) {
    await api.delete(`/mindmap/${id}`);
  }
}; 