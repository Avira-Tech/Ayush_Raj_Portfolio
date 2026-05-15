import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Download } from 'lucide-react';
import resumeFile from '../assets/Ayush_Raj.pdf';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "SkillEcted",
    role: "Graphic Designer",
    period: "Apr 2025 - Present",
    location: "Pune, India (On-site)",
    description: [
      "Leading visual design initiatives for educational programs and placement drives.",
      "Developing high-impact marketing materials and digital assets for corporate branding.",
      "Collaborating with cross-functional teams to ensure brand consistency across all platforms."
    ],
    skills: ["Graphic Design", "Branding", "Corporate Identity"]
  },
  {
    company: "Addnectar Solutions",
    role: "Product Designer",
    period: "Apr 2024 - Apr 2025",
    location: "Pimpri Chinchwad, India (On-site)",
    description: [
      "Focused on Product Design, creating intuitive and visually appealing digital interfaces.",
      "Conducted user research and translated requirements into functional prototypes.",
      "Designed and maintained design systems to streamline the development process."
    ],
    skills: ["Product Design", "UI/UX", "Prototyping"]
  },
  {
    company: "Inक्रीड Studios",
    role: "Graphic Designer",
    period: "Aug 2022 - Mar 2024",
    location: "Jodhpur, India (Remote)",
    description: [
      "Leveraged Unreal Engine for advanced visual projects and environmental design.",
      "Created diverse graphic assets for digital media and gaming environments.",
      "Worked closely with the creative director to deliver high-quality visual storytelling."
    ],
    skills: ["Unreal Engine", "Graphic Design", "Environment Design"]
  },
  {
    company: "Two Words Design",
    role: "Motion Graphic Designer",
    period: "Jun 2023 - Jul 2023",
    location: "Mumbai, India (Remote)",
    description: [
      "Specialized in Motion Graphics for digital marketing and social media campaigns.",
      "Animated complex visual elements to enhance viewer engagement and brand message.",
      "Produced high-quality video content for internship projects."
    ],
    skills: ["Motion Graphics", "Animation", "After Effects"]
  },
  {
    company: "Dynamic Technosoft",
    role: "Graphic Design Intern",
    period: "Jun 2022 - Sep 2022",
    location: "Kathmandu, Nepal",
    description: [
      "Assisted in the creation of visual content for software products and marketing.",
      "Gained hands-on experience in industry-standard design tools and workflows.",
      "Supported the design team in day-to-day graphic production tasks."
    ],
    skills: ["Graphic Design", "Adobe Suite", "Visual Communication"]
  }
];


const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ padding: '120px 0', background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="text-gradient">Professional Journey</h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
            A timeline of my professional experience and the companies I've helped grow through design.
          </p>
        </motion.div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass"
              style={{
                padding: '2.5rem',
                borderRadius: '32px',
                marginBottom: '2.5rem',
                position: 'relative',
                border: '1px solid var(--glass-border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>{exp.role}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)' }}>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: exp.skills ? '1.5rem' : 0 }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ 
                    color: 'var(--text-dim)', 
                    marginBottom: '0.8rem', 
                    display: 'flex', 
                    gap: '1rem',
                    lineHeight: 1.6
                  }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.5rem' }}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="glass" style={{ 
                      padding: '0.4rem 1rem', 
                      borderRadius: '8px', 
                      fontSize: '0.8rem', 
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      fontWeight: 600
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
        >
          <a href={resumeFile} download="Ayush_Raj_Resume.pdf">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="glass"
              style={{
                padding: '1rem 3rem',
                borderRadius: '100px',
                background: 'var(--accent-gradient)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                border: 'none'
              }}
            >
              Download Full Resume <Download size={20} />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
