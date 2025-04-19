import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  trend: 'up' | 'down' | 'neutral';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon, trend }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4 hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start mb-3">
        <p className="text-sm text-neutral-600">{title}</p>
        <div className="p-2 rounded-full bg-neutral-100">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-semibold">{value}</h3>
        <div className={`text-xs font-medium px-2 py-1 rounded-full flex items-center ${
          trend === 'up' ? 'bg-success-50 text-success-700' : 
          trend === 'down' ? 'bg-error-50 text-error-700' : 
          'bg-neutral-100 text-neutral-700'
        }`}>
          {trend === 'up' && (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-1, 0, -1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUp size={12} className="mr-1" />
            </motion.div>
          )}
          {trend === 'down' && <ArrowDown size={12} className="mr-1" />}
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;