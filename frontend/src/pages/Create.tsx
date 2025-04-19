import { useState } from 'react';
import { Image, Paperclip, Smile, MapPin, BarChart, X, Globe, Lock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { currentUser } from '../data/mockData';

const Create = () => {
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [privacy, setPrivacy] = useState<'public' | 'private' | 'connections'>('public');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setContent('');
    setSelectedFiles([]);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl border border-neutral-200 p-4 md:p-6">
        <div className="flex gap-4">
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Share your thoughts, work, or achievements..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[120px] border-0 focus:ring-0 resize-none text-base placeholder:text-neutral-500"
              />
              
              {/* File Preview */}
              <AnimatePresence>
                {selectedFiles.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-2 gap-2 mt-4"
                  >
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center">
                          <div className="text-sm text-neutral-600">{file.name}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4 flex flex-wrap items-center gap-2 md:gap-4 border-t border-neutral-200 pt-4">
                <div className="flex gap-1 md:gap-2">
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
                  >
                    <label className="cursor-pointer">
                      <Image size={20} />
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={handleFileSelect}
                      />
                    </label>
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
                  >
                    <Paperclip size={20} />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  >
                    <Smile size={20} />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
                  >
                    <MapPin size={20} />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
                  >
                    <BarChart size={20} />
                  </button>
                </div>

                <div className="flex-1"></div>

                <div className="flex items-center gap-2">
                  <select
                    value={privacy}
                    onChange={(e) => setPrivacy(e.target.value as typeof privacy)}
                    className="bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="public">Public</option>
                    <option value="connections">Connections</option>
                    <option value="private">Private</option>
                  </select>
                  
                  <button
                    type="submit"
                    disabled={!content.trim() || isSubmitting}
                    className={`btn btn-primary py-1.5 px-4 ${
                      (!content.trim() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Posting...' : 'Post'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Privacy Guide */}
      <div className="mt-6 bg-white rounded-xl border border-neutral-200 p-4">
        <h3 className="text-lg font-medium mb-4">Post Privacy Guide</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-neutral-100 rounded-lg">
              <Globe size={20} className="text-neutral-600" />
            </div>
            <div>
              <p className="font-medium">Public</p>
              <p className="text-sm text-neutral-600">Anyone can see your post</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-neutral-100 rounded-lg">
              <Users size={20} className="text-neutral-600" />
            </div>
            <div>
              <p className="font-medium">Connections</p>
              <p className="text-sm text-neutral-600">Only your connections can see your post</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-neutral-100 rounded-lg">
              <Lock size={20} className="text-neutral-600" />
            </div>
            <div>
              <p className="font-medium">Private</p>
              <p className="text-sm text-neutral-600">Only you can see your post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;