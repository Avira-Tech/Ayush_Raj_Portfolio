import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Cpu } from 'lucide-react';
import profilePic from '../assets/Professional DP.png';

const About: React.FC = () => {
  const skills = [
    { name: "Graphic Design", icon: <Palette size={20} />, level: "Expert" },
    { name: "Product Design", icon: <Code size={20} />, level: "Advanced" },
    { name: "UI/UX Design", icon: <Cpu size={20} />, level: "Advanced" },
    { name: "Unreal Engine", icon: <User size={20} />, level: "Intermediate" }
  ];

  return (
    <section id="about" className="section" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ 
              borderRadius: '40px', 
              aspectRatio: '1', 
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
            }}
          >
            <img 
              src={profilePic} 
              alt="Ayush Raj" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                filter: 'brightness(1.1) contrast(1.05)'
              }} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About Me</span>
            <h2 style={{ fontSize: '3.5rem', margin: '1rem 0 2rem' }} className="text-gradient">Passion Driven Design</h2>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              With **over 5 years of professional experience**, I am a versatile Designer with expertise spanning across **Graphic Design** and **Product Design**. 
              With a professional background at companies like **SkillEcted** and **Addnectar Solutions**, I've mastered the art of creating 
              both high-impact marketing visuals and intuitive digital product interfaces.
            </p>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '3rem', lineHeight: 1.8 }}>
              My experience ranges from developing design systems and prototypes for products to creating immersive environments in **Unreal Engine**. 
              I pride myself on my ability to adapt to diverse creative challenges, whether it's on-site in Pune or collaborating remotely with teams globally.
            </p>


            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <div key={index} className="glass" style={{ padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-primary)' }}>{skill.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>{skill.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>5+</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>50+</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
