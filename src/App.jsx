import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import QuickActions from './components/common/QuickActions';
import KeyboardShortcuts from './components/common/KeyboardShortcuts';

// Pages
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Scheduler from './pages/Scheduler';
import Analytics from './pages/Analytics';
import ContentGenerator from './pages/ContentGenerator';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <KeyboardShortcuts />
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="p-4 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/planer/*" element={<Scheduler />} />
                <Route path="/analitika/*" element={<Analytics />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/content" element={<ContentGenerator />} />
                <Route path="/settings" element={<Settings />} />
                {/* Fallback routes for new navigation structure */}
                <Route path="/inbox/*" element={<Dashboard />} />
                <Route path="/automatizacija/*" element={<Dashboard />} />
                <Route path="/platforme/*" element={<Settings />} />
                <Route path="/kreativni/*" element={<ContentGenerator />} />
                <Route path="/tim/*" element={<Settings />} />
                <Route path="/istrazivanje/*" element={<Analytics />} />
                <Route path="/podesavanja" element={<Settings />} />
                <Route path="/pomoc" element={<Settings />} />
              </Routes>
            </motion.div>
          </main>
        </div>
        <QuickActions />
      </div>
    </Router>
  );
}

export default App;