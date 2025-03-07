import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

interface FloatingActionButtonProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  // Show button after scrolling down a bit
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'resume', icon: <FaFileAlt />, label: 'Resume' },
    { id: 'portfolio', icon: <FaBriefcase />, label: 'Portfolio' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 flex flex-col-reverse gap-3">
          {navItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                activeTab === item.id
                  ? 'bg-[var(--color-accent-primary)] text-white'
                  : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]'
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
              <span className="absolute right-14 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </motion.button>
          ))}

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] flex items-center justify-center shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      )}

      {/* Main Button */}
      <motion.button
        onClick={toggleMenu}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
      >
        <FaHome className="text-xl" />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
