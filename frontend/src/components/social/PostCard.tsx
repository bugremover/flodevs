import { 
  Heart, 
  MessageCircle, 
  Share, 
  MoreHorizontal,
  ThumbsUp,
  Bookmark
} from 'lucide-react';
import { useState } from 'react';
import { Post } from '../../types';
import { formatDistance } from '../../utils/dateUtils';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [localLikes, setLocalLikes] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLocalLikes(localLikes - 1);
    } else {
      setLocalLikes(localLikes + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="card p-4">
      {/* Post Header */}
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img 
            src={post.user.avatar} 
            alt={post.user.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm">{post.user.name}</p>
              <span className="text-neutral-500 text-xs">@{post.user.username}</span>
            </div>
            <p className="text-xs text-neutral-500">{formatDistance(post.createdAt)}</p>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-neutral-100">
          <MoreHorizontal size={18} className="text-neutral-500" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mt-3">
        <p className="text-sm">{post.content}</p>
        {post.attachments && post.attachments.length > 0 && (
          <div className="mt-3">
            {post.attachments.map((attachment, index) => (
              <img 
                key={index} 
                src={attachment} 
                alt={`Attachment ${index}`} 
                className="rounded-lg max-h-72 w-full object-cover mt-2"
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="mt-4 flex justify-between">
        <button 
          className={`flex items-center gap-1 p-1.5 rounded-full hover:bg-neutral-100 ${liked ? 'text-accent-600' : 'text-neutral-600'}`}
          onClick={handleLike}
        >
          {liked ? <ThumbsUp size={18} fill="currentColor" /> : <Heart size={18} />}
          <span className="text-xs">{localLikes}</span>
        </button>
        <button className="flex items-center gap-1 p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600">
          <MessageCircle size={18} />
          <span className="text-xs">{post.comments}</span>
        </button>
        <button className="flex items-center gap-1 p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600">
          <Share size={18} />
          <span className="text-xs">{post.shares}</span>
        </button>
        <button 
          className={`p-1.5 rounded-full hover:bg-neutral-100 ${saved ? 'text-accent-600' : 'text-neutral-600'}`}
          onClick={handleSave}
        >
          <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;