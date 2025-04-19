import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, ZoomIn, ZoomOut } from 'lucide-react';
import { mindMapRoot } from '../data/mockData';
import { motion } from 'framer-motion';

const MindMap = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  };

  const nodeColors = {
    'project': 'bg-accent-100 text-accent-800 border-accent-300',
    'task': 'bg-primary-100 text-primary-800 border-primary-300',
    'idea': 'bg-secondary-100 text-secondary-800 border-secondary-300',
    'note': 'bg-warning-100 text-warning-800 border-warning-300',
  };

  const renderMindMapNode = (node, level = 0, index = 0, parentX = 0, parentY = 0) => {
    const levelSpacing = 120;
    const siblingSpacing = 80;
    
    const nodeVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          delay: level * 0.1 + index * 0.05,
          duration: 0.3
        }
      }
    };

    return (
      <motion.div
        key={node.id}
        initial="hidden"
        animate="visible"
        variants={nodeVariants}
        className="absolute"
        style={{
          left: level === 0 ? '50%' : `${parentX + (index - (node.children.length / 2) + 0.5) * siblingSpacing}px`,
          top: level === 0 ? '50px' : `${parentY + levelSpacing}px`,
          transform: level === 0 ? 'translateX(-50%)' : 'none',
        }}
      >
        <div className={`px-4 py-2 rounded-lg border ${nodeColors[node.type]} shadow-sm min-w-[120px] text-center`}>
          {node.label}
        </div>
        
        {node.children.length > 0 && (
          <div className="relative">
            {node.children.map((child, childIndex) => (
              <div key={child.id}>
                <div className="absolute w-px bg-neutral-300 h-[40px]" 
                  style={{
                    left: level === 0 ? '50%' : 
                      `${(childIndex - (node.children.length / 2) + 0.5) * siblingSpacing + 60}px`,
                    top: '28px'
                  }}
                ></div>
                {renderMindMapNode(
                  child, 
                  level + 1, 
                  childIndex, 
                  level === 0 ? 0 : (index - (node.children.length / 2) + 0.5) * siblingSpacing,
                  level === 0 ? 50 : parentY + levelSpacing
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="h-full">
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">MindMap</h1>
          <p className="text-neutral-600 text-sm mt-1">Organize your thoughts and projects visually</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search nodes..."
              className="pl-9 pr-4 py-2 rounded-lg border border-neutral-300 text-sm w-full md:w-auto"
            />
          </div>
          <button className="btn btn-secondary">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            <span>New Node</span>
          </button>
        </div>
      </header>

      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden min-h-[600px] relative">
        {/* Toolbar */}
        <div className="absolute top-4 right-4 z-10 flex gap-1 bg-white rounded-lg shadow-sm border border-neutral-200">
          <button 
            className="p-2 hover:bg-neutral-100 rounded-l-lg"
            onClick={handleZoomOut}
          >
            <ZoomOut size={16} />
          </button>
          <div className="flex items-center justify-center w-10 border-l border-r border-neutral-200">
            <span className="text-xs font-medium">{Math.round(zoomLevel * 100)}%</span>
          </div>
          <button 
            className="p-2 hover:bg-neutral-100 rounded-r-lg"
            onClick={handleZoomIn}
          >
            <ZoomIn size={16} />
          </button>
        </div>

        {/* Mind Map Canvas */}
        <div 
          className="relative overflow-auto p-4 min-h-[600px]"
          style={{ 
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center top',
            transition: 'transform 0.2s ease-out',
            height: 'calc(100vh - 220px)'
          }}
        >
          <div className="relative w-full h-full">
            {renderMindMapNode(mindMapRoot)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMap;