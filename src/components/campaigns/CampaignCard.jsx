import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiPause, FiCheck, FiEdit, FiTrash2, FiBarChart3 } = FiIcons;

const CampaignCard = ({ campaign }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return FiPlay;
      case 'paused': return FiPause;
      case 'completed': return FiCheck;
      default: return FiPlay;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Aktivna';
      case 'paused': return 'Pauzirana';
      case 'completed': return 'Završena';
      default: return 'Nepoznato';
    }
  };

  const budgetPercentage = (campaign.spent / campaign.budget) * 100;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
        <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(campaign.status)}`}>
          <SafeIcon icon={getStatusIcon(campaign.status)} className="w-3 h-3 mr-1" />
          {getStatusText(campaign.status)}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {campaign.platforms.map((platform) => (
            <span
              key={platform}
              className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Doseg</p>
          <p className="font-semibold text-gray-900">{campaign.reach.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Angažman</p>
          <p className="font-semibold text-gray-900">{campaign.engagement.toLocaleString()}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Budžet</span>
          <span className="text-sm font-medium">
            {campaign.spent.toLocaleString()} / {campaign.budget.toLocaleString()} €
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between">
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
            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiBarChart3} className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiTrash2} className="w-4 h-4" />
          </motion.button>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
        </span>
      </div>
    </motion.div>
  );
};

export default CampaignCard;