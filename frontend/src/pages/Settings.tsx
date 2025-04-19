


import { useState } from 'react';
import { User, Lock, Bell, Globe, Eye, Moon, Sun, Shield, HelpCircle } from 'lucide-react';
import { currentUser } from '../data/mockData';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [theme, setTheme] = useState('light');
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Eye },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'help', label: 'Help & Support', icon: HelpCircle }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <nav className="p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
                  activeTab === tab.id 
                    ? 'bg-accent-50 text-accent-700 font-medium' 
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        
        {/* Content Area */}
        <div className="flex-1 bg-white rounded-xl border border-neutral-200 p-6">
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-medium mb-6">Profile Settings</h2>
              
              <div className="space-y-6">
                {/* Profile Picture */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Profile Picture</label>
                  <div className="flex items-center gap-4">
                    <img 
                      src={currentUser.avatar} 
                      alt={currentUser.name} 
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <button className="btn btn-secondary text-sm">Change Photo</button>
                      <p className="text-xs text-neutral-500 mt-1">JPG, GIF or PNG. Max size 2MB.</p>
                    </div>
                  </div>
                </div>
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    defaultValue={currentUser.name}
                    className="input"
                  />
                </div>
                
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-neutral-700 mb-2">Username</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-500 text-sm">
                      @
                    </span>
                    <input 
                      type="text" 
                      id="username" 
                      defaultValue={currentUser.username}
                      className="input rounded-l-none"
                    />
                  </div>
                </div>
                
                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-neutral-700 mb-2">Bio</label>
                  <textarea 
                    id="bio" 
                    rows={4}
                    defaultValue={currentUser.bio}
                    className="input"
                  ></textarea>
                </div>
                
                {/* Links */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Links</label>
                  {currentUser.links.map((link) => (
                    <div key={link.id} className="flex gap-2 mb-2">
                      <input 
                        type="text" 
                        defaultValue={link.platform}
                        placeholder="Platform"
                        className="input w-1/3"
                      />
                      <input 
                        type="url" 
                        defaultValue={link.url}
                        placeholder="URL"
                        className="input flex-1"
                      />
                    </div>
                  ))}
                  <button className="text-sm text-accent-600 hover:text-accent-800 font-medium mt-2">
                    + Add Link
                  </button>
                </div>
                
                <div className="pt-4">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div>
              <h2 className="text-xl font-medium mb-6">Appearance Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-4">Theme</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`p-4 rounded-xl border border-2 cursor-pointer flex flex-col items-center text-center ${
                        theme === 'light' ? 'border-accent-600' : 'border-neutral-200'
                      }`}
                      onClick={() => setTheme('light')}
                    >
                      <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center mb-2">
                        <Sun size={24} className="text-neutral-700" />
                      </div>
                      <span className="font-medium text-sm">Light</span>
                      <span className="text-xs text-neutral-500">Default theme</span>
                    </div>
                    
                    <div 
                      className={`p-4 rounded-xl border border-2 cursor-pointer flex flex-col items-center text-center ${
                        theme === 'dark' ? 'border-accent-600' : 'border-neutral-200'
                      }`}
                      onClick={() => setTheme('dark')}
                    >
                      <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center mb-2">
                        <Moon size={24} className="text-white" />
                      </div>
                      <span className="font-medium text-sm">Dark</span>
                      <span className="text-xs text-neutral-500">Easier on the eyes</span>
                    </div>
                    
                    <div 
                      className={`p-4 rounded-xl border border-2 cursor-pointer flex flex-col items-center text-center ${
                        theme === 'system' ? 'border-accent-600' : 'border-neutral-200'
                      }`}
                      onClick={() => setTheme('system')}
                    >
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-neutral-700 to-neutral-100 flex items-center justify-center mb-2">
                        <Globe size={24} className="text-white" />
                      </div>
                      <span className="font-medium text-sm">System</span>
                      <span className="text-xs text-neutral-500">Follow your system</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-4">Accent Color</label>
                  <div className="flex gap-3">
                    <button className="h-8 w-8 rounded-full bg-accent-600 border-2 border-white ring-2 ring-accent-600"></button>
                    <button className="h-8 w-8 rounded-full bg-pink-600 border-2 border-white hover:ring-2 hover:ring-pink-600"></button>
                    <button className="h-8 w-8 rounded-full bg-blue-600 border-2 border-white hover:ring-2 hover:ring-blue-600"></button>
                    <button className="h-8 w-8 rounded-full bg-green-600 border-2 border-white hover:ring-2 hover:ring-green-600"></button>
                    <button className="h-8 w-8 rounded-full bg-orange-600 border-2 border-white hover:ring-2 hover:ring-orange-600"></button>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-xl font-medium mb-6">Notification Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">New messages</p>
                        <p className="text-xs text-neutral-500">Get notified when you receive a message</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Task Updates</p>
                        <p className="text-xs text-neutral-500">Get notified about task status changes</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">New Connections</p>
                        <p className="text-xs text-neutral-500">Get notified when someone follows you</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">AI Suggestions</p>
                        <p className="text-xs text-neutral-500">Get notified about personalized AI suggestions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Enable Push Notifications</p>
                        <p className="text-xs text-neutral-500">Receive notifications even when you're not using the app</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;