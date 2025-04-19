import { BookOpen, CheckSquare, Users } from 'lucide-react';

interface SuggestionCardProps {
  title: string;
  description: string;
  type: 'skill' | 'task' | 'connection';
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'skill':
        return <BookOpen size={16} className="text-accent-600" />;
      case 'task':
        return <CheckSquare size={16} className="text-primary-600" />;
      case 'connection':
        return <Users size={16} className="text-secondary-600" />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'skill':
        return 'bg-accent-50';
      case 'task':
        return 'bg-primary-50';
      case 'connection':
        return 'bg-secondary-50';
      default:
        return 'bg-neutral-50';
    }
  };

  return (
    <div className={`${getBgColor()} rounded-lg p-3 transition-all duration-200 hover:translate-x-1 cursor-pointer`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{getIcon()}</div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-neutral-600 mt-0.5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;