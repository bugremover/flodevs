import { useState } from 'react';
import { Plus, Filter, Search, Calendar, ListChecks, Users, Clock, FolderKanban } from 'lucide-react';
import { projects } from '../data/mockData';
import ProjectCard from '../components/workspace/ProjectCard';

const WorkSpace = () => {
  const [view, setView] = useState('grid');
  
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">WorkSpace</h1>
          <p className="text-neutral-600 text-sm mt-1">Manage your projects and collaborate with team members</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-9 pr-4 py-2 rounded-lg border border-neutral-300 text-sm w-full md:w-auto"
            />
          </div>
          <button className="btn btn-secondary">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            <span>New Project</span>
          </button>
        </div>
      </header>

      {/* View Options */}
      <div className="flex justify-between items-center">
        <div className="flex bg-white rounded-lg border border-neutral-200 p-1">
          <button 
            className={`p-2 rounded flex items-center gap-1.5 ${view === 'grid' ? 'bg-accent-100 text-accent-700' : 'text-neutral-600'}`}
            onClick={() => setView('grid')}
          >
            <FolderKanban size={16} />
            <span className="text-sm font-medium">Grid</span>
          </button>
          <button 
            className={`p-2 rounded flex items-center gap-1.5 ${view === 'list' ? 'bg-accent-100 text-accent-700' : 'text-neutral-600'}`}
            onClick={() => setView('list')}
          >
            <ListChecks size={16} />
            <span className="text-sm font-medium">List</span>
          </button>
          <button 
            className={`p-2 rounded flex items-center gap-1.5 ${view === 'calendar' ? 'bg-accent-100 text-accent-700' : 'text-neutral-600'}`}
            onClick={() => setView('calendar')}
          >
            <Calendar size={16} />
            <span className="text-sm font-medium">Calendar</span>
          </button>
        </div>
        
        <div className="text-sm text-neutral-600 flex items-center gap-1">
          <Clock size={16} />
          <span>Last updated: Just now</span>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-xl font-medium mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Project Card */}
          <div className="card border-dashed border-2 flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:border-accent-300 hover:bg-accent-50">
            <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
              <Plus size={24} className="text-accent-600" />
            </div>
            <h3 className="font-medium text-lg">Create New Project</h3>
            <p className="text-sm text-neutral-600 mt-2">Start collaborating with your team</p>
          </div>
          
          {/* Project Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Your Team</h2>
          <button className="text-accent-600 hover:text-accent-800 text-sm font-medium flex items-center gap-1">
            <Users size={16} />
            <span>Manage Team</span>
          </button>
        </div>
        
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <div className="p-4 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Team Members</h3>
              <button className="text-sm text-accent-600 hover:text-accent-800 font-medium">
                + Invite
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Team member cards would go here */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50">
                <img 
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Jamie Wilson" 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Jamie Wilson</p>
                  <p className="text-xs text-neutral-500">Backend Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50">
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Sam Taylor" 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Sam Taylor</p>
                  <p className="text-xs text-neutral-500">Full-Stack Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50">
                <div className="h-10 w-10 rounded-full bg-accent-100 flex items-center justify-center">
                  <Plus size={18} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Add Team Member</p>
                  <p className="text-xs text-neutral-500">Invite someone new</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;