import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiEdit, FiImage, FiHash, FiCopy, FiRefreshCw, FiSave } = FiIcons;

const ContentGenerator = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const contentTypes = [
    { id: 'text', name: 'Tekst', icon: FiEdit },
    { id: 'image', name: 'Slika', icon: FiImage },
    { id: 'hashtags', name: 'Hashtagovi', icon: FiHash },
  ];

  const templates = [
    { id: 1, name: 'Promocijska objava', category: 'Marketing', prompt: 'Stvori promocijsku objavu za novi proizvod' },
    { id: 2, name: 'Informativni post', category: 'Edukacija', prompt: 'Napiši informativnu objavu o trendovima u industriji' },
    { id: 3, name: 'Interaktivna objava', category: 'Angažman', prompt: 'Stvori objavu koja potiče interakciju s publikom' },
    { id: 4, name: 'Storytelling', category: 'Brend', prompt: 'Napiši priču o brendu koja povezuje s publikom' },
  ];

  const sampleHashtags = [
    '#marketing', '#socialmedia', '#digitalmarketing', '#branding', '#content',
    '#engagement', '#trending', '#business', '#innovation', '#growth',
    '#strategy', '#influence', '#creativity', '#success', '#inspiration'
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      if (activeTab === 'text') {
        setGeneratedContent(`🚀 Uzbudljiva novost! 

Predstavljamo vam našu najnoviju inovaciju koja će revolucionirati način kako pristupate digitalnom marketingu. 

✨ Ključne značajke:
• AI-pogonjene kampanje
• Automatizacija u stvarnom vremenu
• Personalizirani sadržaj
• Detaljne analitike

Pridružite se tisućama zadovoljnih korisnika koji već koriste našu platformu za postizanje nevjerojatnih rezultata!

#innovation #digitalmarketing #AI #automation #success`);
      } else if (activeTab === 'hashtags') {
        setGeneratedContent('#digitalmarketing #socialmedia #AI #automation #innovation #marketing #business #growth #success #trending #content #branding #strategy #influence #tech');
      }
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  const handleSave = () => {
    // Save to content library
    console.log('Saving content:', generatedContent);
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Generator sadržaja</h1>
            <p className="text-gray-600">Koristite AI za stvaranje visokokvalitetnog sadržaja</p>
          </div>
        </div>

        {/* Content Type Tabs */}
        <div className="bg-white p-6 rounded-lg shadow-card mb-6">
          <div className="flex space-x-1 mb-6">
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === type.id
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <SafeIcon icon={type.icon} className="w-4 h-4 mr-2" />
                {type.name}
              </button>
            ))}
          </div>

          {/* Text Generator */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opišite što želite generirati
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Npr. 'Stvori promocijsku objavu za novi proizvod koji pomaže u produktivnosti...'"
                />
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <SafeIcon icon={FiZap} className="w-4 h-4 mr-2" />
                  )}
                  {isGenerating ? 'Generiranje...' : 'Generiraj sadržaj'}
                </motion.button>
              </div>
            </div>
          )}

          {/* Hashtag Generator */}
          {activeTab === 'hashtags' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tema ili ključne riječi
                </label>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Npr. 'fitness, zdravlje, motivacija'"
                />
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <SafeIcon icon={FiHash} className="w-4 h-4 mr-2" />
                  )}
                  {isGenerating ? 'Generiranje...' : 'Generiraj hashtagove'}
                </motion.button>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Popularni hashtagovi</h4>
                <div className="flex flex-wrap gap-2">
                  {sampleHashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                      onClick={() => setPrompt(prev => prev + ' ' + hashtag)}
                    >
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Image Generator */}
          {activeTab === 'image' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opišite sliku koju želite generirati
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Npr. 'Moderna kancelarija s laptopom, minimalističan dizajn, prirodno svjetlo...'"
                />
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <SafeIcon icon={FiImage} className="w-4 h-4 mr-2" />
                  )}
                  {isGenerating ? 'Generiranje...' : 'Generiraj sliku'}
                </motion.button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>Savjet:</strong> Budite specifični u opisu - uključite stil, boje, objekte i atmosferu koju želite.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Templates */}
        <div className="bg-white p-6 rounded-lg shadow-card mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Predlošci</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <motion.div
                key={template.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setPrompt(template.prompt)}
                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                    {template.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{template.prompt}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Generated Content */}
        {generatedContent && (
          <div className="bg-white p-6 rounded-lg shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Generirani sadržaj</h3>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center text-sm"
                >
                  <SafeIcon icon={FiCopy} className="w-4 h-4 mr-1" />
                  Kopiraj
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="px-3 py-1 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors flex items-center text-sm"
                >
                  <SafeIcon icon={FiSave} className="w-4 h-4 mr-1" />
                  Spremi
                </motion.button>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm text-gray-900 font-sans">
                {generatedContent}
              </pre>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContentGenerator;