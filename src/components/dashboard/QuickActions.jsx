import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlus, FiCalendar, FiEdit, FiBarChart3 } = FiIcons;

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'Nova kampanja',
      description: 'Stvori novu marketinšku kampanju',
      icon: FiPlus,
      color: 'bg-primary-500 hover:bg-primary-600',
      onClick: () => navigate('/campaigns')
    },
    {
      title: 'Zakaži objavu',
      description: 'Planiraj objavu za kasnije',
      icon: FiCalendar,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => navigate('/scheduler')
    },
    {
      title: 'Generiraj sadržaj',
      description: 'Koristi AI za stvaranje sadržaja',
      icon: FiEdit,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => navigate('/content')
    },
    {
      title: 'Pregled analitike',
      description: 'Analiziraj performanse',
      icon: FiBarChart3,
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => navigate('/analytics')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <motion.button
          key={action.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={action.onClick}
          className={`p-4 rounded-lg text-white text-left transition-colors ${action.color}`}
        >
          <SafeIcon icon={action.icon} className="w-6 h-6 mb-2" />
          <h4 className="font-medium mb-1">{action.title}</h4>
          <p className="text-sm opacity-90">{action.description}</p>
        </motion.button>
      ))}
    </div>
  );
};

export default QuickActions;