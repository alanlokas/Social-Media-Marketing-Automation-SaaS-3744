import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiTrendingDown, FiEye, FiHeart, FiMousePointer, FiTarget } = FiIcons;

const MetricCard = ({ title, value, change, trend, icon }) => {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'reach': return FiEye;
      case 'engagement': return FiHeart;
      case 'clicks': return FiMousePointer;
      case 'conversions': return FiTarget;
      default: return FiTrendingUp;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-50 rounded-lg">
          <SafeIcon icon={getIcon(icon)} className="w-5 h-5 text-primary-600" />
        </div>
        <div className={`flex items-center text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          <SafeIcon 
            icon={trend === 'up' ? FiTrendingUp : FiTrendingDown} 
            className="w-4 h-4 mr-1" 
          />
          {change}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </motion.div>
  );
};

export default MetricCard;