import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiActivity, FiCheck, FiClock, FiTrendingUp, FiEdit } = FiIcons;

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'post',
      title: 'Objava objavljena na Instagram',
      time: 'Prije 2 sata',
      icon: FiCheck,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'campaign',
      title: 'Kampanja "Ljetna promocija" pokrenuta',
      time: 'Prije 4 sata',
      icon: FiTrendingUp,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'scheduled',
      title: 'Zakazana objava za sutra u 10:00',
      time: 'Prije 6 sati',
      icon: FiClock,
      color: 'text-yellow-600'
    },
    {
      id: 4,
      type: 'content',
      title: 'AI generirao novi sadržaj',
      time: 'Prije 1 dan',
      icon: FiEdit,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-card">
      <div className="flex items-center mb-4">
        <SafeIcon icon={FiActivity} className="w-5 h-5 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Nedavna aktivnost</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-gray-100 rounded-lg mr-3">
              <SafeIcon icon={activity.icon} className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;