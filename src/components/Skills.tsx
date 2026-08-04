import React from 'react';
import { Code, Server, Layout, Database, Wrench, Cpu } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillsProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export default function Skills({ selectedSkill, onSelectSkill }: SkillsProps) {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code size={18} style={{ color: 'var(--accent-blue)' }} />,
      skills: ['Python', 'JavaScript', 'Java', 'PHP', 'C++', 'C'],
    },
    {
      title: 'Backend Development',
      icon: <Server size={18} style={{ color: 'var(--accent-blue)' }} />,
      skills: ['Django', 'Django REST Framework (DRF)', 'Flask', 'RESTful APIs'],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={18} style={{ color: 'var(--accent-blue)' }} />,
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      icon: <Database size={18} style={{ color: 'var(--accent-blue)' }} />,
      skills: ['MySQL', 'SQLite', 'SQL Query Optimization'],
    },
    {
      title: 'Tools & Libraries',
      icon: <Wrench size={18} style={{ color: 'var(--accent-blue)' }} />,
      skills: ['Git', 'GitHub', 'SimpleJWT', 'ReportLab (PDF)', 'Pandas', 'NumPy'],
    },
    {
      title: 'Core Concepts',
      icon: <Cpu size={18} style={{ color: 'var(--accent-blue)' }} />,
      skills: ['OOP', 'Data Structures & Algorithms', 'Operating Systems', 'RBAC'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          {selectedSkill ? (
            <span>
              Showing items using <strong style={{ color: 'var(--accent-blue)' }}>{selectedSkill}</strong>.{' '}
              <button onClick={() => onSelectSkill(null)} style={styles.clearBtn}>Clear Filter</button>
            </span>
          ) : (
            'Click on any skill to highlight the projects where it was applied.'
          )}
        </p>

        <div style={styles.skillsGrid}>
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="glass-card" style={styles.categoryCard}>
              <div style={styles.categoryHeader}>
                {category.icon}
                <h3 style={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div style={styles.skillChipsContainer}>
                {category.skills.map((skill, sIdx) => {
                  const isActive = selectedSkill === skill;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => onSelectSkill(isActive ? null : skill)}
                      style={{
                        ...styles.skillChip,
                        backgroundColor: isActive ? 'rgba(59, 130, 246, 0.06)' : 'rgba(255, 255, 255, 0.01)',
                        borderColor: isActive ? 'rgba(59, 130, 246, 0.35)' : 'var(--border-color)',
                        color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      }}
                      className="skill-chip-hover"
                    >
                      <span 
                        style={{ 
                          ...styles.indicatorDot,
                          backgroundColor: isActive ? 'var(--accent-blue)' : 'transparent',
                          borderColor: isActive ? 'var(--accent-blue)' : 'rgba(255,255,255,0.2)',
                        }}
                      />
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  clearBtn: {
    background: 'none',
    border: 'none',
    color: '#ef4444',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginLeft: '6px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  categoryCard: {
    padding: '1.75rem',
    textAlign: 'left',
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '1.25rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
    paddingBottom: '0.6rem',
  },
  categoryTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.15rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    letterSpacing: '-0.3px',
  },
  skillChipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  skillChip: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.4rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-sans)',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    fontWeight: 500,
  },
  indicatorDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    border: '1px solid',
    marginRight: '6px',
    display: 'inline-block',
    transition: 'all 0.2s',
  },
};

// Inject chip hover animations dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    .skill-chip-hover:hover {
      border-color: rgba(255, 255, 255, 0.15) !important;
      color: var(--text-primary) !important;
      background-color: rgba(255, 255, 255, 0.03) !important;
    }
  `;
  document.head.appendChild(styleSheet);
}
