import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiClock, FiEdit, FiTrash2, FiInstagram, FiLinkedin, FiTwitter } = FiIcons;

const ScheduledPost = ({ post, compact = false }) => {
  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return FiInstagram;
      case 'linkedin': return FiLinkedin;
      case 'twitter':
      case 'x': return FiTwitter;
      default: return FiClock;
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'linkedin': return 'bg-blue-700';
      case 'twitter':
      case 'x': return 'bg-blue-500';
      case 'tiktok': return 'bg-black';
      default: return 'bg-gray-500';
    }
  };

  if (compact) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg ${getPlatformColor(post.platform)} flex items-center justify-center`}>
              <SafeIcon icon={getPlatformIcon(post.platform)} className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">{post.title}</p>
              <p className="text-xs text-gray-500">
                {post.scheduledTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className={`w-10 h-10 rounded-lg ${getPlatformColor(post.platform)} flex items-center justify-center`}>
            <SafeIcon icon={getPlatformIcon(post.platform)} className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="font-medium text-gray-900">{post.title}</h4>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Zakazano
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{post.content}</p>
            <div className="flex items-center text-xs text-gray-500">
              <SafeIcon icon={FiClock} className="w-3 h-3 mr-1" />
              {post.scheduledTime.toLocaleString()}
            </div>
          </div>
          {post.image && (
            <img
              src={post.image}
              alt="Post preview"
              className="w-16 h-16 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiEdit} className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiTrash2} className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ScheduledPost;