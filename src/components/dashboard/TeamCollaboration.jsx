import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiMessageSquare, FiCheck, FiX, FiClock, FiEye, FiEdit, FiSend, FiBell } = FiIcons;

const TeamCollaboration = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const teamMembers = [
    {
      id: 1,
      name: 'Ana Marić',
      role: 'Content Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=40&h=40&fit=crop&crop=face',
      status: 'online',
      lastActive: 'Aktivna'
    },
    {
      id: 2,
      name: 'Marko Petrović',
      role: 'Social Media Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      status: 'away',
      lastActive: 'Prije 15 min'
    },
    {
      id: 3,
      name: 'Petra Novak',
      role: 'Graphic Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      status: 'offline',
      lastActive: 'Prije 2h'
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      title: 'Ljetna promocija - Instagram post',
      author: 'Ana Marić',
      created: 'Prije 2h',
      platform: 'Instagram',
      type: 'post',
      content: 'Nova kolekcija je stigla! 🌟 Popust do 30% na sve proizvode. #fashion #sale',
      comments: 2,
      urgency: 'high'
    },
    {
      id: 2,
      title: 'Tech blog promo - LinkedIn',
      author: 'Marko Petrović',
      created: 'Prije 4h',
      platform: 'LinkedIn',
      type: 'article',
      content: 'Novi blog post o najnovijim tech trendovima je objavljen...',
      comments: 1,
      urgency: 'medium'
    },
    {
      id: 3,
      title: 'Product showcase - TikTok video',
      author: 'Petra Novak',
      created: 'Prije 1 dan',
      platform: 'TikTok',
      type: 'video',
      content: 'Kratki video koji prikazuje naš najnoviji proizvod u akciji',
      comments: 0,
      urgency: 'low'
    }
  ];

  const recentComments = [
    {
      id: 1,
      postTitle: 'Ljetna promocija - Instagram post',
      author: 'Marko Petrović',
      comment: 'Predlažem da dodamo još jedan CTA na kraju objave',
      time: 'Prije 1h',
      type: 'suggestion'
    },
    {
      id: 2,
      postTitle: 'Tech blog promo',
      author: 'Ana Marić',
      comment: 'Odličan sadržaj! Možda možemo skratiti naslov?',
      time: 'Prije 3h',
      type: 'feedback'
    },
    {
      id: 3,
      postTitle: 'Product showcase',
      author: 'Ana Marić',
      comment: 'Trebamo dodati branded watermark na video',
      time: 'Prije 5h',
      type: 'revision'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'approval_request',
      message: 'Ana Marić je poslala objavu na odobravanje',
      time: 'Prije 30 min',
      read: false
    },
    {
      id: 2,
      type: 'comment',
      message: 'Novi komentar na "Ljetna promocija"',
      time: 'Prije 1h',
      read: false
    },
    {
      id: 3,
      type: 'approval',
      message: 'Objava "Tech blog promo" je odobrena',
      time: 'Prije 2h',
      read: true
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'LinkedIn': return 'bg-blue-600';
      case 'TikTok': return 'bg-black';
      case 'Twitter': return 'bg-blue-400';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Team Members */}
      <div className="bg-white p-6 rounded-lg shadow-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tim i suradnja</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-all"
            >
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
              </div>
              
              <div className="ml-3 flex-1">
                <h4 className="font-medium text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-xs text-gray-500">{member.lastActive}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow Tabs */}
      <div className="bg-white rounded-lg shadow-card">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'pending'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <SafeIcon icon={FiClock} className="w-4 h-4 mr-2 inline" />
              Čeka odobravanje ({pendingApprovals.length})
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'comments'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <SafeIcon icon={FiMessageSquare} className="w-4 h-4 mr-2 inline" />
              Komentari ({recentComments.length})
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'notifications'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <SafeIcon icon={FiBell} className="w-4 h-4 mr-2 inline" />
              Obavijesti ({notifications.filter(n => !n.read).length})
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Pending Approvals */}
          {activeTab === 'pending' && (
            <div className="space-y-4">
              {pendingApprovals.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs border ${getUrgencyColor(item.urgency)}`}>
                          {item.urgency === 'high' ? 'Hitno' : item.urgency === 'medium' ? 'Srednje' : 'Nisko'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span>Autor: {item.author}</span>
                        <span>{item.created}</span>
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${getPlatformColor(item.platform)} mr-1`}></div>
                          <span>{item.platform}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-3">{item.content}</p>
                      
                      {item.comments > 0 && (
                        <div className="flex items-center text-sm text-gray-600">
                          <SafeIcon icon={FiMessageSquare} className="w-4 h-4 mr-1" />
                          {item.comments} komentar{item.comments > 1 ? 'a' : ''}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm flex items-center"
                      >
                        <SafeIcon icon={FiCheck} className="w-4 h-4 mr-1" />
                        Odobri
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center"
                      >
                        <SafeIcon icon={FiX} className="w-4 h-4 mr-1" />
                        Odbaci
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center"
                      >
                        <SafeIcon icon={FiEdit} className="w-4 h-4 mr-1" />
                        Uredi
                      </motion.button>
                    </div>
                    
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center">
                      <SafeIcon icon={FiEye} className="w-4 h-4 mr-1" />
                      Pregled
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Recent Comments */}
          {activeTab === 'comments' && (
            <div className="space-y-4">
              {recentComments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <SafeIcon icon={FiMessageSquare} className="w-5 h-5 text-gray-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{comment.postTitle}</h4>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{comment.time}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">{comment.author}:</span> {comment.comment}
                      </p>
                      
                      <div className="flex items-center space-x-3">
                        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                          Odgovori
                        </button>
                        <button className="text-sm text-gray-600 hover:text-gray-700">
                          Označi kao riješeno
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Comment Input */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <textarea
                      placeholder="Dodaj komentar..."
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                      rows="2"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border transition-all ${
                    !notification.read 
                      ? 'bg-primary-50 border-primary-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        !notification.read ? 'bg-primary-600' : 'bg-gray-400'
                      }`}></div>
                      <p className="text-sm text-gray-900">{notification.message}</p>
                    </div>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </motion.div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm font-medium"
              >
                Označi sve kao pročitano
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCollaboration;