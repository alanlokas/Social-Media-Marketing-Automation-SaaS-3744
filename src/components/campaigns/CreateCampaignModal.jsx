import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX, FiCheck } = FiIcons;

const CreateCampaignModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    name: '',
    platforms: [],
    objective: '',
    budget: '',
    duration: '',
    targetAudience: ''
  });

  const platforms = [
    { id: 'instagram', name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'tiktok', name: 'TikTok', color: 'bg-black' },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' },
    { id: 'twitter', name: 'X (Twitter)', color: 'bg-blue-500' },
    { id: 'youtube', name: 'YouTube', color: 'bg-red-600' }
  ];

  const objectives = [
    'Povećanje svijesti o brendu',
    'Generiranje potencijalnih kupaca',
    'Povećanje prodaje',
    'Povećanje angažmana',
    'Povećanje prometa na web stranici'
  ];

  const handlePlatformToggle = (platformId) => {
    setCampaignData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platformId)
        ? prev.platforms.filter(p => p !== platformId)
        : [...prev.platforms, platformId]
    }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Campaign data:', campaignData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Nova kampanja</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiX} className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i <= step ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {i < step ? <SafeIcon icon={FiCheck} className="w-4 h-4" /> : i}
                </div>
                {i < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    i < step ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Osnovne informacije</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Naziv kampanje
                </label>
                <input
                  type="text"
                  value={campaignData.name}
                  onChange={(e) => setCampaignData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Unesite naziv kampanje"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cilj kampanje
                </label>
                <select
                  value={campaignData.objective}
                  onChange={(e) => setCampaignData(prev => ({ ...prev, objective: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Odaberite cilj</option>
                  {objectives.map((obj) => (
                    <option key={obj} value={obj}>{obj}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Platform Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Odaberite platforme</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <motion.div
                    key={platform.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePlatformToggle(platform.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      campaignData.platforms.includes(platform.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg ${platform.color} mr-3`} />
                      <span className="font-medium text-gray-900">{platform.name}</span>
                      {campaignData.platforms.includes(platform.id) && (
                        <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-600 ml-auto" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Budget & Duration */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Budžet i trajanje</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budžet (€)
                  </label>
                  <input
                    type="number"
                    value={campaignData.budget}
                    onChange={(e) => setCampaignData(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="1000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trajanje (dani)
                  </label>
                  <input
                    type="number"
                    value={campaignData.duration}
                    onChange={(e) => setCampaignData(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Target Audience */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Ciljna publika</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opis ciljne publike
                </label>
                <textarea
                  value={campaignData.targetAudience}
                  onChange={(e) => setCampaignData(prev => ({ ...prev, targetAudience: e.target.value }))}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Opišite vašu ciljnu publiku (dob, interesi, lokacija...)"
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`px-4 py-2 rounded-lg transition-colors ${
                step === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Prethodni
            </button>
            
            {step < 4 ? (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Sljedeći
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Stvori kampanju
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateCampaignModal;