import { Edit, MapPin, Calendar, LinkIcon, Plus } from 'lucide-react';
import { currentUser, posts } from '../data/mockData';
import PostCard from '../components/social/PostCard';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-accent-600 to-primary-700 rounded-xl relative">
        <button className="absolute bottom-4 right-4 p-2 bg-white bg-opacity-50 backdrop-blur-sm rounded-full hover:bg-opacity-75">
          <Edit size={18} className="text-white" />
        </button>
      </div>
      
      {/* Profile Info */}
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Avatar */}
        <div className="absolute -top-16 left-6 md:relative md:top-auto md:left-auto">
          <div className="h-24 w-24 md:h-36 md:w-36 rounded-full border-4 border-white bg-white overflow-hidden">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        {/* User Info */}
        <div className="mt-10 md:mt-0 flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold">{currentUser.name}</h1>
              <p className="text-neutral-600">@{currentUser.username}</p>
            </div>
            <button className="btn btn-outline">
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
          </div>
          
          <p className="mt-4 text-neutral-800">{currentUser.bio}</p>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm text-neutral-600">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>Joined March 2023</span>
            </div>
          </div>
          
          <div className="flex gap-6 mt-4">
            <div>
              <span className="font-semibold">{currentUser.following}</span>
              <span className="text-neutral-600 ml-1">Following</span>
            </div>
            <div>
              <span className="font-semibold">{currentUser.followers}</span>
              <span className="text-neutral-600 ml-1">Followers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* External Links */}
      <div className="bg-white rounded-xl border border-neutral-200 p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Links</h2>
          <button className="p-1 rounded-full hover:bg-neutral-100 text-neutral-600">
            <Plus size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentUser.links.map((link) => (
            <a 
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50"
            >
              <div className="h-9 w-9 rounded bg-accent-100 flex items-center justify-center">
                <LinkIcon size={16} className="text-accent-700" />
              </div>
              <div>
                <p className="text-sm font-medium">{link.platform}</p>
                <p className="text-xs text-neutral-500 truncate">{link.url.replace(/^https?:\/\//, '')}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Skills */}
      <div className="bg-white rounded-xl border border-neutral-200 p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Skills</h2>
          <button className="p-1 rounded-full hover:bg-neutral-100 text-neutral-600">
            <Plus size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentUser.skills.map((skill) => (
            <div key={skill.id} className="p-3 rounded-lg hover:bg-neutral-50">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <p className="text-xs text-neutral-500">{skill.category}</p>
                </div>
                <span className="text-sm font-medium text-accent-700">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {posts.filter(post => post.user.id === currentUser.id).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;