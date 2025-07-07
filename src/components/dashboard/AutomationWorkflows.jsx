import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiZap, FiPlay, FiPause, FiSettings, FiPlus, FiClock, FiUsers, FiMessageCircle, FiTrendingUp } = FiIcons;

const AutomationWorkflows = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Dobrodošlica novi pratitelji',
      type: 'welcome',
      status: 'active',
      trigger: 'Novi pratitelj',
      actions: ['Pošalji DM', 'Dodaj u segment'],
      platforms: ['Instagram', 'Twitter'],
      performance: { triggered: 156, completed: 142, rate: 91.8 }
    },
    {
      id: 2,
      name: 'Auto-objava najboljih postova',
      type: 'repost',
      status: 'active',
      trigger: 'Visok angažman (>500 lajkova)',
      actions: ['Reposta na Story', 'Dodaj u highlights'],
      platforms: ['Instagram'],
      performance: { triggered: 23, completed: 23, rate: 100 }
    },
    {
      id: 3,
      name: 'Odgovor na komentare',
      type: 'response',
      status: 'paused',
      trigger: 'Ključne riječi u komentarima',
      actions: ['Automatski odgovor', 'Označi za pregled'],
      platforms: ['Facebook', 'Instagram'],
      performance: { triggered: 89, completed: 76, rate: 85.4 }
    },
    {
      id: 4,
      name: 'A/B test objava',
      type: 'testing',
      status: 'active',
      trigger: 'Zakazano vrijeme',
      actions: ['Objavi verziju A', 'Objavi verziju B', 'Analiziraj rezultate'],
      platforms: ['LinkedIn', 'Twitter'],
      performance: { triggered: 12, completed: 8, rate: 66.7 }
    }
  ]);

  const getWorkflowIcon = (type) => {
    switch (type) {
      case 'welcome': return FiUsers;
      case 'repost': return FiTrendingUp;
      case 'response': return FiMessageCircle;
      case 'testing': return FiZap;
      default: return FiZap;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'paused': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const toggleWorkflow = (id) => {
    setWorkflows(prev => prev.map(workflow => 
      workflow.id === id 
        ? { ...workflow, status: workflow.status === 'active' ? 'paused' : 'active' }
        : workflow
    ));
  };

  const automationTips = [
    {
      title: 'Optimalno vrijeme objave',
      description: 'AI je analizirao vašu publiku i preporučuje objavljivanje u 18:00-20:00',
      action: 'Stvori workflow',
      type: 'recommendation'
    },
    {
      title: 'Hashtag optimizacija',
      description: 'Dodajte trending hashtag #TechTrends2024 u vaše IT objave',
      action: 'Primijeni',
      type: 'suggestion'
    },
    {
      title: 'Audience segmentacija',
      description: '25% vaše publike je aktivno navečer - stvorite poseban segment',
      action: 'Stvori segment',
      type: 'insight'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Workflows List */}
      <div className="bg-white p-6 rounded-lg shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Automatizacija i workflow-ovi</h3>
            <p className="text-sm text-gray-600">Upravljajte automatiziranim procesima</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center text-sm"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
            Novi workflow
          </motion.button>
        </div>

        <div className="space-y-4">
          {workflows.map((workflow) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <SafeIcon icon={getWorkflowIcon(workflow.type)} className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{workflow.name}</h4>
                    <p className="text-sm text-gray-600">Trigger: {workflow.trigger}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                    {workflow.status === 'active' ? 'Aktivno' : workflow.status === 'paused' ? 'Pauzirano' : 'Neaktivno'}
                  </span>
                  
                  <button
                    onClick={() => toggleWorkflow(workflow.id)}
                    className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <SafeIcon icon={workflow.status === 'active' ? FiPause : FiPlay} className="w-4 h-4" />
                  </button>
                  
                  <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                    <SafeIcon icon={FiSettings} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Akcije</p>
                  <div className="flex flex-wrap gap-1">
                    {workflow.actions.map((action, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Platforme</p>
                  <div className="flex flex-wrap gap-1">
                    {workflow.platforms.map((platform, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Performanse</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-700">
                      {workflow.performance.completed}/{workflow.performance.triggered}
                    </span>
                    <span className={`font-medium ${
                      workflow.performance.rate > 80 ? 'text-green-600' : 
                      workflow.performance.rate > 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {workflow.performance.rate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    workflow.performance.rate > 80 ? 'bg-green-500' : 
                    workflow.performance.rate > 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${workflow.performance.rate}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Automation Tips */}
      <div className="bg-white p-6 rounded-lg shadow-card">
        <div className="flex items-center mb-4">
          <SafeIcon icon={FiZap} className="w-5 h-5 text-yellow-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">AI preporuke za automatizaciju</h3>
        </div>
        
        <div className="space-y-3">
          {automationTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-3 py-1 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
              >
                {tip.action}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Setup Templates */}
      <div className="bg-white p-6 rounded-lg shadow-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Brzo postavljanje</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Welcome Series', description: 'Automatska dobrodošlica za nove pratitelje', icon: FiUsers },
            { name: 'Content Recycling', description: 'Ponovna objava uspješnog sadržaja', icon: FiTrendingUp },
            { name: 'Comment Management', description: 'Automatsko upravljanje komentarima', icon: FiMessageCircle },
            { name: 'Optimal Timing', description: 'Objavljivanje u optimalna vremena', icon: FiClock },
            { name: 'Hashtag Automation', description: 'Automatsko dodavanje hashtag-ova', icon: FiZap },
            { name: 'Cross-posting', description: 'Sinkronizirana objava na više platformi', icon: FiSettings }
          ].map((template, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <SafeIcon icon={template.icon} className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="font-medium text-gray-900">{template.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <button className="w-full py-2 px-3 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors text-sm font-medium">
                Postavi workflow
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationWorkflows;