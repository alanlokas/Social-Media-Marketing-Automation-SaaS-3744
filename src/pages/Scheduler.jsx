import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ScheduledPost from '../components/scheduler/ScheduledPost';
import CreatePostModal from '../components/scheduler/CreatePostModal';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiCalendar, FiList } = FiIcons;

const Scheduler = () => {
  const [view, setView] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const scheduledPosts = [
    {
      id: 1,
      title: 'Ljetni popust - Instagram Story',
      platform: 'Instagram',
      scheduledTime: new Date(2024, 1, 15, 10, 0),
      status: 'scheduled',
      content: 'Nove kolekcije stigle su! 🌟 Popust do 30% na sve proizvode.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Tjedni newsletter - LinkedIn',
      platform: 'LinkedIn',
      scheduledTime: new Date(2024, 1, 16, 14, 0),
      status: 'scheduled',
      content: 'Tjedni pregled trendova u industriji i naši najnoviji insights.',
      image: null
    },
    {
      id: 3,
      title: 'Proizvod dana - TikTok',
      platform: 'TikTok',
      scheduledTime: new Date(2024, 1, 17, 18, 0),
      status: 'scheduled',
      content: 'Pogledajte naš najnoviji proizvod u akciji! #trending',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
    }
  ];

  const getPostsForDate = (date) => {
    return scheduledPosts.filter(post => 
      post.scheduledTime.toDateString() === date.toDateString()
    );
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Planer objava</h1>
            <p className="text-gray-600">Planirajte i upravljajte vašim objavama</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('calendar')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  view === 'calendar'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1 inline" />
                Kalendar
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  view === 'list'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <SafeIcon icon={FiList} className="w-4 h-4 mr-1 inline" />
                Lista
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
              Nova objava
            </motion.button>
          </div>
        </div>

        {view === 'calendar' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  className="w-full"
                  tileContent={({ date }) => {
                    const posts = getPostsForDate(date);
                    return posts.length > 0 ? (
                      <div className="flex justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                    ) : null;
                  }}
                />
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Objave za {selectedDate.toLocaleDateString()}
                </h3>
                <div className="space-y-3">
                  {getPostsForDate(selectedDate).map((post) => (
                    <ScheduledPost key={post.id} post={post} compact />
                  ))}
                  {getPostsForDate(selectedDate).length === 0 && (
                    <p className="text-gray-500 text-sm">Nema zakazanih objava za ovaj dan.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-card">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sve zakazane objave</h3>
              <div className="space-y-4">
                {scheduledPosts.map((post) => (
                  <ScheduledPost key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {showModal && (
        <CreatePostModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Scheduler;