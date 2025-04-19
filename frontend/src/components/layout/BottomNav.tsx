import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Brain, 
  TreePine, 
  Users, 
  Share2 
} from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navigation = [
    { name: 'Home', icon: LayoutDashboard, path: '/' },
    { name: 'MindMap', icon: Brain, path: '/mindmap' },
    { name: 'SkillTree', icon: TreePine, path: '/skilltree' },
    { name: 'WorkSpace', icon: Users, path: '/workspace' },
    { name: 'Contribute', icon: Share2, path: '/contribute' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-30">
      <div className="flex justify-between items-center px-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center py-2 px-3 ${
              isActive(item.path)
                ? 'text-accent-700'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;