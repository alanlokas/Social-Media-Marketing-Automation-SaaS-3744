import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CampaignCard from '../components/campaigns/CampaignCard';
import CreateCampaignModal from '../components/campaigns/CreateCampaignModal';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiFilter } = FiIcons;

const Campaigns = () => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all');

  const campaigns = [
    {
      id: 1,
      name: 'Ljetna promocija',
      status: 'active',
      platforms: ['Instagram', 'TikTok'],
      budget: 5000,
      spent: 3200,
      reach: 45000,
      engagement: 2400,
      startDate: '2024-01-15',
      endDate: '2024-02-15'
    },
    {
      id: 2,
      name: 'Povećanje svijesti o brendu',
      status: 'paused',
      platforms: ['LinkedIn', 'X'],
      budget: 3000,
      spent: 1800,
      reach: 28000,
      engagement: 1200,
      startDate: '2024-01-10',
      endDate: '2024-02-10'
    },
    {
      id: 3,
      name: 'Prodaja proizvoda',
      status: 'completed',
      platforms: ['Instagram', 'LinkedIn'],
      budget: 8000,
      spent: 7500,
      reach: 85000,
      engagement: 4200,
      startDate: '2023-12-01',
      endDate: '2024-01-01'
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'all') return true;
    return campaign.status === filter;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Kampanje</h1>
            <p className="text-gray-600">Upravljajte vašim marketinškim kampanjama</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="mt-4 sm:mt-0 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
            Nova kampanja
          </motion.button>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <SafeIcon icon={FiFilter} className="w-4 h-4 mr-2 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Sve kampanje</option>
              <option value="active">Aktivne</option>
              <option value="paused">Pauzirane</option>
              <option value="completed">Završene</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CampaignCard campaign={campaign} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {showModal && (
        <CreateCampaignModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Campaigns;