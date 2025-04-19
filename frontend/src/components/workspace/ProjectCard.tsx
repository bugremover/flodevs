import { Calendar, Clock, Users } from 'lucide-react';
import { Project } from '../../types';
import { formatDate } from '../../utils/dateUtils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Calculate completion percentage
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter(task => task.status === 'done').length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="card hover:translate-y-[-4px]">
      <div className="p-4">
        <h3 className="font-medium text-lg">{project.name}</h3>
        <p className="text-sm text-neutral-600 mt-1">{project.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-neutral-500" />
            <span className="text-xs text-neutral-500">{formatDate(project.createdAt)}</span>
          </div>
          <div className="flex -space-x-2">
            {project.collaborators.slice(0, 3).map((user) => (
              <img 
                key={user.id}
                src={user.avatar}
                alt={user.name}
                className="h-6 w-6 rounded-full border border-white"
              />
            ))}
            {project.collaborators.length > 3 && (
              <div className="h-6 w-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs text-neutral-700 border border-white">
                +{project.collaborators.length - 3}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium">{completionPercentage}% Complete</span>
            <span className="text-xs text-neutral-500">{completedTasks}/{totalTasks} Tasks</span>
          </div>
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-500 rounded-full"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-neutral-200 p-3 flex justify-between">
        <div className="flex items-center gap-1 text-xs text-neutral-600">
          <Calendar size={14} />
          <span>Due in 2 weeks</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-neutral-600">
          <Users size={14} />
          <span>{project.collaborators.length} members</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;