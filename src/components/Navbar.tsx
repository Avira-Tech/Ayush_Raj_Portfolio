import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ height: '80px', display: 'flex', alignItems: 'center' }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
          AR<span className="text-gradient">.</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dim)' }}>About</a>
          <a href="#experience" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dim)' }}>Experience</a>
          <a href="#work" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dim)' }}>Work</a>
          <a href="#contact">
            <motion.div
              animate={{ 
                boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.4)", "0 0 0px rgba(59, 130, 246, 0)"],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="glass" 
              style={{ 
                padding: '0.6rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.9rem', 
                fontWeight: 600,
                background: 'var(--accent-gradient)',
                color: 'white',
                border: 'none'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.div>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://www.linkedin.com/in/ayush-raj-6160a4205/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon size={20} className="text-dim" />
          </a>
          <a href="mailto:Rajayush.rxl@gmail.com">
            <Mail size={20} className="text-dim" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
