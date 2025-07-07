import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import MetricCard from '../components/dashboard/MetricCard';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiFilter, FiTrendingUp } = FiIcons;

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const engagementData = [
    { name: 'Pon', value: 2400, reach: 4000, clicks: 800 },
    { name: 'Uto', value: 1398, reach: 3000, clicks: 600 },
    { name: 'Sri', value: 9800, reach: 2000, clicks: 1200 },
    { name: 'Čet', value: 3908, reach: 2780, clicks: 900 },
    { name: 'Pet', value: 4800, reach: 1890, clicks: 1100 },
    { name: 'Sub', value: 3800, reach: 2390, clicks: 850 },
    { name: 'Ned', value: 4300, reach: 3490, clicks: 950 },
  ];

  const platformData = [
    { name: 'Instagram', value: 45, color: '#E4405F' },
    { name: 'TikTok', value: 25, color: '#000000' },
    { name: 'LinkedIn', value: 20, color: '#0077B5' },
    { name: 'X (Twitter)', value: 10, color: '#1DA1F2' },
  ];

  const campaignPerformance = [
    { name: 'Ljetna promocija', impressions: 45000, clicks: 2800, conversions: 340 },
    { name: 'Brendiranje', impressions: 32000, clicks: 1900, conversions: 180 },
    { name: 'Proizvod tjedna', impressions: 28000, clicks: 2100, conversions: 290 },
    { name: 'Newsletter', impressions: 15000, clicks: 1200, conversions: 150 },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Analitika</h1>
            <p className="text-gray-600">Detaljni pregled performansi vaših kampanja</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7d">Zadnjih 7 dana</option>
              <option value="30d">Zadnjih 30 dana</option>
              <option value="90d">Zadnjih 90 dana</option>
              <option value="1y">Zadnja godina</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
            >
              <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
              Izvoz
            </motion.button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Ukupni doseg"
            value="145.2K"
            change="+18.5%"
            trend="up"
            icon="reach"
          />
          <MetricCard
            title="Angažman"
            value="12.4K"
            change="+12.3%"
            trend="up"
            icon="engagement"
          />
          <MetricCard
            title="Klikovi"
            value="4.8K"
            change="+25.1%"
            trend="up"
            icon="clicks"
          />
          <MetricCard
            title="Konverzije"
            value="389"
            change="+8.7%"
            trend="up"
            icon="conversions"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Engagement Trend */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Trend angažmana</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedMetric('engagement')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedMetric === 'engagement'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Angažman
                </button>
                <button
                  onClick={() => setSelectedMetric('reach')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedMetric === 'reach'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Doseg
                </button>
                <button
                  onClick={() => setSelectedMetric('clicks')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedMetric === 'clicks'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Klikovi
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey={selectedMetric === 'engagement' ? 'value' : selectedMetric}
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Platform Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Raspodjela po platformama</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white p-6 rounded-lg shadow-card mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performanse kampanja</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="impressions" fill="#0ea5e9" name="Prikazi" />
              <Bar dataKey="clicks" fill="#10b981" name="Klikovi" />
              <Bar dataKey="conversions" fill="#f59e0b" name="Konverzije" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Insights */}
        <div className="bg-white p-6 rounded-lg shadow-card">
          <div className="flex items-center mb-4">
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">AI Uvidi i preporuke</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Najbolje performanse</h4>
              <p className="text-sm text-green-700">
                Instagram objave u 18:00 imaju 35% veći angažman od prosjeka
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Optimizacija budžeta</h4>
              <p className="text-sm text-blue-700">
                Preporučujemo povećanje budžeta za TikTok kampanje za 25%
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">Nova publika</h4>
              <p className="text-sm text-purple-700">
                Segment 25-34 godina pokazuje visok potencijal za konverzije
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;