import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MetricCard from '../components/dashboard/MetricCard';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import PlatformOverview from '../components/dashboard/PlatformOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import QuickActions from '../components/dashboard/QuickActions';
import PerformanceOverview from '../components/dashboard/PerformanceOverview';
import ContentCalendar from '../components/dashboard/ContentCalendar';
import AutomationWorkflows from '../components/dashboard/AutomationWorkflows';
import CompetitorTracking from '../components/dashboard/CompetitorTracking';
import TeamCollaboration from '../components/dashboard/TeamCollaboration';
import CommunityManagement from '../components/dashboard/CommunityManagement';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGrid, FiBarChart3, FiCalendar, FiZap, FiUsers, FiMessageCircle, FiEye } = FiIcons;

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  const views = [
    { id: 'overview', name: 'Pregled', icon: FiGrid },
    { id: 'performance', name: 'Performanse', icon: FiBarChart3 },
    { id: 'calendar', name: 'Kalendar', icon: FiCalendar },
    { id: 'automation', name: 'Automatizacija', icon: FiZap },
    { id: 'competitors', name: 'Konkurencija', icon: FiEye },
    { id: 'team', name: 'Tim', icon: FiUsers },
    { id: 'community', name: 'Zajednica', icon: FiMessageCircle }
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return (
          <>
            <QuickActions />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Ukupni doseg"
                value="125.4K"
                change="+12.5%"
                trend="up"
                icon="reach"
              />
              <MetricCard
                title="Angažman"
                value="8.2K"
                change="+8.1%"
                trend="up"
                icon="engagement"
              />
              <MetricCard
                title="Klikovi"
                value="3.1K"
                change="+15.3%"
                trend="up"
                icon="clicks"
              />
              <MetricCard
                title="Konverzije"
                value="234"
                change="-2.4%"
                trend="down"
                icon="conversions"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PlatformOverview />
              </div>
              <div>
                <AIRecommendations />
              </div>
            </div>

            <RecentActivity />
          </>
        );
      case 'performance':
        return <PerformanceOverview />;
      case 'calendar':
        return <ContentCalendar />;
      case 'automation':
        return <AutomationWorkflows />;
      case 'competitors':
        return <CompetitorTracking />;
      case 'team':
        return <TeamCollaboration />;
      case 'community':
        return <CommunityManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Centralna kontrolna ploča za sve aspekte društvenih mreža</p>
          </div>
        </div>

        {/* View Selector */}
        <div className="bg-white p-2 rounded-lg shadow-card mb-6">
          <div className="flex flex-wrap gap-2">
            {views.map((view) => (
              <motion.button
                key={view.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveView(view.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeView === view.id
                    ? 'bg-primary-100 text-primary-800 border border-primary-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <SafeIcon icon={view.icon} className="w-4 h-4 mr-2" />
                {view.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {renderActiveView()}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;