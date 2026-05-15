import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Palette, Zap, ChevronDown, Download } from 'lucide-react';
import resumeFile from '../assets/Ayush_Raj.pdf';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        overflow: 'hidden', 
        paddingTop: '80px',
        background: 'radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
      }}
    >
      {/* Interactive Mouse Glow */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          x: glowX,
          y: glowY,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'translate(-50%, -50%)'
        }}
      />
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'var(--accent-primary)', filter: 'blur(150px)', borderRadius: '50%', zIndex: -1 }}
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: 'var(--accent-secondary)', filter: 'blur(150px)', borderRadius: '50%', zIndex: -1 }}
      ></motion.div>

      <div id="hero-container" className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', 
        gap: '4rem', 
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.8rem', 
              padding: '0.6rem 1.2rem', 
              borderRadius: '100px', 
              marginBottom: '2rem',
              border: '1px solid var(--glass-border)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <span style={{ 
              width: '8px', 
              height: '8px', 
              background: '#10b981', 
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 10px #10b981'
            }}></span>
            <span style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Available for new projects
            </span>
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'max(3.5rem, 5vw)', 
            lineHeight: 1.05, 
            marginBottom: '2rem',
            fontWeight: 800
          }}>
            Crafting <span className="shimmer-text">Premium</span> <br /> 
            Digital Experiences <br /> 
            & Visual Stories.
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-dim)', 
            maxWidth: '540px', 
            marginBottom: '3.5rem',
            lineHeight: 1.6
          }}>
            I am <strong style={{ color: 'white' }}>Ayush Raj</strong>, a multi-disciplinary designer specializing in 
            Branding and Product Design.
          </p>

          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href="#work" style={{ flex: '1', minWidth: '160px' }}>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  background: 'var(--accent-gradient)', 
                  color: 'white', 
                  padding: '1.1rem 1.2rem', 
                  borderRadius: '16px', 
                  fontWeight: 700, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '0.6rem', 
                  width: '100%',
                  fontSize: '0.95rem'
                }}
              >
                My Work <ArrowRight size={18} />
              </motion.button>
            </a>
            
            <a href={resumeFile} download="Ayush_Raj_Resume.pdf" style={{ flex: '1', minWidth: '160px' }}>
              <motion.button 
                whileHover={{ background: 'rgba(255,255,255,0.05)', borderColor: 'white' }}
                style={{ 
                  background: 'transparent', 
                  color: 'white', 
                  border: '1px solid var(--glass-border)', 
                  padding: '1.1rem 1.2rem', 
                  borderRadius: '16px', 
                  fontWeight: 700, 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  width: '100%',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Resume <Download size={18} />
              </motion.button>
            </a>

            <a href="#contact" style={{ flex: '1', minWidth: '160px' }}>
              <motion.button 
                whileHover={{ background: 'rgba(255,255,255,0.05)', borderColor: 'white' }}
                style={{ 
                  background: 'transparent', 
                  color: 'white', 
                  border: '1px solid var(--glass-border)', 
                  padding: '1.1rem 1.2rem', 
                  borderRadius: '16px', 
                  fontWeight: 700, 
                  width: '100%',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Let's Talk
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Hero Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          style={{ position: 'relative', perspective: '1200px' }}
        >
          <div className="glass" style={{ 
            width: '100%', 
            aspectRatio: '1', 
            borderRadius: '56px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'relative',
            transform: 'rotateX(15deg) rotateY(-15deg)',
            boxShadow: `
              20px 40px 80px rgba(0,0,0,0.5),
              inset 0 0 0 1px rgba(255,255,255,0.1)
            `,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)'
          }}>
             {/* Floating Abstract Shapes */}
             <div style={{ width: '85%', height: '85%', borderRadius: '40px', background: 'var(--accent-gradient)', opacity: 0.08, position: 'absolute' }}></div>
             
             <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', padding: '3rem', width: '100%', maxWidth: '320px' }}>
                <motion.div 
                   animate={{ 
                    y: [0, -20, 0], 
                    rotateX: [15, 20, 15],
                    rotateY: [-15, -10, -15]
                   }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="glass" 
                   style={{ 
                    padding: '2.5rem 1.5rem', 
                    borderRadius: '28px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)'
                   }}
                >
                   <div style={{ 
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))', 
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)'
                   }}>
                    <Palette className="text-gradient" size={32} />
                   </div>
                   <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white', letterSpacing: '0.02em' }}>Branding</div>
                </motion.div>

                <motion.div 
                   animate={{ 
                    y: [0, 20, 0],
                    rotateX: [15, 10, 15],
                    rotateY: [-15, -20, -15]
                   }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                   className="glass" 
                   style={{ 
                    padding: '2.5rem 1.5rem', 
                    borderRadius: '28px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)'
                   }}
                >
                   <div style={{ 
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1))', 
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)'
                   }}>
                    <Zap className="text-gradient" size={32} />
                   </div>
                   <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white', letterSpacing: '0.02em' }}>Product Design</div>
                </motion.div>
             </div>

             {/* Floating Accent */}
             <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ 
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: 'var(--accent-gradient)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                opacity: 0.2,
                filter: 'blur(20px)'
              }}
             ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-dim)'
        }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Hero;
