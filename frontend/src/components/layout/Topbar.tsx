import { Menu, Search, Bell, MessageSquare, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { currentUser } from '../../data/mockData';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
      <div className="px-4 md:px-8 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick} 
            className="md:hidden p-2 rounded-full hover:bg-neutral-100"
          >
            <Menu size={20} className="text-neutral-600" />
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            <img src="/synapz-icon.svg" alt="flodevs Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-neutral-900">flodevs</span>
          </div>
        </div>

        <AnimatePresence>
          {showSearch ? (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 w-full h-full bg-white px-4 md:px-8 py-3 flex items-center z-40"
            >
              <div className="flex items-center w-full gap-3">
                <Search size={18} className="text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search for people, projects, skills..."
                  className="flex-1 border-none outline-none bg-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="p-1 rounded-full hover:bg-neutral-100"
                >
                  <X size={20} className="text-neutral-600" />
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600"
          >
            <Search size={20} />
          </button>
          
          <button className="relative p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-accent-600 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="relative p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
            <MessageSquare size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-accent-600 rounded-full text-xs text-white flex items-center justify-center">
              5
            </span>
          </button>
          
          <Link to="/create" className="hidden md:flex btn btn-primary">
            <Plus size={18} />
            <span>Create</span>
          </Link>
          
          <Link to="/profile" className="hidden md:block">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="h-9 w-9 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-accent-300 transition-all duration-200"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Topbar;