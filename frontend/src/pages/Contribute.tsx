import { useState } from 'react';
import { Image, Paperclip, Smile, MapPin, BarChart } from 'lucide-react';
import { posts, currentUser } from '../data/mockData';
import PostCard from '../components/social/PostCard';

const Contribute = () => {
  const [newPostContent, setNewPostContent] = useState('');

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the post to the server
    alert('Post submitted: ' + newPostContent);
    setNewPostContent('');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Contribute</h1>

      {/* Create Post */}
      <div className="card p-4 mb-8">
        <div className="flex gap-3">
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <form onSubmit={handleSubmitPost}>
              <textarea
                placeholder="Share your work, ideas, or achievements..."
                className="w-full border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 min-h-[100px]"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              ></textarea>
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2">
                  <button type="button" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
                    <Image size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
                    <Paperclip size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
                    <Smile size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
                    <MapPin size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
                    <BarChart size={18} />
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary py-1.5 px-4"
                  disabled={!newPostContent.trim()}
                >
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Feed Tabs */}
      <div className="flex border-b border-neutral-200 mb-6">
        <button className="px-4 py-3 text-sm font-medium text-accent-700 border-b-2 border-accent-700">
          For You
        </button>
        <button className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900">
          Following
        </button>
        <button className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900">
          Popular
        </button>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Contribute;