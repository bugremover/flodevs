import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  TreePine, 
  LayoutDashboard, 
  Users, 
  Share2, 
  UserCircle, 
  Settings, 
  X
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobile = false, onClose }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'MindMap', icon: Brain, path: '/mindmap' },
    { name: 'SkillTree', icon: TreePine, path: '/skilltree' },
    { name: 'WorkSpace', icon: Users, path: '/workspace' },
    { name: 'Contribute', icon: Share2, path: '/contribute' },
  ];

  const secondaryNav = [
    { name: 'Profile', icon: UserCircle, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className={`h-full w-64 bg-white border-r border-neutral-200 flex flex-col ${mobile ? 'pt-4' : 'py-6'}`}>
      {mobile && (
        <div className="px-4 mb-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/synapz-icon.svg" alt="flodevs Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-neutral-900">flodevs</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-neutral-100">
            <X size={20} className="text-neutral-500" />
          </button>
        </div>
      )}
      
      {!mobile && (
        <div className="px-6 mb-8">
          <div className="flex items-center gap-2">
            <img src="/synapz-icon.svg" alt="flodevs Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-neutral-900">flodevs</span>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <div className="px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={mobile ? onClose : undefined}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 px-3">
          <div className="space-y-1">
            {secondaryNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={mobile ? onClose : undefined}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 mt-4 mb-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 cursor-pointer">
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-neutral-900 truncate">{currentUser.name}</p>
            <p className="text-xs text-neutral-500 truncate">@{currentUser.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;