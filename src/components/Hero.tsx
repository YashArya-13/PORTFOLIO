import React from 'react';
import { ArrowRight, Code2, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section grid-bg" style={styles.heroSection}>
      {/* Decorative subtle background gradient glows */}
      <div style={{ ...styles.blurOrb, ...styles.blurBlue }}></div>
      <div style={{ ...styles.blurOrb, ...styles.blurIndigo }}></div>

      <div className="container" style={styles.container}>
        <div style={styles.contentWrap}>
          <div style={styles.badgeRow}>
            <span className="tag tag-cyan" style={{ gap: '0.4rem' }}>
              <Code2 size={12} />
              Certified Python Developer
            </span>
            <span className="tag tag-violet" style={{ gap: '0.4rem' }}>
              <Database size={12} />
              SQL Specialist
            </span>
          </div>

          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.nameHighlight}>Yash Arya</span>
            <br />
            <span className="text-gradient-accent" style={styles.titleSub}>Python Full Stack Developer</span>
          </h1>

          <p style={styles.subtext}>
            I design and engineer secure, high-performance backend systems and responsive web applications. Specializing in multi-tenant SaaS architectures, complex SQL database schema indexing, and asynchronous worker execution pipelines.
          </p>

          <div style={styles.ctaRow}>
            <a href="#projects" className="btn btn-primary" style={styles.btnAdjust}>
              Explore My Work
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-secondary" style={styles.btnAdjust}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px', // fixed header offset
    overflow: 'hidden',
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  contentWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '820px',
  },
  badgeRow: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'var(--font-heading)',
    fontSize: '4.25rem',
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-2px',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
  },
  nameHighlight: {
    color: '#ffffff',
  },
  titleSub: {
    fontSize: '2.25rem',
    fontWeight: 700,
    letterSpacing: '-0.8px',
    marginTop: '0.5rem',
  },
  subtext: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.7,
    marginBottom: '2.5rem',
    maxWidth: '650px',
  },
  ctaRow: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnAdjust: {
    padding: '0.85rem 1.75rem',
  },
  blurOrb: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    filter: 'blur(150px)',
    opacity: 0.08,
    zIndex: 1,
    pointerEvents: 'none',
  },
  blurBlue: {
    top: '15%',
    left: '25%',
    background: 'var(--accent-blue)',
  },
  blurIndigo: {
    bottom: '15%',
    right: '25%',
    background: 'var(--accent-indigo)',
  },
};

// Insert responsive stylesheet override for mobile hero layout
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @media (max-width: 1024px) {
      #home h1 {
        font-size: 3.2rem !important;
      }
      #home span[class*="text-gradient-accent"] {
        font-size: 1.75rem !important;
      }
      #home p {
        font-size: 1.05rem !important;
        max-width: 90% !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
