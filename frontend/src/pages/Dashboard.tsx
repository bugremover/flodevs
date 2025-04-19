import { ArrowRight, TrendingUp, Star, Zap, Sparkles, Plus, Share2, BookOpen, FileText, Video } from 'lucide-react';
import { projects, posts } from '../data/mockData';
import PostCard from '../components/social/PostCard';
import ProjectCard from '../components/workspace/ProjectCard';
import StatsCard from '../components/dashboard/StatsCard';
import SuggestionCard from '../components/dashboard/SuggestionCard';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary hidden md:flex">
            <Sparkles size={18} className="text-accent-600" />
            <span>AI Insights</span>
          </button>
          <button className="btn btn-primary">
            <Plus size={18} />
            <span>Create</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Productivity Score"
          value="87"
          change="+12%"
          icon={<TrendingUp size={20} className="text-success-500" />}
          trend="up"
        />
        <StatsCard 
          title="Tasks Completed"
          value="24"
          change="+8"
          icon={<Zap size={20} className="text-warning-500" />}
          trend="up"
        />
        <StatsCard 
          title="Skill Progress"
          value="68%"
          change="+5%"
          icon={<Star size={20} className="text-accent-600" />}
          trend="up"
        />
        <StatsCard 
          title="Contributions"
          value="12"
          change="+3"
          icon={<Share2 size={20} className="text-secondary-600" />}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Projects and Posts */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Projects */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Recent Projects</h2>
              <button className="text-accent-600 hover:text-accent-800 text-sm font-medium flex items-center gap-1">
                View all <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Recent Activity Feed */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Recent Activity</h2>
              <button className="text-accent-600 hover:text-accent-800 text-sm font-medium flex items-center gap-1">
                View all <ArrowRight size={16} />
              </button>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Suggestions and Recommendations */}
        <div className="space-y-6">
          {/* AI Suggestions */}
          <section className="bg-white rounded-xl border border-neutral-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-accent-600" />
              <h3 className="font-medium">AI Suggestions</h3>
            </div>
            <div className="space-y-3">
              <SuggestionCard 
                title="Learn TypeScript Generics" 
                description="Based on your current skill progress" 
                type="skill"
              />
              <SuggestionCard 
                title="Complete API Integration Project" 
                description="2 tasks due this week" 
                type="task"
              />
              <SuggestionCard 
                title="Connect with Jamie Wilson" 
                description="Works on similar technologies" 
                type="connection"
              />
            </div>
          </section>

          {/* Recommended Resources */}
          <section className="bg-white rounded-xl border border-neutral-200 p-4">
            <h3 className="font-medium mb-3">Recommended Resources</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="h-10 w-10 rounded bg-accent-100 flex items-center justify-center text-accent-700">
                  <BookOpen size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Advanced React Patterns</p>
                  <p className="text-xs text-neutral-500">Frontend Masters • 4 hours</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-10 w-10 rounded bg-primary-100 flex items-center justify-center text-primary-700">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Effective TypeScript</p>
                  <p className="text-xs text-neutral-500">Book • 330 pages</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-10 w-10 rounded bg-secondary-100 flex items-center justify-center text-secondary-700">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Mastering Node.js</p>
                  <p className="text-xs text-neutral-500">Video Course • 5.5 hours</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;