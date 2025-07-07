import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlus, FiCalendar, FiEdit, FiBarChart3, FiZap, FiImage } = FiIcons;

const QuickActions = () => {
  const actions = [
    {
      label: 'Nova objava',
      icon: FiPlus,
      color: 'bg-primary-600 hover:bg-primary-700',
      shortcut: 'Ctrl+N'
    },
    {
      label: 'Zakaži objavu',
      icon: FiCalendar,
      color: 'bg-green-600 hover:bg-green-700',
      shortcut: 'Ctrl+S'
    },
    {
      label: 'Kreiraj dizajn',
      icon: FiImage,
      color: 'bg-purple-600 hover:bg-purple-700',
      shortcut: 'Ctrl+D'
    },
    {
      label: 'AI sadržaj',
      icon: FiZap,
      color: 'bg-orange-600 hover:bg-orange-700',
      shortcut: 'Ctrl+A'
    },
    {
      label: 'Analitika',
      icon: FiBarChart3,
      color: 'bg-blue-600 hover:bg-blue-700',
      shortcut: 'Ctrl+R'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="flex flex-col space-y-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-200 ${action.color}`}
            title={`${action.label} (${action.shortcut})`}
          >
            <SafeIcon icon={action.icon} className="w-5 h-5" />
            
            {/* Tooltip */}
            <div className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {action.label}
              <span className="text-gray-400 ml-2">{action.shortcut}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;