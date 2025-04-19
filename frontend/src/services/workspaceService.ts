import api from '../utils/api';

interface WorkspaceSettings {
  theme: string;
  layout: string;
  notifications: boolean;
}

interface WorkspaceLayout {
  sidebar: boolean;
  sidebarWidth: number;
  header: boolean;
  footer: boolean;
}

export const workspaceService = {
  async getSettings() {
    const response = await api.get<WorkspaceSettings>('/workspace/settings');
    return response.data;
  },

  async updateSettings(data: Partial<WorkspaceSettings>) {
    const response = await api.put<WorkspaceSettings>('/workspace/settings', data);
    return response.data;
  },

  async getLayout() {
    const response = await api.get<WorkspaceLayout>('/workspace/layout');
    return response.data;
  },

  async updateLayout(data: Partial<WorkspaceLayout>) {
    const response = await api.put<WorkspaceLayout>('/workspace/layout', data);
    return response.data;
  }
}; 