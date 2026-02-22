'use client';

import { useEffect, useState, useCallback } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';

interface WaChannel {
  id: string;
  name: string;
  type: string;
  phone: string;
  isActive: boolean;
  defaultBotEnabled: boolean;
}

interface BotConfig {
  id: string;
  channelId: string;
  isEnabled: boolean;
  systemPrompt: string | null;
  greetingMessage: string | null;
  handoffKeywords: string[];
}

interface BotStatus {
  channelId: string;
  channelName: string;
  phone: string;
  type: string;
  defaultBotEnabled: boolean;
  config: BotConfig | null;
}

interface WaTemplate {
  id: string;
  channelId: string;
  name: string;
  category: string;
  language: string;
  status: string;
  body: string;
  header: string | null;
  footer: string | null;
  metaId: string | null;
  isActive: boolean;
  createdAt: string;
}

export default function CrmSettingsPage() {
  const [botStatuses, setBotStatuses] = useState<BotStatus[]>([]);
  const [templates, setTemplates] = useState<WaTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ id: string; msg: string; ok: boolean } | null>(null);

  // Editable config per channel
  const [configs, setConfigs] = useState<Record<string, {
    isEnabled: boolean;
    greetingMessage: string;
    systemPrompt: string;
    handoffKeywords: string[];
    keywordInput: string;
  }>>({});

  const fetchData = useCallback(async () => {
    try {
      const [botRes, tmplRes] = await Promise.all([
        fetch(`${API}/api/crm/bot/status`),
        fetch(`${API}/api/crm/templates`),
      ]);
      const botData: BotStatus[] = await botRes.json();
      const tmplData: WaTemplate[] = await tmplRes.json();

      setBotStatuses(botData);
      setTemplates(tmplData);

      // Initialize editable configs
      const cfgs: typeof configs = {};
      for (const bs of botData) {
        cfgs[bs.channelId] = {
          isEnabled: bs.config?.isEnabled ?? bs.defaultBotEnabled,
          greetingMessage: bs.config?.greetingMessage ?? '',
          systemPrompt: bs.config?.systemPrompt ?? '',
          handoffKeywords: bs.config?.handoffKeywords ?? ['agent', 'human', 'help', 'support', 'talk'],
          keywordInput: '',
        };
      }
      setConfigs(cfgs);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const updateConfig = (channelId: string, field: string, value: any) => {
    setConfigs(prev => ({ ...prev, [channelId]: { ...prev[channelId], [field]: value } }));
  };

  const addKeyword = (channelId: string) => {
    const cfg = configs[channelId];
    const kw = cfg.keywordInput.trim().toLowerCase();
    if (!kw || cfg.handoffKeywords.includes(kw)) return;
    updateConfig(channelId, 'handoffKeywords', [...cfg.handoffKeywords, kw]);
    updateConfig(channelId, 'keywordInput', '');
  };

  const removeKeyword = (channelId: string, kw: string) => {
    const cfg = configs[channelId];
    updateConfig(channelId, 'handoffKeywords', cfg.handoffKeywords.filter(k => k !== kw));
  };

  const saveConfig = async (channelId: string) => {
    setSaving(channelId);
    try {
      const cfg = configs[channelId];
      const res = await fetch(`${API}/api/crm/bot/config/${channelId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isEnabled: cfg.isEnabled,
          greetingMessage: cfg.greetingMessage || null,
          systemPrompt: cfg.systemPrompt || null,
          handoffKeywords: cfg.handoffKeywords,
        }),
      });
      if (res.ok) {
        setFeedback({ id: channelId, msg: 'Saved ✓', ok: true });
      } else {
        setFeedback({ id: channelId, msg: 'Save failed', ok: false });
      }
      setTimeout(() => setFeedback(null), 3000);
    } catch {
      setFeedback({ id: channelId, msg: 'Save failed', ok: false });
      setTimeout(() => setFeedback(null), 3000);
    } finally {
      setSaving(null);
    }
  };

  const syncTemplates = async (channelId: string) => {
    try {
      await fetch(`${API}/api/crm/templates/sync/${channelId}`, { method: 'POST' });
      await fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div>
        <h1 style={titleStyle}>⚙️ CRM Settings</h1>
        <div style={{ color: 'rgba(255,255,255,0.3)', padding: '40px', textAlign: 'center' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 style={titleStyle}>⚙️ CRM Settings</h1>

      {/* ─── Channels Overview ──────────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitle}>Channels</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {botStatuses.map(bs => (
            <div key={bs.channelId} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                  {bs.type === 'WABA' ? '🏢' : '📱'} {bs.channelName}
                </span>
                <span style={{
                  padding: '2px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700,
                  background: bs.type === 'WABA' ? 'rgba(34,197,94,0.15)' : 'rgba(139,92,246,0.15)',
                  color: bs.type === 'WABA' ? '#4ade80' : '#a78bfa',
                }}>{bs.type}</span>
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>{bs.phone}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                Bot: {configs[bs.channelId]?.isEnabled ? '🟢 Enabled' : '⚪ Disabled'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AI Bot Configuration ──────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitle}>🤖 AI Bot Configuration</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {botStatuses.map(bs => {
            const cfg = configs[bs.channelId];
            if (!cfg) return null;

            return (
              <div key={bs.channelId} style={{ ...cardStyle, width: '100%', maxWidth: '700px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                    {bs.type === 'WABA' ? '🏢' : '📱'} {bs.channelName}
                  </span>
                  <button
                    onClick={() => updateConfig(bs.channelId, 'isEnabled', !cfg.isEnabled)}
                    style={{
                      padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                      border: 'none',
                      background: cfg.isEnabled ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)',
                      color: cfg.isEnabled ? '#4ade80' : 'rgba(255,255,255,0.4)',
                      transition: 'all 0.15s',
                    }}
                  >
                    {cfg.isEnabled ? '✓ Bot Enabled' : '○ Bot Disabled'}
                  </button>
                </div>

                {/* Greeting Message */}
                <label style={labelStyle}>Greeting Message</label>
                <textarea
                  value={cfg.greetingMessage}
                  onChange={e => updateConfig(bs.channelId, 'greetingMessage', e.target.value)}
                  placeholder="Hello! How can I help you today?"
                  rows={2}
                  style={textareaStyle}
                />

                {/* System Prompt */}
                <label style={labelStyle}>System Prompt (optional)</label>
                <textarea
                  value={cfg.systemPrompt}
                  onChange={e => updateConfig(bs.channelId, 'systemPrompt', e.target.value)}
                  placeholder="You are a helpful assistant for our business..."
                  rows={3}
                  style={textareaStyle}
                />

                {/* Handoff Keywords */}
                <label style={labelStyle}>Handoff Keywords</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                  {cfg.handoffKeywords.map(kw => (
                    <span key={kw} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '3px 10px', borderRadius: '6px', fontSize: '12px',
                      background: 'rgba(139,92,246,0.15)', color: '#a78bfa',
                    }}>
                      {kw}
                      <span onClick={() => removeKeyword(bs.channelId, kw)} style={{ cursor: 'pointer', opacity: 0.6, fontSize: '14px' }}>×</span>
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    value={cfg.keywordInput}
                    onChange={e => updateConfig(bs.channelId, 'keywordInput', e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addKeyword(bs.channelId)}
                    placeholder="Add keyword..."
                    style={{ ...inputStyle, flex: 1 }}
                  />
                  <button onClick={() => addKeyword(bs.channelId)} style={smallBtnStyle}>Add</button>
                </div>

                {/* Save */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                  <button
                    onClick={() => saveConfig(bs.channelId)}
                    disabled={saving === bs.channelId}
                    style={saveBtnStyle}
                  >
                    {saving === bs.channelId ? 'Saving...' : 'Save Configuration'}
                  </button>
                  {feedback?.id === bs.channelId && (
                    <span style={{ fontSize: '13px', color: feedback.ok ? '#4ade80' : '#f87171' }}>
                      {feedback.msg}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── WABA Templates ────────────────────────────── */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={sectionTitle}>📝 WABA Templates</h2>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
          Manage message templates for WhatsApp Business API. Use the Template Studio in CRMWhats app for full creation flow.
        </p>

        {botStatuses.filter(bs => bs.type === 'WABA').map(bs => (
          <div key={bs.channelId} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>🏢 {bs.channelName}</span>
              <button onClick={() => syncTemplates(bs.channelId)} style={smallBtnStyle}>🔄 Sync from Meta</button>
            </div>

            {templates.filter(t => t.channelId === bs.channelId).length === 0 ? (
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', padding: '12px' }}>
                No templates yet. Sync from Meta or create in Template Studio.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {templates.filter(t => t.channelId === bs.channelId).map(t => (
                  <div key={t.id} style={{
                    padding: '12px 16px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
                        {t.category} • {t.language}
                        {t.body && ` • ${t.body.substring(0, 60)}${t.body.length > 60 ? '...' : ''}`}
                      </div>
                    </div>
                    <span style={{
                      padding: '3px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      ...templateStatusStyle(t.status),
                    }}>{t.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

/* ─── Styles (matching admin dark theme) ────────────────────────── */

const titleStyle: React.CSSProperties = {
  fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '28px',
  letterSpacing: '-0.03em', color: '#fff', marginBottom: '24px',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: '18px',
  color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em',
};

const cardStyle: React.CSSProperties = {
  padding: '16px 20px', borderRadius: '14px',
  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
  minWidth: '260px',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '12px', fontWeight: 600,
  color: 'rgba(255,255,255,0.5)', marginBottom: '6px', marginTop: '12px',
  textTransform: 'uppercase', letterSpacing: '0.04em',
};

const textareaStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: '10px',
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#e2e8f0', fontSize: '13px', outline: 'none', resize: 'vertical',
  fontFamily: 'inherit', boxSizing: 'border-box',
};

const inputStyle: React.CSSProperties = {
  padding: '8px 12px', borderRadius: '8px',
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#e2e8f0', fontSize: '13px', outline: 'none',
};

const smallBtnStyle: React.CSSProperties = {
  padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
  cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)',
  transition: 'all 0.15s',
};

const saveBtnStyle: React.CSSProperties = {
  padding: '10px 24px', borderRadius: '10px', fontSize: '13px', fontWeight: 700,
  cursor: 'pointer', border: 'none',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff', transition: 'all 0.15s',
};

function templateStatusStyle(status: string): { background: string; color: string } {
  switch (status) {
    case 'APPROVED': return { background: 'rgba(34,197,94,0.15)', color: '#4ade80' };
    case 'REJECTED': return { background: 'rgba(239,68,68,0.15)', color: '#f87171' };
    case 'PENDING': return { background: 'rgba(234,179,8,0.15)', color: '#fbbf24' };
    default: return { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' };
  }
}
