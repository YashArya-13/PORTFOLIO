import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string[];
  tags: string[];
}

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');

  const timelineData: TimelineItem[] = [
    {
      id: 'work-1',
      type: 'work',
      title: 'Software Developer',
      subtitle: 'WARALS Technologies Pvt Ltd',
      date: 'Jul 2025 – Oct 2025 (3 months)',
      location: 'Remote / India',
      description: [
        'Designed and maintained modular application layers adhering strictly to company development guidelines.',
        'Engineered a highly customizable, secure CRM web application using Flask and SQLite as the primary database.',
        'Collaborated directly with senior engineers to implement core features, resolve performance blockers, and optimize data schemas.',
      ],
      tags: ['Flask', 'SQLite', 'CRM Systems', 'Database Schema Design'],
    },
    {
      id: 'work-2',
      type: 'work',
      title: 'Back-End Intern',
      subtitle: 'SALESQUEEN SOFTWARE SOLUTIONS',
      date: 'Jun 2025 – Jul 2025 (1 month)',
      location: 'Remote / India',
      description: [
        'Developed, refactored, and optimized backend scripts and API endpoints using PHP.',
        'Interfaced with frontend developers to ensure seamless, responsive API payload integrations.',
        'Diagnosed bugs and optimized server execution speeds in high-traffic backend endpoints.',
      ],
      tags: ['PHP', 'Backend API', 'Query Troubleshooting', 'Team Collaboration'],
    },
    {
      id: 'edu-1',
      type: 'education',
      title: 'Masters of Computer Applications (MCA)',
      subtitle: 'Birla Institute of Applied Sciences',
      date: 'Aug 2024 - Jul 2026',
      location: 'Bhimtal, Uttarakhand',
      description: [
        'Specializing in advanced software design, computer networking, systems analysis, and enterprise software engineering.',
        'Applying advanced principles in Data Structures & Algorithms, Database Design, and Web Architectures.',
      ],
      tags: ['Algorithms', 'Software Engineering', 'Advanced DBMS', 'Networking'],
    },
    {
      id: 'edu-2',
      type: 'education',
      title: 'Bachelor of Computer Applications (BCA)',
      subtitle: 'Graphic Era Hill University',
      date: 'Aug 2021 - Jun 2024',
      location: 'Bhimtal, Uttarakhand',
      description: [
        'Acquired core foundations in Object-Oriented Programming (C++, Java, Python), database querying (SQL), and web technologies.',
        'Graduated with a cumulative CGPA of 7.3.',
      ],
      tags: ['C++', 'Java', 'SQL Querying', 'OOP Principles', 'CGPA: 7.3'],
    },
    {
      id: 'edu-3',
      type: 'education',
      title: 'Higher Secondary Education (Class XII)',
      subtitle: 'Universal Convent School',
      date: 'May 2019 - Mar 2020',
      location: 'Ramnagar, Uttarakhand',
      description: [
        'Completed major core sciences with high dedication.',
        'Graduated with a cumulative percentage of 61.8%.',
      ],
      tags: ['Physics', 'Chemistry', 'Mathematics'],
    },
  ];

  const filteredData = timelineData.filter(
    (item) => activeTab === 'all' || item.type === activeTab
  );

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">A timeline of my professional work experience and academic milestones.</p>

        {/* Custom Tabs */}
        <div style={styles.tabOuter}>
          <div style={styles.tabContainer}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                ...styles.tabBtn,
                ...(activeTab === 'all' ? styles.tabBtnActive : {}),
              }}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('work')}
              style={{
                ...styles.tabBtn,
                ...(activeTab === 'work' ? styles.tabBtnActive : {}),
              }}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              style={{
                ...styles.tabBtn,
                ...(activeTab === 'education' ? styles.tabBtnActive : {}),
              }}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-container" style={{ marginTop: '3rem' }}>
          {filteredData.map((item) => {
            const isWork = item.type === 'work';
            return (
              <div key={item.id} style={styles.timelineItem} className="timeline-item-animated">
                {/* Timeline node */}
                <div style={{
                  ...styles.timelineNode,
                  borderColor: 'var(--border-color)',
                  color: isWork ? 'var(--accent-blue)' : 'var(--accent-indigo)',
                }}>
                  {isWork ? (
                    <Briefcase size={14} />
                  ) : (
                    <GraduationCap size={14} />
                  )}
                </div>

                {/* Left/Right content wrapper */}
                <div style={{
                  ...styles.timelineCardOffset,
                  marginLeft: 'auto',
                  width: 'calc(100% - 40px)',
                  paddingLeft: '1.5rem',
                }}>
                  <div className="glass-card" style={styles.card}>
                    {/* Header */}
                    <div style={styles.cardHeader}>
                      <span style={{
                        ...styles.cardTag,
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        color: isWork ? 'var(--accent-blue)' : '#a5b4fc',
                        borderColor: 'var(--border-color)',
                      }}>
                        {isWork ? 'Work Experience' : 'Education'}
                      </span>
                      <div style={styles.dateRow}>
                        <Calendar size={12} style={{ color: 'var(--text-muted)' }} />
                        <span style={styles.dateText}>{item.date}</span>
                      </div>
                    </div>

                    <h3 style={styles.itemTitle}>{item.title}</h3>
                    <h4 style={styles.itemSubtitle}>{item.subtitle}</h4>
                    
                    <div style={styles.locationRow}>
                      <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                      <span style={styles.locationText}>{item.location}</span>
                    </div>

                    {/* Bullet list */}
                    <ul style={styles.descriptionList}>
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} style={styles.bulletItem}>{bullet}</li>
                      ))}
                    </ul>

                    {/* Tech Chips */}
                    <div style={styles.chipsRow}>
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={`tag ${isWork ? 'tag-cyan' : 'tag-violet'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tabOuter: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  tabContainer: {
    display: 'inline-flex',
    backgroundColor: '#0c0c0e',
    padding: '4px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    gap: '2px',
  },
  tabBtn: {
    padding: '0.5rem 1.1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  tabBtnActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '2.5rem',
    display: 'flex',
  },
  timelineNode: {
    position: 'absolute',
    left: '20px',
    transform: 'translateX(-50%)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#070709',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  timelineCardOffset: {
    width: '45%',
  },
  card: {
    padding: '1.5rem 1.75rem',
    textAlign: 'left',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  cardTag: {
    fontSize: '0.7rem',
    fontWeight: 500,
    fontFamily: 'var(--font-mono)',
    padding: '0.15rem 0.5rem',
    borderRadius: '4px',
    border: '1px solid',
  },
  dateRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  dateText: {
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
    fontWeight: 500,
  },
  itemTitle: {
    fontSize: '1.25rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
    letterSpacing: '-0.3px',
  },
  itemSubtitle: {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--accent-blue)',
    marginBottom: '0.5rem',
  },
  locationRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    marginBottom: '1rem',
  },
  locationText: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
  },
  descriptionList: {
    paddingLeft: '1.1rem',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    marginBottom: '1.25rem',
  },
  bulletItem: {
    marginBottom: '0.4rem',
  },
  chipsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
};

// Inject timeline responsive layout styles dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @media (min-width: 769px) {
      .timeline-container::before {
        left: 50% !important;
      }
      .timeline-container .timeline-item-animated:nth-child(even) {
        flex-direction: row-reverse;
      }
      .timeline-container .timeline-item-animated:nth-child(even) div[style*="width: calc(100% - 40px);"] {
        margin-right: auto !important;
        margin-left: 0 !important;
        padding-left: 0 !important;
        padding-right: 1.5rem !important;
      }
      .timeline-container .timeline-item-animated:nth-child(odd) div[style*="width: calc(100% - 40px);"] {
        margin-left: auto !important;
        margin-right: 0 !important;
        padding-left: 1.5rem !important;
        padding-right: 0 !important;
      }
      .timeline-container .timeline-item-animated div[style*="width: calc(100% - 40px);"] {
        width: 45% !important;
      }
      .timeline-container div[style*="left: 20px;"] {
        left: 50% !important;
        transform: translateX(-50%) !important;
      }
    }
    @media (max-width: 768px) {
      .timeline-container div[style*="left: 20px;"] {
        left: 20px !important;
        transform: translateX(-50%) !important;
      }
      div[style*="width: calc(100% - 40px);"] {
        width: calc(100% - 30px) !important;
        padding-left: 1rem !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
