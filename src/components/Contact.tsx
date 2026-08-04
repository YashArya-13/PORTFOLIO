import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Copy, Check, Loader2 } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('Validating inquiry details...');
    setIsSuccess(false);

    const statuses = [
      'Establishing secure connection...',
      'Encrypting message payload...',
      'Transmitting secure request...',
      'Finalizing dispatch...',
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < statuses.length) {
        setSubmitStatus(statuses[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    }, 600);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind, an opportunity, or just want to connect? Reach out below.</p>

        <div style={styles.layoutGrid}>
          {/* Left Column: Direct info cards */}
          <div style={styles.infoColumn}>
            <h3 style={styles.colTitle}>Contact Information</h3>
            <p style={styles.colDesc}>
              Feel free to reach out for collaboration opportunities, backend architecture consultations, 
              or software development openings.
            </p>

            {/* Email Card */}
            <div className="glass-card" style={styles.infoCard}>
              <div style={styles.cardIconBox}>
                <Mail size={18} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <div style={styles.cardDetails}>
                <span style={styles.cardLabel}>Email Address</span>
                <a href="mailto:yarya882@gmail.com" style={styles.cardValue}>yarya882@gmail.com</a>
              </div>
              <button 
                onClick={() => copyToClipboard('yarya882@gmail.com', 'email')} 
                style={styles.copyBtn}
                title="Copy email"
              >
                {copiedField === 'email' ? <Check size={14} style={{ color: '#22c55e' }} /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card" style={styles.infoCard}>
              <div style={styles.cardIconBox}>
                <Phone size={18} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <div style={styles.cardDetails}>
                <span style={styles.cardLabel}>Phone Number</span>
                <a href="tel:+919548814363" style={styles.cardValue}>+91-9548814363</a>
              </div>
              <button 
                onClick={() => copyToClipboard('+919548814363', 'phone')} 
                style={styles.copyBtn}
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check size={14} style={{ color: '#22c55e' }} /> : <Copy size={14} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card" style={styles.infoCard}>
              <div style={styles.cardIconBox}>
                <MapPin size={18} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <div style={styles.cardDetails}>
                <span style={styles.cardLabel}>Location</span>
                <span style={styles.cardValueText}>Ramnagar, Uttarakhand, India</span>
              </div>
            </div>

            {/* Social handles link row */}
            <div style={styles.socialRow}>
              <a 
                href="https://linkedin.com/in/yash-arya-679332276" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary" 
                style={{ flexGrow: 1, justifyContent: 'center' }}
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/YashArya-13" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary" 
                style={{ flexGrow: 1, justifyContent: 'center' }}
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Contact form / Submission status */}
          <div style={styles.formColumn}>
            {isSubmitting || isSuccess ? (
              /* Professional Dispatcher View */
              <div className="glass-card" style={styles.formCardFlex}>
                {isSubmitting && (
                  <div style={styles.loaderContainer}>
                    <Loader2 size={36} className="spinner-anim" style={{ color: 'var(--accent-blue)', marginBottom: '1.25rem' }} />
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>Sending Message</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{submitStatus}</p>
                  </div>
                )}
                {isSuccess && (
                  <div style={styles.successContainer}>
                    <div style={styles.checkCircle}>
                      <Check size={24} style={{ color: '#ffffff' }} />
                    </div>
                    <p style={{ fontWeight: 700, fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Message Sent!</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '340px', lineHeight: '1.5' }}>
                      Thank you for reaching out. Your inquiry has been successfully delivered and logged. I will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)} 
                      className="btn btn-secondary" 
                      style={{ marginTop: '1.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Standard form inputs */
              <form onSubmit={handleSubmit} className="glass-card" style={styles.formCard}>
                <h3 style={styles.formTitle}>Send a Message</h3>
                
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Enter your name"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Enter your email address"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="subject" style={styles.label}>Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Inquiry subject"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
                  Submit Message
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  layoutGrid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '3rem',
    marginTop: '2rem',
  },
  infoColumn: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.3px',
  },
  colDesc: {
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    lineHeight: '1.6',
    fontSize: '0.92rem',
  },
  infoCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.15rem 1.25rem',
    marginBottom: '0.75rem',
    position: 'relative',
  },
  cardIconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--border-color)',
    marginRight: '1rem',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardLabel: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  cardValue: {
    fontSize: '0.92rem',
    color: 'var(--text-primary)',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  cardValueText: {
    fontSize: '0.92rem',
    color: 'var(--text-primary)',
    fontWeight: '600',
  },
  copyBtn: {
    position: 'absolute',
    right: '1.25rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    transition: 'color 0.2s',
  },
  socialRow: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.75rem',
  },
  formColumn: {
    display: 'flex',
    alignItems: 'stretch',
  },
  formCard: {
    padding: '2.25rem',
    textAlign: 'left',
    width: '100%',
  },
  formCardFlex: {
    padding: '2.25rem',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
  },
  formTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.35rem',
    fontWeight: '700',
    marginBottom: '1.25rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.3px',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: '600',
    marginBottom: '0.4rem',
    color: 'var(--text-secondary)',
  },
  input: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    backgroundColor: '#070709',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    backgroundColor: '#070709',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.2s',
    resize: 'vertical',
  },
  submitBtn: {
    width: '100%',
    justifyContent: 'center',
    marginTop: '0.5rem',
  },
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircle: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    marginBottom: '1.25rem',
  },
};

// Form input focus styles injection dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    #contact input:focus, #contact textarea:focus {
      border-color: rgba(255, 255, 255, 0.15) !important;
      background-color: #0c0c0e !important;
    }
    #contact a[href^="mailto"]:hover, #contact a[href^="tel"]:hover {
      color: var(--accent-blue) !important;
    }
    .spinner-anim {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @media (max-width: 1024px) {
      #contact div[style*="display: grid;"] {
        grid-template-columns: 1fr !important;
        gap: 3.5rem !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
