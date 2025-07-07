import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiEye, FiTrendingUp, FiTrendingDown, FiHeart, FiMessageCircle, FiShare2, FiPlus, FiFilter } = FiIcons;

const CompetitorTracking = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');

  const competitors = [
    {
      id: 'comp1',
      name: 'TechRival',
      username: '@techrival',
      platform: 'linkedin',
      followers: 45600,
      change: '+2.3%',
      trend: 'up',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 'comp2',
      name: 'InnovateCorp',
      username: '@innovatecorp',
      platform: 'instagram',
      followers: 32800,
      change: '-1.2%',
      trend: 'down',
      avatar: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 'comp3',
      name: 'FutureTech',
      username: '@futuretech',
      platform: 'twitter',
      followers: 28900,
      change: '+5.7%',
      trend: 'up',
      avatar: 'https://images.unsplash.com/photo-1553028826-f4804151e2e2?w=40&h=40&fit=crop&crop=face'
    }
  ];

  const competitorData = [
    { date: 'Pon', techrival: 1200, innovatecorp: 980, futuretech: 1100, us: 1350 },
    { date: 'Uto', techrival: 1350, innovatecorp: 1100, futuretech: 950, us: 1420 },
    { date: 'Sri', techrival: 980, innovatecorp: 1250, futuretech: 1300, us: 1580 },
    { date: 'Čet', techrival: 1100, innovatecorp: 890, futuretech: 1180, us: 1320 },
    { date: 'Pet', techrival: 1450, innovatecorp: 1320, futuretech: 1400, us: 1650 },
    { date: 'Sub', techrival: 1200, innovatecorp: 1150, futuretech: 1050, us: 1480 },
    { date: 'Ned', techrival: 1380, innovatecorp: 1280, futuretech: 1220, us: 1590 }
  ];

  const trendingTopics = [
    { topic: '#AIRevolution', mentions: 1250, change: '+23%', sentiment: 'positive' },
    { topic: '#TechTrends2024', mentions: 890, change: '+15%', sentiment: 'positive' },
    { topic: '#DigitalTransformation', mentions: 670, change: '-5%', sentiment: 'neutral' },
    { topic: '#Innovation', mentions: 540, change: '+8%', sentiment: 'positive' },
    { topic: '#Sustainability', mentions: 420, change: '+12%', sentiment: 'positive' }
  ];

  const competitorPosts = [
    {
      id: 1,
      competitor: 'TechRival',
      content: 'Excited to announce our new AI-powered analytics dashboard! 🚀',
      engagement: 156,
      time: '2 sata',
      platform: 'linkedin',
      sentiment: 'positive'
    },
    {
      id: 2,
      competitor: 'InnovateCorp',
      content: 'Check out our latest blog post on digital transformation trends...',
      engagement: 89,
      time: '4 sata',
      platform: 'instagram',
      sentiment: 'neutral'
    },
    {
      id: 3,
      competitor: 'FutureTech',
      content: 'Join us at the upcoming tech conference! Early bird tickets available.',
      engagement: 203,
      time: '6 sati',
      platform: 'twitter',
      sentiment: 'positive'
    }
  ];

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-100';
      case 'negative': return 'text-red-600 bg-red-100';
      case 'neutral': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'linkedin': return 'bg-blue-600';
      case 'instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'twitter': return 'bg-blue-400';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Competitor Overview */}
      <div className="bg-white p-6 rounded-lg shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Praćenje konkurencije</h3>
            <p className="text-sm text-gray-600">Analizirajte konkurentske strategije</p>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7d">Zadnjih 7 dana</option>
              <option value="30d">Zadnjih 30 dana</option>
              <option value="90d">Zadnjih 90 dana</option>
            </select>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center text-sm"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
              Dodaj konkurenta
            </motion.button>
          </div>
        </div>

        {/* Competitor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {competitors.map((competitor) => (
            <motion.div
              key={competitor.id}
              whileHover={{ scale: 1.02 }}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={competitor.avatar}
                    alt={competitor.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{competitor.name}</h4>
                    <p className="text-sm text-gray-600">{competitor.username}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${getPlatformColor(competitor.platform)}`}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {competitor.followers.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Pratitelji</p>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  competitor.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <SafeIcon 
                    icon={competitor.trend === 'up' ? FiTrendingUp : FiTrendingDown} 
                    className="w-4 h-4 mr-1" 
                  />
                  {competitor.change}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement Comparison Chart */}
        <div className="h-80">
          <h4 className="font-medium text-gray-900 mb-4">Usporedba angažmana</h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={competitorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line type="monotone" dataKey="us" stroke="#0ea5e9" strokeWidth={3} name="Mi" />
              <Line type="monotone" dataKey="techrival" stroke="#ef4444" strokeWidth={2} name="TechRival" />
              <Line type="monotone" dataKey="innovatecorp" stroke="#f59e0b" strokeWidth={2} name="InnovateCorp" />
              <Line type="monotone" dataKey="futuretech" stroke="#10b981" strokeWidth={2} name="FutureTech" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending teme</h3>
          
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-900">{topic.topic}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getSentimentColor(topic.sentiment)}`}>
                      {topic.sentiment}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{topic.mentions.toLocaleString()} spominjanja</p>
                </div>
                
                <div className={`text-sm font-medium ${
                  topic.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {topic.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitor Posts */}
        <div className="bg-white p-6 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nedavne objave konkurenata</h3>
          
          <div className="space-y-4">
            {competitorPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{post.competitor}</h4>
                    <div className={`w-2 h-2 rounded-full ${getPlatformColor(post.platform)}`}></div>
                  </div>
                  <span className="text-xs text-gray-500">{post.time}</span>
                </div>
                
                <p className="text-sm text-gray-700 mb-3">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <SafeIcon icon={FiHeart} className="w-4 h-4 mr-1" />
                      {post.engagement}
                    </div>
                  </div>
                  
                  <span className={`px-2 py-1 rounded-full text-xs ${getSentimentColor(post.sentiment)}`}>
                    {post.sentiment}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full mt-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm font-medium"
          >
            Prikaži više objava
          </motion.button>
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Analiza konkurentnosti</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-green-900 mb-1">Vodimo u angažmanu</h4>
            <p className="text-sm text-green-700">23% veći engagement rate od prosjeka konkurenata</p>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <SafeIcon icon={FiEye} className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h4 className="font-medium text-yellow-900 mb-1">Prosječan doseg</h4>
            <p className="text-sm text-yellow-700">Možemo poboljšati reach optimizacijom vremena objave</p>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <SafeIcon icon={FiShare2} className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium text-blue-900 mb-1">Potencijal za rast</h4>
            <p className="text-sm text-blue-700">Video sadržaj pokazuje najveći potencijal za viralnost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorTracking;