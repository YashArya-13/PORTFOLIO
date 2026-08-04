import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSelectSkill = (skill: string | null) => {
    setSelectedSkill(skill);
    // Smooth scroll down to projects section if a skill is selected
    if (skill) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Layout Sections */}
      <main style={styles.mainContent}>
        {/* Hero & Interactive Terminal */}
        <Hero />

        {/* Professional Experience & Academics Timeline */}
        <Timeline />

        {/* Skills Inventory Grid */}
        <Skills selectedSkill={selectedSkill} onSelectSkill={handleSelectSkill} />

        {/* Projects Gallery & Highlight Cards */}
        <Projects selectedSkill={selectedSkill} />

        {/* Contact Info & DB Log Simulator Form */}
        <Contact />
      </main>

      {/* Styled Footer */}
      <footer style={styles.footer}>
        <div className="container" style={styles.footerContainer}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Yash Arya</span>. 
            All Rights Reserved.
          </p>
          <p style={styles.credits}>
            Engineered using <span style={{ color: '#61dafb', fontWeight: 600 }}>React</span> & Custom CSS.
          </p>
        </div>
      </footer>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  mainContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: '#05070f',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '2rem 0',
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    margin: 0,
    fontFamily: 'Space Grotesk, sans-serif',
  },
  credits: {
    margin: 0,
    marginLeft: 'auto',
  },
};

// Add responsive footer style overrides dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @media (max-width: 768px) {
      footer div[style*="display: flex;"] {
        flex-direction: column !important;
        text-align: center !important;
      }
      footer p[style*="margin-left: auto;"] {
        margin-left: 0 !important;
        margin-top: 0.5rem !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default App;
