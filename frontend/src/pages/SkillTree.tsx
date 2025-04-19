import { useState } from 'react';
import { Search, Filter, Plus, BookOpen, FileText, Book, Video, Star } from 'lucide-react';
import { currentUser, careerPaths } from '../data/mockData';
import { motion } from 'framer-motion';

const SkillTree = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'Frontend', 'Backend', 'Design', 'DevOps'];

  const filteredSkills = selectedCategory === 'all' 
    ? currentUser.skills 
    : currentUser.skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">SkillTree</h1>
          <p className="text-neutral-600 text-sm mt-1">Track your skills and discover career paths</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search skills..."
              className="pl-9 pr-4 py-2 rounded-lg border border-neutral-300 text-sm w-full md:w-auto"
            />
          </div>
          <button className="btn btn-primary">
            <Plus size={16} />
            <span>Add Skill</span>
          </button>
        </div>
      </header>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              selectedCategory === category 
                ? 'bg-accent-600 text-white' 
                : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'All Skills' : category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-xs text-neutral-500">{skill.category}</span>
              </div>
              <span className="text-sm font-medium text-accent-700">{skill.level}%</span>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Career Paths */}
      <div>
        <h2 className="text-xl font-medium mb-4">Suggested Career Paths</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="card p-5"
            >
              <h3 className="text-lg font-medium">{path.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{path.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {path.requiredSkills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Potential Roles</h4>
                <ul className="space-y-1">
                  {path.potentialRoles.map((role, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-600"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Learning Resources</h4>
                <div className="space-y-2">
                  {path.resources.map((resource) => (
                    <div key={resource.id} className="flex items-start gap-3 bg-neutral-50 p-2 rounded-lg">
                      <div className={`p-2 rounded-lg ${
                        resource.type === 'course' ? 'bg-accent-100 text-accent-700' :
                        resource.type === 'article' ? 'bg-secondary-100 text-secondary-700' :
                        'bg-primary-100 text-primary-700'
                      }`}>
                        {resource.type === 'course' && <BookOpen size={16} />}
                        {resource.type === 'article' && <FileText size={16} />}
                        {resource.type === 'book' && <Book size={16} />}
                        {resource.type === 'video' && <Video size={16} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{resource.title}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-neutral-500 capitalize">{resource.type}</span>
                          <div className="flex items-center">
                            <Star size={12} className="text-yellow-400 fill-current" />
                            <span className="text-xs ml-1">{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="btn btn-outline w-full mt-4">Explore Path</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTree;