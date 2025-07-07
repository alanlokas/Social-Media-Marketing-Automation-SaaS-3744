import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCalendar, FiPlus, FiEdit, FiImage, FiVideo, FiFileText, FiClock, FiMove } = FiIcons;

const ContentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week');
  const [draggedItem, setDraggedItem] = useState(null);

  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Ljetna promocija - Instagram Story',
      type: 'story',
      platform: 'instagram',
      scheduledTime: '10:00',
      scheduledDay: 0, // Monday
      status: 'scheduled',
      content: 'Nova kolekcija je stigla! 🌟',
      mediaType: 'image'
    },
    {
      id: '2',
      title: 'Product showcase - TikTok video',
      type: 'video',
      platform: 'tiktok',
      scheduledTime: '14:30',
      scheduledDay: 1, // Tuesday
      status: 'draft',
      content: 'Pogledajte naš najnoviji proizvod...',
      mediaType: 'video'
    },
    {
      id: '3',
      title: 'Industry insights - LinkedIn post',
      type: 'post',
      platform: 'linkedin',
      scheduledTime: '09:15',
      scheduledDay: 2, // Wednesday
      status: 'approved',
      content: 'Najnoviji trendovi u industriji...',
      mediaType: 'text'
    }
  ]);

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const weekDays = [
    'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 
    'Petak', 'Subota', 'Nedjelja'
  ];

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'tiktok': return 'bg-black';
      case 'linkedin': return 'bg-blue-600';
      case 'twitter': return 'bg-blue-400';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'published': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMediaIcon = (mediaType) => {
    switch (mediaType) {
      case 'image': return FiImage;
      case 'video': return FiVideo;
      case 'text': return FiFileText;
      default: return FiFileText;
    }
  };

  const handleDrop = (dayIndex, timeSlot) => {
    if (draggedItem) {
      setPosts(prev => prev.map(post => 
        post.id === draggedItem.id 
          ? { ...post, scheduledDay: dayIndex, scheduledTime: timeSlot }
          : post
      ));
      setDraggedItem(null);
    }
  };

  const getPostsForTimeSlot = (dayIndex, timeSlot) => {
    return posts.filter(post => 
      post.scheduledDay === dayIndex && 
      post.scheduledTime.startsWith(timeSlot.split(':')[0])
    );
  };

  const PostCard = ({ post, compact = false }) => (
    <motion.div
      draggable
      onDragStart={() => setDraggedItem(post)}
      onDragEnd={() => setDraggedItem(null)}
      whileHover={{ scale: 1.02 }}
      className={`cursor-move ${compact ? 'p-2' : 'p-3'} rounded-md shadow-sm ${getPlatformColor(post.platform)} text-white text-xs relative group`}
    >
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <SafeIcon icon={FiMove} className="w-3 h-3 text-white" />
      </div>
      
      <div className="flex items-center justify-between mb-1">
        <SafeIcon icon={getMediaIcon(post.mediaType)} className="w-3 h-3" />
        <span className="text-xs opacity-75">{post.scheduledTime}</span>
      </div>
      
      <p className="font-medium truncate">{post.title}</p>
      
      {!compact && (
        <span className={`inline-block px-1 py-0.5 rounded text-xs mt-1 ${getStatusColor(post.status)}`}>
          {post.status}
        </span>
      )}
    </motion.div>
  );

  const DropZone = ({ dayIndex, timeSlot, children }) => (
    <div
      className={`h-20 border-2 border-dashed rounded-lg p-2 transition-colors ${
        draggedItem ? 'border-primary-400 bg-primary-50' : 'border-gray-200'
      }`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleDrop(dayIndex, timeSlot);
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-card">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Kalendar sadržaja</h3>
          <p className="text-sm text-gray-600">Planirajte i organizirajte objave</p>
        </div>
        
        <div className="flex items-center gap-3 mt-4 lg:mt-0">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'week'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tjedan
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'month'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mjesec
            </button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center text-sm"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
            Nova objava
          </motion.button>
        </div>
      </div>

      {viewMode === 'week' ? (
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-4 min-w-[800px]">
            {/* Time column */}
            <div className="space-y-4">
              <div className="h-12"></div> {/* Header space */}
              {timeSlots.map(time => (
                <div key={time} className="h-20 flex items-center justify-center text-sm text-gray-500 font-medium">
                  {time}
                </div>
              ))}
            </div>

            {/* Day columns */}
            {weekDays.map((day, dayIndex) => (
              <div key={day} className="space-y-4">
                <div className="h-12 flex items-center justify-center bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900 text-sm">{day}</span>
                </div>
                
                <div className="space-y-2">
                  {timeSlots.map((time) => {
                    const postsInSlot = getPostsForTimeSlot(dayIndex, time);
                    
                    return (
                      <DropZone key={time} dayIndex={dayIndex} timeSlot={time}>
                        {postsInSlot.map((post) => (
                          <PostCard key={post.id} post={post} compact />
                        ))}
                      </DropZone>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Month view */
        <div className="grid grid-cols-7 gap-2">
          {/* Month header */}
          {['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'].map(day => (
            <div key={day} className="p-2 text-center font-medium text-gray-600 text-sm">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {Array.from({ length: 35 }, (_, i) => i + 1).map(day => (
            <div key={day} className="aspect-square border border-gray-200 rounded-lg p-2">
              <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
              {day <= 7 && posts.slice(0, Math.floor(Math.random() * 3)).map((post, index) => (
                <div 
                  key={index}
                  className={`text-xs p-1 rounded mb-1 ${getPlatformColor(post.platform)} text-white truncate`}
                >
                  {post.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-100 rounded"></div>
          <span className="text-xs text-gray-600">Zakazano</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-100 rounded"></div>
          <span className="text-xs text-gray-600">Nacrt</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-100 rounded"></div>
          <span className="text-xs text-gray-600">Odobreno</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-100 rounded"></div>
          <span className="text-xs text-gray-600">Objavljeno</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <SafeIcon icon={FiMove} className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-600">Povucite za premještanje</span>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;