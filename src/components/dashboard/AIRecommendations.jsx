import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiZap, FiClock, FiTrendingUp, FiUsers } = FiIcons;

const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Optimalno vrijeme objave',
      description: 'Objavite na Instagramu u 18:00 za 15% veći angažman',
      icon: FiClock,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Povećanje budžeta',
      description: 'Povećajte budžet za TikTok kampanju za 20%',
      icon: FiTrendingUp,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Nova publika',
      description: 'Testirajte segment publike 25-34 godina',
      icon: FiUsers,
      priority: 'low'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-card">
      <div className="flex items-center mb-4">
        <SafeIcon icon={FiZap} className="w-5 h-5 text-yellow-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">AI Preporuke</h3>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex items-start">
              <div className={`p-2 rounded-lg mr-3 ${
                rec.priority === 'high' ? 'bg-red-100' :
                rec.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
              }`}>
                <SafeIcon 
                  icon={rec.icon} 
                  className={`w-4 h-4 ${
                    rec.priority === 'high' ? 'text-red-600' :
                    rec.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                  }`} 
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">{rec.title}</h4>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;