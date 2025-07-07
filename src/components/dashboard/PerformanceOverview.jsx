import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiFilter, FiTrendingUp, FiUsers, FiEye, FiHeart, FiMousePointer } = FiIcons;

const PerformanceOverview = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const performanceData = [
    { date: 'Pon', followers: 12500, engagement: 850, reach: 15600, clicks: 420, conversions: 24 },
    { date: 'Uto', followers: 12580, engagement: 920, reach: 16200, clicks: 380, conversions: 28 },
    { date: 'Sri', followers: 12650, engagement: 1100, reach: 18500, clicks: 520, conversions: 35 },
    { date: 'Čet', followers: 12720, engagement: 890, reach: 14800, clicks: 340, conversions: 22 },
    { date: 'Pet', followers: 12800, engagement: 1250, reach: 20100, clicks: 680, conversions: 42 },
    { date: 'Sub', followers: 12890, engagement: 980, reach: 17300, clicks: 450, conversions: 31 },
    { date: 'Ned', followers: 12950, engagement: 1180, reach: 19800, clicks: 590, conversions: 38 }
  ];

  const platforms = [
    { id: 'all', name: 'Sve platforme', color: '#0ea5e9' },
    { id: 'instagram', name: 'Instagram', color: '#E4405F' },
    { id: 'tiktok', name: 'TikTok', color: '#000000' },
    { id: 'linkedin', name: 'LinkedIn', color: '#0077B5' },
    { id: 'twitter', name: 'X (Twitter)', color: '#1DA1F2' }
  ];

  const metrics = [
    { id: 'engagement', name: 'Angažman', icon: FiHeart, color: '#E4405F' },
    { id: 'reach', name: 'Doseg', icon: FiEye, color: '#0ea5e9' },
    { id: 'clicks', name: 'Klikovi', icon: FiMousePointer, color: '#10b981' },
    { id: 'followers', name: 'Pratitelji', icon: FiUsers, color: '#f59e0b' }
  ];

  const getCurrentMetricData = () => {
    return performanceData.map(item => ({
      ...item,
      value: item[selectedMetric]
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-card">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Pregled performansi</h3>
          <p className="text-sm text-gray-600">Praćenje ključnih metrika u stvarnom vremenu</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {platforms.map(platform => (
              <option key={platform.id} value={platform.id}>{platform.name}</option>
            ))}
          </select>
          
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="7d">Zadnjih 7 dana</option>
            <option value="30d">Zadnjih 30 dana</option>
            <option value="90d">Zadnjih 90 dana</option>
          </select>
        </div>
      </div>

      {/* Metric Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {metrics.map(metric => (
          <motion.button
            key={metric.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedMetric(metric.id)}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedMetric === metric.id
                ? 'bg-primary-100 text-primary-800 border border-primary-200'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <SafeIcon 
              icon={metric.icon} 
              className={`w-4 h-4 mr-2 ${
                selectedMetric === metric.id ? 'text-primary-600' : 'text-gray-500'
              }`} 
            />
            {metric.name}
          </motion.button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={getCurrentMetricData()}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="date" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={metrics.find(m => m.id === selectedMetric)?.color || '#0ea5e9'}
              fill={metrics.find(m => m.id === selectedMetric)?.color || '#0ea5e9'}
              fillOpacity={0.1}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">
            {performanceData[performanceData.length - 1]?.engagement?.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Ukupni angažman</p>
          <div className="flex items-center justify-center mt-1">
            <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-500 mr-1" />
            <span className="text-xs text-green-600">+12.5%</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">
            {performanceData[performanceData.length - 1]?.reach?.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Doseg</p>
          <div className="flex items-center justify-center mt-1">
            <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-500 mr-1" />
            <span className="text-xs text-green-600">+8.3%</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">
            {performanceData[performanceData.length - 1]?.clicks?.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Klikovi</p>
          <div className="flex items-center justify-center mt-1">
            <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-500 mr-1" />
            <span className="text-xs text-green-600">+15.7%</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">
            {performanceData[performanceData.length - 1]?.conversions?.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Konverzije</p>
          <div className="flex items-center justify-center mt-1">
            <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-500 mr-1" />
            <span className="text-xs text-green-600">+22.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;