import React, { useState } from 'react';
import { ExternalLink, FolderCode, ArrowRight, Sparkles, MessageSquare, X, Check, Activity } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  features: string[];
  backendDetails: string;
  dbDetails: string;
  category: 'all' | 'fullstack' | 'automation' | 'ai';
  demoLink?: string;
  githubLink?: string;
  icon: React.ReactNode;
}

interface ProjectsProps {
  selectedSkill: string | null;
}

export default function Projects({ selectedSkill }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'automation' | 'ai'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'yashnex',
      title: 'YashNex',
      shortDesc: 'Automated website uptime, health monitoring & diagnostics platform.',
      longDesc: 'A comprehensive full-stack web care platform that monitors website uptime, domain/SSL validity, and page speed performance metrics. Integrates real-time dashboards and automated alert notifications on outage detections.',
      techStack: ['React 19', 'Django REST Framework', 'Celery', 'Redis', 'PostgreSQL', 'Lighthouse API', 'Python'],
      features: [
        'Multi-site uptime checks running parallel asynchronous monitoring schedules via Celery and Redis.',
        'Automated SSL certificate checks with automated warning dispatches sent 14 days before expiration.',
        'Performance diagnostics auditing page speed bottlenecks using the Google Lighthouse APIs.',
        'Dynamic client dashboards outlining latency graphs, outage logs, and website SEO health scores.',
      ],
      backendDetails: 'Configured Celery beat tasks to execute background ping worker tasks. Developed custom viewsets in Django to compute uptime stats over specific intervals (24h, 7d, 30d) and trigger SendGrid or Slack alerts.',
      dbDetails: 'Designed database schemas in PostgreSQL to partition historical metrics, optimizing queries using indexes on website IDs and check timestamps to maintain rapid loading speeds.',
      category: 'fullstack',
      demoLink: 'https://yash-nex.vercel.app/',
      githubLink: 'https://github.com/YashArya-13',
      icon: <Activity size={20} style={{ color: 'var(--accent-blue)' }} />,
    },
    {
      id: 'yatratrek',
      title: 'YatraTrek',
      shortDesc: 'Full-Stack SaaS CRM & Travel Booking Platform.',
      longDesc: 'Architected and developed a multi-tenant, full-stack SaaS CRM platform tailored specifically for hospitality and travel operators. Built to address complex real-world workflows in campground and resort bookings.',
      techStack: ['React 19', 'Django REST Framework (DRF)', 'SimpleJWT', 'Material-UI', 'PostgreSQL', 'Python', 'RBAC'],
      features: [
        'Granular Role-Based Access Control (RBAC) separating features for Super Admins, Camp Operators, and End Clients.',
        'Real-time booking lifecycle tracker with interactive dashboards detailing inventory utilization.',
        'SaaS Multi-Tenancy keeping partner data strictly isolated and secure.',
      ],
      backendDetails: 'Engineered backend business logic via Django REST Framework serializers and viewsets. Designed highly secure SimpleJWT authentication schemas with refresh tokens to maintain session integrity across multiple sub-domains.',
      dbDetails: 'Designed relational PostgreSQL database architecture. Enforced cascade deletions, transaction integrity during booking conflicts, and optimized query join performance for dashboard summaries.',
      category: 'fullstack',
      demoLink: 'https://yatra-trek.vercel.app/',
      githubLink: 'https://github.com/YashArya-13',
      icon: <Sparkles size={20} style={{ color: 'var(--accent-blue)' }} />,
    },
    {
      id: 'crmflask',
      title: 'CRM Flask App',
      shortDesc: 'Automated CRM system with automated quotes and WhatsApp updates.',
      longDesc: 'A robust Flask CRM system embedded with granular RBAC permissions tailored for accounting and sales workforces. Integrated automated document compilation pipelines and notification gateways.',
      techStack: ['Flask', 'SQLite', 'WhatsApp API', 'ReportLab (PDF)', 'Python', 'RBAC'],
      features: [
        'Custom workspace views dynamically filtered for Admin, Manager, Sales, and Accountant personnel.',
        'Programmatic WhatsApp Quotation Sharing integrating directly with client mobile accounts.',
        'Automated PDF pipeline dynamically compiling invoices using ReportLab with multi-currency Symbol validation ($₹).',
        'Customer automated follow-up tracker notifying sales reps of cooling leads.',
      ],
      backendDetails: 'Constructed custom decorators in Flask to intercept incoming requests and check permissions against active sessions. Wrote custom Python script handlers to run ReportLab drawing operations on the fly.',
      dbDetails: 'Configured SQLite as light and reliable DB engine. Crafted indexing schemas on lead and user tables to minimize query times on dashboard aggregations.',
      category: 'automation',
      githubLink: 'https://github.com/YashArya-13/CRM-Pro-Flask',
      icon: <FolderCode size={20} style={{ color: 'var(--accent-indigo)' }} />,
    },
    {
      id: 'aichatbot',
      title: 'AI Chatbot - Full Stack LLM App',
      shortDesc: 'AI chat helper with file uploading capabilities and document analysis.',
      longDesc: 'A production-ready full-stack chatbot utilizing large language model models to deliver real-time assistance. Built with a responsive chat console and support for document uploads to analyze text contexts.',
      techStack: ['Django', 'React.js', 'Groq LLM API', 'SQLite', 'Python', 'RESTful APIs'],
      features: [
        'Secure chat history management maintaining user-isolated conversation states.',
        'Low-latency real-time response generation utilizing the high-speed Groq API endpoints.',
        'File uploading and processing to allow users to ask questions directly about PDFs or documents.',
      ],
      backendDetails: 'Developed Python file processors (parsing DOCX/PDF content streams) and integrated them directly into Django API view endpoints. Leveraged asynchronous requests to manage high concurrent traffic to the Groq LLM API.',
      dbDetails: 'Utilized SQLite with clean schema separation of user profile records, session identifiers, message indices, and uploaded file reference paths.',
      category: 'ai',
      githubLink: 'https://github.com/YashArya-13/AI-Chatbot-Full-Stack-LLM-Application',
      icon: <MessageSquare size={20} style={{ color: '#818cf8' }} />,
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  const doesProjectMatchSelectedSkill = (project: Project) => {
    if (!selectedSkill) return false;
    
    // Normalize mapping for skill match comparisons
    const skillNorm = selectedSkill.toLowerCase();
    
    return project.techStack.some((tech) => {
      const techNorm = tech.toLowerCase();
      return (
        techNorm.includes(skillNorm) || 
        skillNorm.includes(techNorm) ||
        (skillNorm === 'rbac' && techNorm.includes('rbac')) ||
        (skillNorm.includes('pdf') && techNorm.includes('reportlab')) ||
        (skillNorm.includes('django') && techNorm.includes('drf')) ||
        (skillNorm.includes('python') && (techNorm.includes('django') || techNorm.includes('flask')))
      );
    });
  };

  return (
    <section id="projects" className="section" style={styles.sectionBg}>
      <div className="container">
        <h2 className="section-title">Projects Showcase</h2>
        <p className="section-subtitle">A collection of custom applications, SaaS architectures, and backend integrations.</p>

        {/* Project Filters */}
        <div style={styles.filterContainer}>
          {(['all', 'fullstack', 'automation', 'ai'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                ...styles.filterBtn,
                ...(activeFilter === filter ? styles.filterBtnActive : {}),
              }}
            >
              {filter === 'all' && 'All Projects'}
              {filter === 'fullstack' && 'Full-Stack SaaS'}
              {filter === 'automation' && 'APIs & Automation'}
              {filter === 'ai' && 'AI & LLMs'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={styles.projectsGrid}>
          {filteredProjects.map((project) => {
            const isSkillMatch = doesProjectMatchSelectedSkill(project);
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`glass-card ${isSkillMatch ? 'highlighted-card' : ''}`}
                style={{
                  ...styles.projectCard,
                  borderColor: isSkillMatch ? 'rgba(59, 130, 246, 0.4)' : 'var(--border-color)',
                }}
              >
                {/* Visual Header */}
                <div style={styles.cardHeader}>
                  <div style={styles.iconContainer}>{project.icon}</div>
                  <FolderCode size={16} style={{ color: 'var(--text-muted)' }} />
                </div>

                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.shortDesc}</p>

                {/* Tech Badges */}
                <div style={styles.techBadgeRow}>
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tag" style={{ fontSize: '0.68rem' }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tag" style={{ fontSize: '0.68rem' }}>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div style={styles.learnMoreRow}>
                  <span style={styles.learnMoreText}>View Specs</span>
                  <ArrowRight size={13} style={styles.arrow} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedProject && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div 
            style={styles.modalContent} 
            className="glass-card" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={styles.modalHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {selectedProject.icon}
                <h3 style={styles.modalTitle}>{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} style={styles.closeBtn}>
                <X size={18} />
              </button>
            </div>

            <div style={styles.modalBody}>
              {/* Left Column: Summary */}
              <div style={styles.modalLeft}>
                <h4 style={styles.sectionHeader}>Overview</h4>
                <p style={styles.modalDesc}>{selectedProject.longDesc}</p>

                <h4 style={styles.sectionHeader}>Key Specs</h4>
                <ul style={styles.featuresList}>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <Check size={14} style={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Deep Tech Spec */}
              <div style={styles.modalRight}>
                <div style={styles.specBox}>
                  <h4 style={styles.specTitle}>Backend Architecture</h4>
                  <p style={styles.specText}>{selectedProject.backendDetails}</p>
                </div>

                <div style={styles.specBox}>
                  <h4 style={styles.specTitle}>Database Specs</h4>
                  <p style={styles.specText}>{selectedProject.dbDetails}</p>
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <h4 style={styles.sectionHeader}>Tech Stack</h4>
                  <div style={styles.modalChips}>
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="tag tag-cyan" style={{ fontSize: '0.68rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.25rem' }}>
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={styles.modalGitBtn}
                    >
                      Visit Live Site
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={styles.modalGitBtn}
                    >
                      View Source Code
                      <FolderCode size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  sectionBg: {
    backgroundColor: 'var(--bg-primary)',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '0.45rem 1.1rem',
    borderRadius: '6px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-heading)',
    fontWeight: '500',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  filterBtnActive: {
    backgroundColor: 'rgba(59, 130, 246, 0.06)',
    borderColor: 'rgba(59, 130, 246, 0.35)',
    color: 'var(--accent-blue)',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    padding: '1.75rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1.25rem',
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--border-color)',
  },
  projectTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    letterSpacing: '-0.3px',
  },
  projectDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
    flexGrow: 1,
  },
  techBadgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginBottom: '1.25rem',
    width: '100%',
  },
  learnMoreRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: 'var(--accent-blue)',
    fontSize: '0.8rem',
    fontWeight: '600',
    fontFamily: 'var(--font-heading)',
  },
  learnMoreText: {
    transition: 'margin-right 0.2s ease',
  },
  arrow: {
    transition: 'transform 0.2s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(3, 3, 4, 0.85)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '1.5rem',
  },
  modalContent: {
    width: '100%',
    maxWidth: '820px',
    maxHeight: '90vh',
    overflowY: 'auto',
    backgroundColor: '#070709',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '12px',
    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9)',
    padding: '2rem 2.25rem',
    position: 'relative',
    cursor: 'default',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    paddingBottom: '1rem',
    marginBottom: '1.25rem',
  },
  modalTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    letterSpacing: '-0.4px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  modalBody: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '2rem',
  },
  modalLeft: {
    textAlign: 'left',
  },
  modalRight: {
    textAlign: 'left',
  },
  sectionHeader: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '0.6rem',
    borderLeft: '2px solid var(--accent-blue)',
    paddingLeft: '0.4rem',
  },
  modalDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.55',
    marginBottom: '1.25rem',
  },
  featuresList: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.4rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.6rem',
  },
  checkIcon: {
    color: 'var(--accent-blue)',
    marginTop: '0.15rem',
    flexShrink: 0,
  },
  specBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: '6px',
    padding: '1rem 1.15rem',
    marginBottom: '1rem',
  },
  specTitle: {
    fontSize: '0.85rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: '600',
    color: 'var(--accent-blue)',
    marginBottom: '0.35rem',
  },
  specText: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.45',
  },
  modalChips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginBottom: '1.5rem',
  },
  modalGitBtn: {
    width: '100%',
    justifyContent: 'center',
    padding: '0.6rem 0',
  },
};

// Inject hover transformations dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    .glass-card:hover span[style*="transition: margin-right"] {
      margin-right: 4px !important;
    }
    .glass-card:hover svg[style*="transition: transform"] {
      transform: translateX(4px);
    }
    @media (max-width: 768px) {
      div[style*="grid-template-columns: 1.1fr 0.9fr;"] {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      div[style*="max-width: 820px;"] {
        padding: 1.5rem !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
