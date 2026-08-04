import React, { useState } from 'react';
import { Database, FileCode, Check, Copy } from 'lucide-react';

export default function CodeMockup() {
  const [activeTab, setActiveTab] = useState<'python' | 'sql'>('python');
  const [copied, setCopied] = useState(false);

  const pythonCode = `from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied

class WebsiteUptimeMonitor(models.Model):
    """
    Core engine representing YashNex automated uptime checkers.
    Features async health triggers and RBAC access validation.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    site_url = models.URLField(max_length=255, db_index=True)
    check_interval = models.IntegerField(default=5) # minutes
    is_active = models.BooleanField(default=True)

    def validate_user_access(self, requesting_user):
        # RBAC Check: Ensure superusers or owners only can inspect website metrics
        if requesting_user.is_superuser or self.owner == requesting_user:
            return True
        raise PermissionDenied("Insufficient authorization clearance.")

    def calculate_uptime(self, duration_days=30):
        # Query optimization utilizing custom PostgreSQL database indexes
        checks = self.pings.filter(checked_at__gte=days_ago(duration_days))
        successful = checks.filter(status_code=200).count()
        total = checks.count()
        return (successful / total) * 100 if total > 0 else 100.0`;

  const sqlCode = `-- SQL Query Index Optimization for YashNex Log Aggregates
-- Designed to accelerate timestamp-based latency trend charts

CREATE TABLE IF NOT EXISTS ping_logs (
    id SERIAL PRIMARY KEY,
    website_id INT NOT NULL REFERENCES website_uptime_monitor(id) ON DELETE CASCADE,
    latency_ms INT,
    status_code INT NOT NULL,
    checked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexing check latency on site relationships and check times
CREATE INDEX idx_ping_logs_website_time 
ON ping_logs(website_id, checked_at DESC);

-- Analyze execution plan after index implementation
EXPLAIN ANALYZE 
SELECT AVG(latency_ms) as avg_latency
FROM ping_logs
WHERE website_id = 42 
  AND checked_at >= NOW() - INTERVAL '30 days';`;

  const copyCode = () => {
    const textToCopy = activeTab === 'python' ? pythonCode : sqlCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderPythonHighlighted = () => {
    return (
      <code style={styles.codeText}>
        <div><span style={styles.kw}>from</span> django.db <span style={styles.kw}>import</span> models</div>
        <div><span style={styles.kw}>from</span> django.contrib.auth.models <span style={styles.kw}>import</span> User</div>
        <div><span style={styles.kw}>from</span> django.core.exceptions <span style={styles.kw}>import</span> PermissionDenied</div>
        <div>&nbsp;</div>
        <div><span style={styles.kw}>class</span> <span style={styles.cls}>WebsiteUptimeMonitor</span>(models.Model):</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.comment}>"""</span></div>
        <div><span style={styles.comment}>&nbsp;&nbsp;&nbsp;&nbsp;Core engine representing YashNex automated uptime checkers.</span></div>
        <div><span style={styles.comment}>&nbsp;&nbsp;&nbsp;&nbsp;Features async health triggers and RBAC access validation.</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.comment}>"""</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;owner = models.ForeignKey(User, on_delete=models.CASCADE)</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;site_url = models.URLField(max_length=<span style={styles.num}>255</span>, db_index=<span style={styles.kw}>True</span>)</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;check_interval = models.IntegerField(default=<span style={styles.num}>5</span>) <span style={styles.comment}># minutes</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;is_active = models.BooleanField(default=<span style={styles.kw}>True</span>)</div>
        <div>&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.kw}>def</span> <span style={styles.fn}>validate_user_access</span>(<span style={styles.self}>self</span>, requesting_user):</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.comment}># RBAC Check: Ensure superusers or owners only can inspect metrics</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.kw}>if</span> requesting_user.is_superuser <span style={styles.kw}>or</span> <span style={styles.self}>self</span>.owner == requesting_user:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.kw}>return</span> <span style={styles.kw}>True</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.kw}>raise</span> PermissionDenied(<span style={styles.str}>"Insufficient authorization clearance."</span>)</div>
        <div>&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.kw}>def</span> <span style={styles.fn}>calculate_uptime</span>(<span style={styles.self}>self</span>, duration_days=<span style={styles.num}>30</span>):</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.comment}># Query optimization utilizing custom PostgreSQL database indexes</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checks = <span style={styles.self}>self</span>.pings.filter(checked_at__gte=days_ago(duration_days))</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;successful = checks.filter(status_code=<span style={styles.num}>200</span>).count()</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total = checks.count()</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.kw}>return</span> (successful / total) * <span style={styles.num}>100</span> <span style={styles.kw}>if</span> total &gt; <span style={styles.num}>0</span> <span style={styles.kw}>else</span> <span style={styles.num}>100.0</span></div>
      </code>
    );
  };

  const renderSqlHighlighted = () => {
    return (
      <code style={styles.codeText}>
        <div><span style={styles.comment}>-- SQL Query Index Optimization for YashNex Log Aggregates</span></div>
        <div><span style={styles.comment}>-- Designed to accelerate timestamp-based latency trend charts</span></div>
        <div>&nbsp;</div>
        <div><span style={styles.kw}>CREATE TABLE IF NOT EXISTS</span> <span style={styles.fn}>ping_logs</span> (</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;id <span style={styles.kw}>SERIAL PRIMARY KEY</span>,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;website_id <span style={styles.kw}>INT NOT NULL REFERENCES</span> website_uptime_monitor(id) <span style={styles.kw}>ON DELETE CASCADE</span>,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;latency_ms <span style={styles.kw}>INT</span>,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;status_code <span style={styles.kw}>INT NOT NULL</span>,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;checked_at <span style={styles.kw}>TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP</span></div>
        <div>);</div>
        <div>&nbsp;</div>
        <div><span style={styles.comment}>-- Indexing check latency on site relationships and check times</span></div>
        <div><span style={styles.kw}>CREATE INDEX</span> idx_ping_logs_website_time </div>
        <div><span style={styles.kw}>ON</span> ping_logs(website_id, checked_at <span style={styles.kw}>DESC</span>);</div>
        <div>&nbsp;</div>
        <div><span style={styles.comment}>-- Analyze execution plan after index implementation</span></div>
        <div><span style={styles.kw}>EXPLAIN ANALYZE</span> </div>
        <div><span style={styles.kw}>SELECT</span> <span style={styles.fn}>AVG</span>(latency_ms) <span style={styles.kw}>as</span> avg_latency</div>
        <div><span style={styles.kw}>FROM</span> ping_logs</div>
        <div><span style={styles.kw}>WHERE</span> website_id = <span style={styles.num}>42</span> </div>
        <div>&nbsp;&nbsp;<span style={styles.kw}>AND</span> checked_at &gt;= <span style={styles.fn}>NOW</span>() - <span style={styles.kw}>INTERVAL</span> <span style={styles.str}>'30 days'</span>;</div>
      </code>
    );
  };

  const lineCount = activeTab === 'python' ? 24 : 22;

  return (
    <div style={styles.mockupContainer}>
      <div style={styles.editorHeader}>
        {/* Dot controllers */}
        <div style={styles.controls}>
          <span style={{ ...styles.controlDot, backgroundColor: '#ef4444' }} />
          <span style={{ ...styles.controlDot, backgroundColor: '#eab308' }} />
          <span style={{ ...styles.controlDot, backgroundColor: '#22c55e' }} />
        </div>

        {/* Tab Buttons */}
        <div style={styles.tabsRow}>
          <button
            onClick={() => setActiveTab('python')}
            style={{
              ...styles.tabBtn,
              ...(activeTab === 'python' ? styles.tabBtnActive : {}),
            }}
          >
            <FileCode size={13} style={{ marginRight: '6px', color: '#c084fc' }} />
            models.py
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            style={{
              ...styles.tabBtn,
              ...(activeTab === 'sql' ? styles.tabBtnActive : {}),
            }}
          >
            <Database size={13} style={{ marginRight: '6px', color: '#3b82f6' }} />
            optimize.sql
          </button>
        </div>

        {/* Copy Button */}
        <button onClick={copyCode} style={styles.copyBtn} title="Copy code snippet">
          {copied ? (
            <Check size={14} style={{ color: '#22c55e' }} />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>

      {/* Editor Content Area */}
      <div style={styles.editorBody}>
        {/* Line Numbers */}
        <div style={styles.lineNumbersCol}>
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} style={styles.lineNumber}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Highlighted snippet */}
        <div style={styles.codeCol}>
          {activeTab === 'python' ? renderPythonHighlighted() : renderSqlHighlighted()}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  mockupContainer: {
    width: '100%',
    maxWidth: '540px',
    backgroundColor: '#070709',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '10px',
    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.82rem',
    textAlign: 'left',
  },
  editorHeader: {
    backgroundColor: '#0c0c0e',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    justifyContent: 'space-between',
  },
  controls: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    width: '50px',
  },
  controlDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  tabsRow: {
    display: 'flex',
    height: '100%',
    alignItems: 'flex-end',
  },
  tabBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    padding: '0.5rem 0.85rem',
    cursor: 'pointer',
    fontSize: '0.78rem',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid transparent',
    height: '34px',
    transition: 'all 0.2s',
  },
  tabBtnActive: {
    color: 'var(--text-primary)',
    borderBottomColor: 'var(--accent-blue)',
    backgroundColor: '#070709',
  },
  copyBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
    transition: 'color 0.2s',
  },
  editorBody: {
    display: 'flex',
    padding: '1.25rem 0.75rem',
    overflowX: 'auto',
    lineHeight: '1.5',
    minHeight: '380px',
    backgroundColor: '#070709',
  },
  lineNumbersCol: {
    width: '28px',
    textAlign: 'right',
    color: '#3f3f46',
    userSelect: 'none',
    marginRight: '1rem',
  },
  lineNumber: {
    minHeight: '1.25rem',
  },
  codeCol: {
    flexGrow: 1,
    whiteSpace: 'pre',
  },
  codeText: {
    display: 'block',
    fontFamily: 'inherit',
    color: '#e4e4e7',
  },
  // Syntax Highlight Tokens
  kw: { color: '#f43f5e', fontWeight: 'bold' },     // keywords (from, import, class, def)
  cls: { color: '#38bdf8' },                       // class name
  fn: { color: '#60a5fa' },                        // function name
  self: { color: '#fb923c', fontStyle: 'italic' }, // self keyword
  comment: { color: '#71717a', fontStyle: 'italic' }, // comments
  str: { color: '#34d399' },                       // strings
  num: { color: '#fbbf24' },                       // numbers
};
