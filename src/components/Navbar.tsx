import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import profilePhoto from '../assets/Professional DP.png';

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
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ 
        height: '85px', 
        display: 'flex', 
        alignItems: 'center',
        background: 'rgba(10, 10, 12, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '2px solid var(--glass-border)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
            }}>
              <img 
                src={profilePhoto} 
                alt="Ayush Raj" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'white' }}>
              Ayush<span className="text-gradient">.</span>
            </div>
          </a>

          {/* Available Badge in Navbar */}
          <div className="glass" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.4rem 0.8rem', 
            borderRadius: '100px', 
            border: '1px solid rgba(16, 185, 129, 0.2)',
            background: 'rgba(16, 185, 129, 0.05)',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#10b981',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' }}></span>
            Available
          </div>
        </div>
        
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-dim)' }}
            >
              {link.name}
            </a>
          ))}
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

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.linkedin.com/in/ayush-raj-6160a4205/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={20} className="text-dim" />
            </a>
            <a href="mailto:Rajayush.rxl@gmail.com">
              <Mail size={20} className="text-dim" />
            </a>
          </div>
          
          {/* Mobile Toggle */}
          <button 
            className="nav-mobile-toggle glass"
            onClick={() => setIsOpen(!isOpen)}
            style={{ 
              display: 'none', 
              padding: '0.5rem', 
              borderRadius: '12px',
              color: 'white',
              background: 'rgba(255,255,255,0.05)'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ 
              position: 'absolute', 
              top: '85px', 
              left: 0, 
              right: 0, 
              background: 'rgba(10, 10, 12, 0.95)', 
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 49
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white' }}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <div 
                className="glass" 
                style={{ 
                  padding: '1rem', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  fontWeight: 700
                }}
              >
                Hire Me
              </div>
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}>
              <a href="https://www.linkedin.com/in/ayush-raj-6160a4205/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon size={24} />
              </a>
              <a href="mailto:Rajayush.rxl@gmail.com">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
