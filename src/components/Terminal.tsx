import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'system_init',
      output: (
        <div style={{ color: '#00f2fe' }}>
          <p>=== YASH ARYA CORE PORTFOLIO v2.0.0 ===</p>
          <p>Initializing secure connection to: Ramnagar, Uttarakhand, IN...</p>
          <p>Connection established. Systems operational.</p>
          <p>Type <span style={{ color: '#8a2be2', fontWeight: 'bold' }}>help</span> or click the quick commands below to explore.</p>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = [
    { label: 'About Me', cmd: 'about' },
    { label: 'Show Skills', cmd: 'skills' },
    { label: 'View Projects', cmd: 'projects' },
    { label: 'Get Experience', cmd: 'experience' },
    { label: 'Certifications', cmd: 'certifications' },
    { label: 'Clear Shell', cmd: 'clear' },
  ];

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div style={{ color: '#9ca3af' }}>
            <p style={{ color: '#f3f4f6', fontWeight: 'bold', marginBottom: '0.25rem' }}>Available Commands:</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>about</span> - Profile and professional objective</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>skills</span> - Technical competencies and languages</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>projects</span> - Showcase of key developed systems</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>experience</span> - Professional history & internships</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>certifications</span> - Course accreditations and credentials</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>help</span> - Show this helper guide</p>
            <p><span style={{ color: '#00f2fe', width: '120px', display: 'inline-block' }}>clear</span> - Flush the command terminal</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div style={{ color: '#e5e7eb' }}>
            <p style={{ color: '#c084fc', fontWeight: 'bold', marginBottom: '0.5rem' }}>// PROFILE / OBJECTIVE</p>
            <p>
              I am an aspiring Software Developer and Certified Python Programmer. 
              My expertise lies in backend engineering, SQL query optimization, and constructing robust 
              Role-Based Access Control (RBAC) security frameworks.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              I thrive on resolving complex architectural bottlenecks and engineering systems that 
              translate high-level ideas into optimized, highly maintainable production code.
            </p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ color: '#e5e7eb' }}>
            <p style={{ color: '#00f2fe', fontWeight: 'bold', marginBottom: '0.5rem' }}>$ cat skills.json</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div>
                <p style={{ color: '#8a2be2', fontWeight: 'bold' }}>[Languages]</p>
                <p>Python, JavaScript (ES6+), Java, PHP, C++, C</p>
              </div>
              <div>
                <p style={{ color: '#8a2be2', fontWeight: 'bold' }}>[Backend & APIs]</p>
                <p>Django, Django REST Framework, Flask, REST APIs</p>
              </div>
              <div>
                <p style={{ color: '#8a2be2', fontWeight: 'bold' }}>[Frontend]</p>
                <p>React, HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div>
                <p style={{ color: '#8a2be2', fontWeight: 'bold' }}>[Databases]</p>
                <p>MySQL, SQLite, SQL Optimization</p>
              </div>
              <div>
                <p style={{ color: '#8a2be2', fontWeight: 'bold' }}>[Tools & Core]</p>
                <p>Git/GitHub, JWT, ReportLab, OOP, DSA, RBAC</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div style={{ color: '#e5e7eb' }}>
            <p style={{ color: '#4facfe', fontWeight: 'bold', marginBottom: '0.5rem' }}>$ db.query("SELECT * FROM projects")</p>
            
            <div style={{ borderLeft: '2px solid #00f2fe', paddingLeft: '0.75rem', margin: '0.75rem 0' }}>
              <p style={{ color: '#00f2fe', fontWeight: 'bold' }}>1. YashNex (Web Uptime & Health Platform)</p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Stack: React 19, Django REST Framework, Celery, Redis, PostgreSQL</p>
              <p style={{ fontSize: '0.9rem' }}>Automated website monitoring & diagnostic tool checking uptime, SSL certificate lifespans, and performance audits.</p>
            </div>

            <div style={{ borderLeft: '2px solid #a78bfa', paddingLeft: '0.75rem', margin: '0.75rem 0' }}>
              <p style={{ color: '#c084fc', fontWeight: 'bold' }}>2. YatraTrek (Travel & Hospitality SaaS)</p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Stack: React 19, Django REST Framework, SimpleJWT, Material-UI</p>
              <p style={{ fontSize: '0.9rem' }}>Architected a multi-tenant travel SaaS with high-grade RBAC for camp owners, clients, and admins.</p>
            </div>
            
            <div style={{ borderLeft: '2px solid #8a2be2', paddingLeft: '0.75rem', margin: '0.75rem 0' }}>
              <p style={{ color: '#e0aaff', fontWeight: 'bold' }}>3. CRM Flask Web App</p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Stack: Flask, SQLite, WhatsApp API, ReportLab PDF</p>
              <p style={{ fontSize: '0.9rem' }}>Engineered dynamic automation for quotes, automated dashboards, WhatsApp quotation distribution, and localized currency validations.</p>
            </div>

            <div style={{ borderLeft: '2px solid #2575fc', paddingLeft: '0.75rem', margin: '0.75rem 0' }}>
              <p style={{ color: '#60a5fa', fontWeight: 'bold' }}>4. AI Chatbot (Full Stack LLM App)</p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Stack: Django, React, Groq LLM API, SQLite</p>
              <p style={{ fontSize: '0.9rem' }}>Created RESTful APIs for conversational responses, document file upload parsing, and secure chat session management.</p>
            </div>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div style={{ color: '#e5e7eb' }}>
            <p style={{ color: '#00f2fe', fontWeight: 'bold', marginBottom: '0.5rem' }}>$ query_career_history()</p>
            <div style={{ marginBottom: '0.75rem' }}>
              <p><span style={{ color: '#f3f4f6', fontWeight: 'bold' }}>Software Developer</span> @ WARALS Technologies Pvt Ltd</p>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Jul 2025 – Oct 2025 (3 Months)</p>
              <p style={{ fontSize: '0.9rem' }}>- Developed dynamic custom CRM modules using Flask & SQLite.</p>
              <p style={{ fontSize: '0.9rem' }}>- Collaborated with senior teams to resolve complex bottlenecks.</p>
            </div>
            <div>
              <p><span style={{ color: '#f3f4f6', fontWeight: 'bold' }}>Back-End Intern</span> @ SALESQUEEN SOFTWARE SOLUTIONS</p>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Jun 2025 – Jul 2025 (1 Month)</p>
              <p style={{ fontSize: '0.9rem' }}>- Programmed and refactored backend scripts in PHP.</p>
              <p style={{ fontSize: '0.9rem' }}>- Interfaced with UI engineers to build responsive integrations.</p>
            </div>
          </div>
        );
        break;

      case 'certifications':
        output = (
          <div style={{ color: '#e5e7eb' }}>
            <p style={{ color: '#00f2fe', fontWeight: 'bold', marginBottom: '0.5rem' }}>$ list --accreditations</p>
            <p>🏅 <span style={{ color: '#c084fc', fontWeight: 'bold' }}>Certified Python Programmer</span> - Great Learning</p>
            <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginLeft: '1.5rem', marginBottom: '0.5rem' }}>Validated proficiency in Object-Oriented Programming (OOP) and complex scripting.</p>
            
            <p>🏅 <span style={{ color: '#00f2fe', fontWeight: 'bold' }}>SQL Certification</span> - Advanced Database Management</p>
            <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginLeft: '1.5rem' }}>Validated understanding of relational systems, complex nested subqueries, and execution indexing optimizations.</p>
          </div>
        );
        break;

      default:
        output = (
          <div style={{ color: '#ef4444' }}>
            <p>Command not found: "{cmd}". Type <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>help</span> to list active triggers.</p>
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div style={styles.container}>
      {/* Quick click controls */}
      <div style={styles.quickCommands}>
        <span style={styles.quickLabel}>Click to run:</span>
        <div style={styles.buttonGroup}>
          {quickCommands.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleCommand(item.cmd)}
              style={styles.quickBtn}
              className="tag tag-cyan"
            >
              <Play size={10} style={{ marginRight: '4px' }} />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal window */}
      <div style={styles.terminalWindow} onClick={handleTerminalClick}>
        {/* Title Bar */}
        <div style={styles.titleBar}>
          <div style={styles.macDots}>
            <span style={{ ...styles.dot, backgroundColor: '#ff5f56' }}></span>
            <span style={{ ...styles.dot, backgroundColor: '#ffbd2e' }}></span>
            <span style={{ ...styles.dot, backgroundColor: '#27c93f' }}></span>
          </div>
          <div style={styles.titleText}>
            <TerminalIcon size={14} style={{ marginRight: '6px', color: '#9ca3af' }} />
            yash_arya@portfolio_shell: ~/bin
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); handleCommand('clear'); }} 
            style={styles.resetBtn}
            title="Reset Terminal"
          >
            <RefreshCw size={12} />
          </button>
        </div>

        {/* Console Body */}
        <div style={styles.terminalBody}>
          {history.map((item, idx) => (
            <div key={idx} style={styles.historyRow}>
              {item.command !== 'system_init' && (
                <div style={styles.promptLine}>
                  <span style={styles.promptUser}>yash@core_dev</span>
                  <span style={styles.promptColon}>:</span>
                  <span style={styles.promptPath}>~</span>
                  <span style={styles.promptDollar}>$</span>
                  <span style={styles.promptCmd}>{item.command}</span>
                </div>
              )}
              <div style={styles.outputLine}>{item.output}</div>
            </div>
          ))}
          
          {/* Active Prompt */}
          <div style={styles.activeLine}>
            <span style={styles.promptUser}>yash@core_dev</span>
            <span style={styles.promptColon}>:</span>
            <span style={styles.promptPath}>~</span>
            <span style={styles.promptDollar}>$</span>
            <div style={styles.inputWrapper}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={styles.terminalInput}
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
              <div style={styles.customInputDisplay}>
                {input}
                <span className="cursor" style={styles.blinkingCursor}></span>
              </div>
            </div>
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: '100%',
    maxWidth: '850px',
    margin: '0 auto',
    padding: '1rem',
  },
  quickCommands: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
    alignItems: 'flex-start',
  },
  quickLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  quickBtn: {
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0, 242, 254, 0.05)',
  },
  terminalWindow: {
    width: '100%',
    backgroundColor: '#05070f',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.05)',
    overflow: 'hidden',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    textAlign: 'left',
    cursor: 'text',
  },
  titleBar: {
    backgroundColor: '#0c0f1d',
    padding: '0.75rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  macDots: {
    display: 'flex',
    gap: '6px',
    width: '60px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  titleText: {
    color: 'var(--text-secondary)',
    fontSize: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
  },
  resetBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    borderRadius: '4px',
    transition: 'color 0.2s, background 0.2s',
  },
  terminalBody: {
    padding: '1.25rem',
    minHeight: '280px',
    maxHeight: '400px',
    overflowY: 'auto',
    lineHeight: '1.5',
    color: '#e5e7eb',
  },
  historyRow: {
    marginBottom: '1rem',
  },
  promptLine: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2px',
    marginBottom: '0.25rem',
  },
  promptUser: {
    color: '#4facfe',
    fontWeight: 'bold',
  },
  promptColon: {
    color: '#e5e7eb',
  },
  promptPath: {
    color: '#a78bfa',
  },
  promptDollar: {
    color: '#f3f4f6',
    marginRight: '6px',
  },
  promptCmd: {
    color: '#00f2fe',
    fontWeight: '500',
  },
  outputLine: {
    paddingLeft: '0.25rem',
  },
  activeLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  inputWrapper: {
    position: 'relative',
    flexGrow: 1,
    display: 'inline-flex',
    alignItems: 'center',
  },
  terminalInput: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'transparent',
    caretColor: 'transparent',
  },
  customInputDisplay: {
    color: '#00f2fe',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    minHeight: '1.2rem',
  },
  blinkingCursor: {
    display: 'inline-block',
    width: '8px',
    height: '15px',
    backgroundColor: '#00f2fe',
    marginLeft: '3px',
    animation: 'blink 1s step-end infinite',
  },
};

// Add blinking animation style dynamically to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes blink {
      from, to { background-color: transparent }
      50% { background-color: #00f2fe }
    }
  `;
  document.head.appendChild(styleSheet);
}
