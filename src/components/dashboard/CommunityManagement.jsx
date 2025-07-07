import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMessageCircle, FiMail, FiHeart, FiAlertCircle, FiFilter, FiSend, FiMoreHorizontal, FiFlag, FiUser } = FiIcons;

const CommunityManagement = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');

  const messages = [
    {
      id: 1,
      type: 'comment',
      platform: 'instagram',
      author: 'marko_123',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      content: 'Odličan proizvod! Gdje mogu kupiti?',
      post: 'Ljetna kolekcija 2024',
      time: 'Prije 15 min',
      status: 'unread',
      sentiment: 'positive',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'dm',
      platform: 'facebook',
      author: 'ana.maric',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=40&h=40&fit=crop&crop=face',
      content: 'Pozdrav! Zanima me informacija o dostavi...',
      time: 'Prije 30 min',
      status: 'unread',
      sentiment: 'neutral',
      priority: 'high'
    },
    {
      id: 3,
      type: 'mention',
      platform: 'twitter',
      author: 'tech_guru',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: '@nasa_brend Kada izlazi nova verzija aplikacije?',
      time: 'Prije 1h',
      status: 'responded',
      sentiment: 'neutral',
      priority: 'medium'
    },
    {
      id: 4,
      type: 'comment',
      platform: 'linkedin',
      author: 'petra.novak',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      content: 'Problém s registracijom na vašoj platformi, možete pomoći?',
      post: 'Novi update platforme',
      time: 'Prije 2h',
      status: 'flagged',
      sentiment: 'negative',
      priority: 'high'
    },
    {
      id: 5,
      type: 'review',
      platform: 'google',
      author: 'satisfied_user',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      content: '⭐⭐⭐⭐⭐ Odličan servis i brza dostava!',
      time: 'Prije 3h',
      status: 'unread',
      sentiment: 'positive',
      priority: 'low'
    }
  ];

  const quickResponses = [
    'Hvala vam na komentaru!',
    'Kontaktirajte nas putem DM-a za više informacija.',
    'Provjerite našu web stranicu za najnovije informacije.',
    'Hvala na povratnoj informaciji, proslijedimo je našem timu.',
    'Žao nam je zbog problema, kontaktirat će vas naš tim.'
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram': return '📷';
      case 'facebook': return '📘';
      case 'twitter': return '🐦';
      case 'linkedin': return '💼';
      case 'google': return '🔍';
      default: return '💬';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'facebook': return 'bg-blue-600';
      case 'twitter': return 'bg-blue-400';
      case 'linkedin': return 'bg-blue-700';
      case 'google': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'responded': return 'bg-green-100 text-green-800';
      case 'flagged': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      case 'neutral': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredMessages = messages.filter(message => {
    if (selectedTab !== 'all' && message.status !== selectedTab) return false;
    if (filterPlatform !== 'all' && message.platform !== filterPlatform) return false;
    return true;
  });

  const getTabCount = (status) => {
    return messages.filter(m => status === 'all' || m.status === status).length;
  };

  return (
    <div className="bg-white rounded-lg shadow-card">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Upravljanje zajednicom</h3>
            <p className="text-sm text-gray-600">Centralizirani inbox za sve platforme</p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Sve platforme</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="google">Google</option>
            </select>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm flex items-center"
            >
              <SafeIcon icon={FiFilter} className="w-4 h-4 mr-2" />
              Filter
            </motion.button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex">
          {[
            { id: 'all', label: 'Sve', count: getTabCount('all') },
            { id: 'unread', label: 'Nepročitano', count: getTabCount('unread') },
            { id: 'flagged', label: 'Označeno', count: getTabCount('flagged') },
            { id: 'responded', label: 'Odgovoreno', count: getTabCount('responded') }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Messages List */}
      <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
        {filteredMessages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start space-x-4">
              {/* Avatar and Platform */}
              <div className="relative">
                <img
                  src={message.avatar}
                  alt={message.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${getPlatformColor(message.platform)} flex items-center justify-center text-white text-xs`}>
                  {getPlatformIcon(message.platform)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{message.author}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(message.status)}`}>
                      {message.status === 'unread' ? 'Novo' : 
                       message.status === 'responded' ? 'Odgovoreno' : 
                       message.status === 'flagged' ? 'Označeno' : message.status}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(message.priority)}`}></div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{message.time}</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <SafeIcon icon={FiMoreHorizontal} className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-2">{message.content}</p>

                {message.post && (
                  <p className="text-xs text-gray-500 mb-2">Na objavi: {message.post}</p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs ${getSentimentColor(message.sentiment)}`}>
                      {message.sentiment === 'positive' ? '😊' : 
                       message.sentiment === 'negative' ? '😞' : '😐'} 
                      {message.sentiment}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1 text-gray-600 hover:text-primary-600 rounded"
                      title="Odgovori"
                    >
                      <SafeIcon icon={FiSend} className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1 text-gray-600 hover:text-yellow-600 rounded"
                      title="Označi"
                    >
                      <SafeIcon icon={FiFlag} className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1 text-gray-600 hover:text-red-600 rounded"
                      title="Prijavi"
                    >
                      <SafeIcon icon={FiAlertCircle} className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Response Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Brzi odgovori</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {quickResponses.map((response, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-2 text-left text-sm bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-colors"
            >
              {response}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityManagement;