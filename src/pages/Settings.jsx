import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiBell, FiCreditCard, FiUsers, FiLink, FiSave, FiTrash2, FiPlus } = FiIcons;

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    campaigns: true,
    analytics: true
  });

  const tabs = [
    { id: 'account', name: 'Račun', icon: FiUser },
    { id: 'security', name: 'Sigurnost', icon: FiLock },
    { id: 'notifications', name: 'Obavijesti', icon: FiBell },
    { id: 'billing', name: 'Naplata', icon: FiCreditCard },
    { id: 'team', name: 'Tim', icon: FiUsers },
    { id: 'integrations', name: 'Integracije', icon: FiLink },
  ];

  const connectedAccounts = [
    { id: 1, platform: 'Instagram', username: '@moj_brend', connected: true, followers: '12.5K' },
    { id: 2, platform: 'TikTok', username: '@moj_brend', connected: true, followers: '8.2K' },
    { id: 3, platform: 'LinkedIn', username: 'Moj Brend', connected: false, followers: '0' },
    { id: 4, platform: 'X (Twitter)', username: '@moj_brend', connected: true, followers: '5.1K' },
  ];

  const teamMembers = [
    { id: 1, name: 'Ana Marić', email: 'ana@example.com', role: 'Admin', avatar: null },
    { id: 2, name: 'Marko Petrović', email: 'marko@example.com', role: 'Editor', avatar: null },
    { id: 3, name: 'Petra Novak', email: 'petra@example.com', role: 'Viewer', avatar: null },
  ];

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Postavke</h1>
            <p className="text-gray-600">Upravljajte vašim računom i preferencijama</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-card p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-4 h-4 mr-3" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-card p-6">
              {/* Account Settings */}
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Postavke računa</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ime
                      </label>
                      <input
                        type="text"
                        defaultValue="Ana Marić"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="ana@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Naziv tvrtke
                    </label>
                    <input
                      type="text"
                      defaultValue="Moj Brend d.o.o."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vremenska zona
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Europe/Zagreb</option>
                      <option>Europe/Berlin</option>
                      <option>Europe/London</option>
                      <option>America/New_York</option>
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                    >
                      <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />
                      Spremi promjene
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Sigurnosne postavke</h3>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Promjena lozinke</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Trenutna lozinka
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nova lozinka
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Potvrdi novu lozinku
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium text-gray-900 mb-4">Dvofaktorska autentifikacija</h4>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">2FA nije omogućena</p>
                        <p className="text-sm text-gray-600">Dodajte dodatni sloj sigurnosti vašem računu</p>
                      </div>
                      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                        Omogući 2FA
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Obavijesti</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Email obavijesti</p>
                        <p className="text-sm text-gray-600">Primajte obavijesti putem emaila</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.email}
                          onChange={() => handleNotificationChange('email')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Push obavijesti</p>
                        <p className="text-sm text-gray-600">Primajte obavijesti u pregledniku</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.push}
                          onChange={() => handleNotificationChange('push')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Kampanje</p>
                        <p className="text-sm text-gray-600">Obavijesti o statusu kampanja</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.campaigns}
                          onChange={() => handleNotificationChange('campaigns')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Integrations */}
              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Integracije</h3>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Povezani računi</h4>
                    <div className="space-y-3">
                      {connectedAccounts.map((account) => (
                        <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm font-medium">{account.platform[0]}</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{account.platform}</p>
                              <p className="text-sm text-gray-600">
                                {account.connected ? account.username : 'Nije povezano'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            {account.connected && (
                              <span className="text-sm text-gray-600">{account.followers}</span>
                            )}
                            <button
                              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                account.connected
                                  ? 'bg-red-100 text-red-800 hover:bg-red-200'
                                  : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
                              }`}
                            >
                              {account.connected ? 'Prekini' : 'Poveži'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Team Management */}
              {activeTab === 'team' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Upravljanje timom</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                    >
                      <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
                      Pozovi člana
                    </motion.button>
                  </div>
                  
                  <div className="space-y-3">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{member.name[0]}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                            {member.role}
                          </span>
                          <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;