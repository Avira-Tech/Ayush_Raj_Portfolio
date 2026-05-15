import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { ExternalLink, FileText, Image as ImageIcon, X } from 'lucide-react';

const categories = ['All', 'Brochures', 'Meta Ads', 'Social Media', 'Thumbnails', 'Presentations'];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const getCount = (cat: string) => {
    if (cat === 'All') return projects.length;
    return projects.filter(p => p.category === cat).length;
  };

  return (
    <section id="work" className="section" style={{ padding: '120px 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 600, 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            display: 'block'
          }}>
            Portfolio
          </span>
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }} className="text-gradient">
            Creative Showcase
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Transforming ideas into visual experiences. Explore my latest work across digital and print media.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.8rem', 
          marginBottom: '5rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className="glass"
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '100px',
                color: activeCategory === cat ? 'white' : 'var(--text-dim)',
                background: activeCategory === cat ? 'var(--accent-gradient)' : 'var(--glass-bg)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'transparent' : 'var(--glass-border)',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {cat}
              <span style={{ 
                fontSize: '0.7rem', 
                opacity: 0.6,
                background: activeCategory === cat ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)',
                padding: '2px 8px',
                borderRadius: '10px'
              }}>
                {getCount(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass project-card"
                onClick={() => setSelectedProject(project)}
                style={{
                  borderRadius: '32px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  aspectRatio: '16/11',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--glass-border)'
                }}
              >
                {project.type === 'image' ? (
                  <img 
                    src={project.file} 
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
                    }}
                    className="project-image"
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                    padding: '3rem'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '24px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}>
                      <FileText size={40} color="var(--accent-primary)" />
                    </div>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--accent-primary)', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.15em' 
                    }}>
                      {project.category}
                    </span>
                  </div>
                )}
                
                {/* Content Overlay */}
                <div className="overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '2rem',
                  background: 'linear-gradient(to top, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.4) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  transition: 'all 0.4s ease'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                        {project.category}
                      </p>
                    </div>
                    <div className="glass" style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '16px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      background: 'rgba(255,255,255,0.1)'
                    }}>
                      {project.type === 'image' ? <ImageIcon size={22} /> : <FileText size={22} />}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="glass"
              style={{
                padding: '1rem 3rem',
                borderRadius: '100px',
                background: showAll ? 'var(--glass-bg)' : 'var(--accent-gradient)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.3s ease',
                boxShadow: showAll ? 'none' : '0 10px 20px rgba(59, 130, 246, 0.2)'
              }}
            >
              {showAll ? 'Show Less Projects' : `Show All Projects (${filteredProjects.length})`}
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
              background: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass"
              style={{
                maxWidth: '1000px',
                width: '100%',
                maxHeight: '90vh',
                borderRadius: '32px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  zIndex: 10,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ flex: 1, overflow: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
                {selectedProject.type === 'image' ? (
                  <img 
                    src={selectedProject.file} 
                    alt={selectedProject.title}
                    style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
                  />
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '70vh', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <FileText size={80} color="var(--accent-primary)" style={{ marginBottom: '2rem' }} />
                    <h2 style={{ marginBottom: '2rem' }}>{selectedProject.title}</h2>
                    <a 
                      href={selectedProject.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass"
                      style={{
                        padding: '1rem 2.5rem',
                        borderRadius: '100px',
                        background: 'var(--accent-gradient)',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem'
                      }}
                    >
                      View Document <ExternalLink size={20} />
                    </a>
                  </div>
                )}
              </div>

              <div style={{ padding: '2rem', background: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{selectedProject.title}</h3>
                    <p style={{ color: 'var(--text-dim)' }}>Category: {selectedProject.category}</p>
                  </div>
                  {selectedProject.type === 'image' && (
                    <a 
                      href={selectedProject.file} 
                      download 
                      className="glass"
                      style={{
                        padding: '0.8rem 1.5rem',
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
