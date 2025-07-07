import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiInstagram, FiTwitter, FiLinkedin } = FiIcons;

const PlatformOverview = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: FiInstagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      followers: '12.5K',
      engagement: '4.2%',
      posts: 24,
      reach: '45.2K'
    },
    {
      name: 'X (Twitter)',
      icon: FiTwitter,
      color: 'bg-blue-500',
      followers: '8.1K',
      engagement: '2.8%',
      posts: 18,
      reach: '32.1K'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      color: 'bg-blue-700',
      followers: '3.4K',
      engagement: '6.1%',
      posts: 12,
      reach: '18.7K'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Pregled platformi</h3>
      
      <div className="space-y-4">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${platform.color} mr-3`}>
                  <SafeIcon icon={platform.icon} className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-medium text-gray-900">{platform.name}</h4>
              </div>
              <span className="text-sm text-gray-500">{platform.posts} objava</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Pratitelji</p>
                <p className="font-semibold text-gray-900">{platform.followers}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Angažman</p>
                <p className="font-semibold text-gray-900">{platform.engagement}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Doseg</p>
                <p className="font-semibold text-gray-900">{platform.reach}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlatformOverview;