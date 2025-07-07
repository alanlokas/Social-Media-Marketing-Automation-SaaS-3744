import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import SafeIcon from "../../common/SafeIcon";

const {
  FiHome,
  FiCalendar,
  FiBarChart3,
  FiMessageSquare,
  FiZap,
  FiSettings,
  FiHelpCircle,
  FiBell,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiUsers,
  FiSearch,
  FiImage,
  FiEye,
  FiEdit3,
  FiSmartphone,
} = FiIcons;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(["main"]);
  const [notifications] = useState(12);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const menuSections = [
    {
      id: "main",
      title: "Glavni workflow",
      items: [
        {
          name: "Dashboard",
          path: "/",
          icon: FiHome,
          badge: null,
          description: "Pregled performansi i aktivnosti",
        },
        {
          name: "Planer sadržaja",
          path: "/planer",
          icon: FiCalendar,
          badge: "3",
          description: "Kalendar i kreiranje objava",
          subItems: [
            { name: "Kalendar objava", path: "/planer/kalendar" },
            { name: "Kreator objava", path: "/planer/kreator" },
            { name: "Nacrti", path: "/planer/nacrti", badge: "5" },
            { name: "Zakazane objave", path: "/planer/zakazane" },
            { name: "Objavljeno", path: "/planer/objavljeno" },
          ],
        },
        {
          name: "Analitika",
          path: "/analitika",
          icon: FiBarChart3,
          badge: null,
          description: "Performanse i izvještaji",
          subItems: [
            { name: "Pregled performansi", path: "/analitika/pregled" },
            { name: "Engagement metrike", path: "/analitika/engagement" },
            { name: "Demografija publike", path: "/analitika/demografija" },
            { name: "Analiza konkurencije", path: "/analitika/konkurencija" },
            { name: "ROI tracking", path: "/analitika/roi" },
            { name: "Custom izvještaji", path: "/analitika/custom" },
          ],
        },
        {
          name: "Inbox",
          path: "/inbox",
          icon: FiMessageSquare,
          badge: "24",
          description: "Komentari, poruke i mentions",
          subItems: [
            { name: "Svi komentari", path: "/inbox/komentari" },
            { name: "Direktne poruke", path: "/inbox/poruke", badge: "8" },
            { name: "Mentions", path: "/inbox/mentions", badge: "3" },
            { name: "Reviews", path: "/inbox/reviews" },
            { name: "Neodgovoreno", path: "/inbox/neodgovoreno", badge: "13" },
            { name: "Archived", path: "/inbox/archived" },
          ],
        },
        {
          name: "Automatizacija",
          path: "/automatizacija",
          icon: FiZap,
          badge: "NEW",
          description: "Workflow-ovi i auto-odgovori",
          subItems: [
            { name: "Workflow builder", path: "/automatizacija/workflow" },
            { name: "Auto-odgovori", path: "/automatizacija/odgovori" },
            {
              name: "Pravilnik objavljivanja",
              path: "/automatizacija/pravilnik",
            },
            { name: "Trigger-i i akcije", path: "/automatizacija/triggeri" },
            { name: "A/B testovi", path: "/automatizacija/ab-test" },
          ],
        },
      ],
    },
    {
      id: "platforms",
      title: "Platforme",
      items: [
        {
          name: "Platforme",
          path: "/platforme",
          icon: FiSmartphone,
          badge: null,
          subItems: [
            {
              name: "Facebook",
              path: "/platforme/facebook",
              status: "connected",
            },
            {
              name: "Instagram",
              path: "/platforme/instagram",
              status: "connected",
            },
            {
              name: "Twitter/X",
              path: "/platforme/twitter",
              status: "connected",
            },
            {
              name: "LinkedIn",
              path: "/platforme/linkedin",
              status: "disconnected",
            },
            { name: "TikTok", path: "/platforme/tiktok", status: "connected" },
            {
              name: "YouTube",
              path: "/platforme/youtube",
              status: "disconnected",
            },
            {
              name: "Pinterest",
              path: "/platforme/pinterest",
              status: "disconnected",
            },
          ],
        },
      ],
    },
    {
      id: "creative",
      title: "Kreativni alati",
      items: [
        {
          name: "Kreativni alati",
          path: "/kreativni",
          icon: FiImage,
          badge: null,
          subItems: [
            { name: "Biblioteka medija", path: "/kreativni/biblioteka" },
            { name: "Grafički editor", path: "/kreativni/editor" },
            { name: "Template-i", path: "/kreativni/templates" },
            { name: "Brand assets", path: "/kreativni/brand" },
            { name: "Stock photos", path: "/kreativni/stock" },
            { name: "Video editor", path: "/kreativni/video" },
          ],
        },
      ],
    },
    {
      id: "team",
      title: "Tim i istraživanje",
      items: [
        {
          name: "Tim",
          path: "/tim",
          icon: FiUsers,
          badge: null,
          subItems: [
            { name: "Članovi tima", path: "/tim/clanovi" },
            { name: "Uloge i dozvole", path: "/tim/uloge" },
            {
              name: "Workflow odobravanje",
              path: "/tim/odobravanje",
              badge: "2",
            },
            { name: "Aktivnosti tima", path: "/tim/aktivnosti" },
            { name: "Notifikacije", path: "/tim/notifikacije" },
          ],
        },
        {
          name: "Istraživanje",
          path: "/istrazivanje",
          icon: FiSearch,
          badge: null,
          subItems: [
            { name: "Trending topics", path: "/istrazivanje/trending" },
            { name: "Hashtag analyzer", path: "/istrazivanje/hashtags" },
            { name: "Competitor tracking", path: "/istrazivanje/konkurenti" },
            { name: "Influencer discovery", path: "/istrazivanje/influenceri" },
            { name: "Content ideas", path: "/istrazivanje/ideje" },
            { name: "Industry insights", path: "/istrazivanje/insights" },
          ],
        },
      ],
    },
  ];

  const bottomMenuItems = [
    { name: "Podešavanja", path: "/podesavanja", icon: FiSettings },
    { name: "Pomoć", path: "/pomoc", icon: FiHelpCircle },
  ];

  const getBadgeColor = (badge) => {
    if (!badge) return "";
    if (badge === "NEW") return "bg-green-500 text-white";
    if (parseInt(badge) > 0) return "bg-red-500 text-white";
    return "bg-gray-500 text-white";
  };

  const getConnectionStatus = (status) => {
    switch (status) {
      case "connected":
        return "bg-green-400";
      case "disconnected":
        return "bg-gray-400";
      default:
        return "";
    }
  };

  const MenuItem = ({ item, isSubItem = false, parentExpanded = true }) => {
    const isActive = location.pathname === item.path;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedSections.includes(item.path);

    return (
      <div className={`${isSubItem ? "ml-6" : ""}`}>
        <div className="flex items-center group">
          <Link
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={`flex-1 flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive
                ? "text-primary-600 bg-primary-50 border-r-2 border-primary-600"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            } ${isSubItem ? "text-xs pl-4" : ""}`}
          >
            {!isSubItem && (
              <SafeIcon
                icon={item.icon}
                className="w-5 h-5 mr-3 flex-shrink-0"
              />
            )}
            {isSubItem && item.status && (
              <div
                className={`w-2 h-2 rounded-full mr-2 ${getConnectionStatus(
                  item.status
                )}`}
              />
            )}
            <span className="flex-1 truncate">{item.name}</span>
            {item.badge && (
              <span
                className={`ml-2 px-1.5 py-0.5 text-xs font-medium rounded-full ${getBadgeColor(
                  item.badge
                )}`}
              >
                {item.badge}
              </span>
            )}
          </Link>
          {hasSubItems && !isSubItem && (
            <button
              onClick={() => toggleSection(item.path)}
              className="p-1 ml-1 mr-2 rounded hover:bg-gray-100"
            >
              <SafeIcon
                icon={isExpanded ? FiChevronDown : FiChevronRight}
                className="w-4 h-4 text-gray-400"
              />
            </button>
          )}
        </div>
        {/* SubItems */}
        <AnimatePresence>
          {hasSubItems && isExpanded && parentExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 space-y-1"
            >
              {item.subItems.map((subItem) => (
                <MenuItem key={subItem.path} item={subItem} isSubItem={true} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {/* Backdrop for both mobile and desktop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl border-r border-gray-200 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">SocialAI</h1>
                <span className="ml-2 text-xs px-2 py-1 bg-primary-100 text-primary-800 rounded-full">
                  Pro
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <SafeIcon icon={FiBell} className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications > 9 ? "9+" : notifications}
                    </span>
                  )}
                </button>
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <SafeIcon
                  icon={FiSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Pretraži funkcije..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-6">
              {menuSections.map((section) => {
                const sectionExpanded = expandedSections.includes(section.id);
                return (
                  <div key={section.id}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="flex items-center justify-between w-full text-left mb-3"
                    >
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {section.title}
                      </h3>
                      <SafeIcon
                        icon={sectionExpanded ? FiChevronDown : FiChevronRight}
                        className="w-4 h-4 text-gray-400"
                      />
                    </button>
                    <AnimatePresence>
                      {sectionExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-1"
                        >
                          {section.items.map((item) => (
                            <MenuItem
                              key={item.path}
                              item={item}
                              parentExpanded={sectionExpanded}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Bottom Menu */}
            <div className="border-t border-gray-200 p-4">
              <div className="space-y-1">
                {bottomMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* User Profile */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Marko Petrović
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      marko@company.com
                    </p>
                  </div>
                  <button className="ml-2 p-1 text-gray-400 hover:text-gray-600">
                    <SafeIcon icon={FiSettings} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
