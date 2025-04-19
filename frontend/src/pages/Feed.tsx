import { useEffect, useState } from 'react';
import api from '../utils/api';

interface MindMap {
  _id: string;
  title: string;
  description: string;
  nodes: any[];
  connections: any[];
  createdAt: string;
  author: {
    username: string;
    profile: {
      bio?: string;
      avatar?: string;
    };
  };
}

interface SkillTree {
  _id: string;
  title: string;
  description: string;
  category: string;
  nodes: any[];
  connections: any[];
  createdAt: string;
  author: {
    username: string;
    profile: {
      bio?: string;
      avatar?: string;
    };
  };
}

interface FeedResponse {
  mindmaps: MindMap[];
  skilltrees: SkillTree[];
}

const Feed = () => {
  const [mindmaps, setMindmaps] = useState<MindMap[]>([]);
  const [skilltrees, setSkilltrees] = useState<SkillTree[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await api.get<FeedResponse>('/feed');
        setMindmaps(response.data.mindmaps);
        setSkilltrees(response.data.skilltrees);
      } catch (error) {
        console.error('Error fetching feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Public Feed</h1>
      
      <div className="space-y-8">
        {/* Mind Maps Section */}
        <section>
          <h2 className="text-xl font-medium mb-4">Mind Maps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mindmaps.map((mindmap) => (
              <div key={mindmap._id} className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium">{mindmap.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{mindmap.description}</p>
                <div className="mt-2 text-xs text-gray-500">
                  By {mindmap.author.username} • {new Date(mindmap.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Trees Section */}
        <section>
          <h2 className="text-xl font-medium mb-4">Skill Trees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skilltrees.map((skilltree) => (
              <div key={skilltree._id} className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium">{skilltree.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{skilltree.description}</p>
                <div className="mt-2 text-xs text-gray-500">
                  {skilltree.category} • By {skilltree.author.username} • {new Date(skilltree.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feed; 