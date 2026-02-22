'use client';

import { useEffect, useState, useCallback } from 'react';
import { useUser } from '@/context/UserContext';
import { useChannel } from '@/context/ChannelContext';
import GlassCard from '@/components/ui/GlassCard';
import Avatar from '@/components/ui/Avatar';
import ChannelBadge from '@/components/ui/ChannelBadge';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';

interface Channel {
  id: string;
  name: string;
  type: string;
  phone: string;
  isActive: boolean;
}

interface BotConfigData {
  channelId: string;
  isEnabled: boolean;
  systemPrompt: string | null;
  handoffKeywords: string[];
  greetingMessage: string | null;
}

interface BotStatus {
  channelId: string;
  channelName: string;
  phone: string;
  type: string;
  defaultBotEnabled: boolean;
  config: BotConfigData | null;
}

interface BotStats {
  autoReplies: number;
  handoffs: number;
  newConversations: number;
}

export default function SettingsPage() {
  const { user, logout } = useUser();
  const { selectedChannel, setSelectedChannel } = useChannel();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [botStatuses, setBotStatuses] = useState<BotStatus[]>([]);
  const [expandedBot, setExpandedBot] = useState<string | null>(null);
  const [botForms, setBotForms] = useState<Record<string, BotConfigData>>({});
  const [savingBot, setSavingBot] = useState<string | null>(null);
  const [savedBot, setSavedBot] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState<Record<string, string>>({});
  const [botStats, setBotStats] = useState<BotStats>({ autoReplies: 0, handoffs: 0, newConversations: 0 });
  const [notifications, setNotifications] = useState({ sound: true, desktop: false });

  useEffect(() => {
    fetch(`${API}/api/crm/channels`).then(r => r.json()).then(setChannels).catch(console.error);
  }, []);

  const fetchBotStatus = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/crm/bot/status`);
      const data: BotStatus[] = await res.json();
      setBotStatuses(data);
      // Init forms from fetched data
      const forms: Record<string, BotConfigData> = {};
      data.forEach(s => {
        forms[s.channelId] = {
          channelId: s.channelId,
          isEnabled: s.config?.isEnabled ?? s.defaultBotEnabled,
          systemPrompt: s.config?.systemPrompt ?? null,
          handoffKeywords: s.config?.handoffKeywords ?? ['agent', 'human', 'help', 'support', 'talk'],
          greetingMessage: s.config?.greetingMessage ?? null,
        };
      });
      setBotForms(forms);
    } catch (e) { console.error(e); }
  }, []);

  const fetchBotStats = useCallback(async () => {
    try {
      // Count bot messages in last 24h from conversations
      const since = new Date(Date.now() - 86400000).toISOString();
      const convRes = await fetch(`${API}/api/crm/conversations?status=ALL&limit=200`);
      const convData = await convRes.json();
      const convs = convData.data || [];
      let autoReplies = 0;
      let handoffs = 0;
      let newConvs = 0;
      convs.forEach((c: any) => {
        const created = new Date(c.createdAt).getTime();
        if (created > Date.now() - 86400000) {
          if (c.isBot) newConvs++;
        }
        if (!c.isBot && c.messages?.some((m: any) => m.direction === 'OUT')) {
          // Was bot, now handed off
        }
      });
      setBotStats({ autoReplies, handoffs, newConversations: newConvs });
    } catch (e) { console.error(e); }
  }, []);

  useEffect(() => { fetchBotStatus(); fetchBotStats(); }, [fetchBotStatus, fetchBotStats]);

  const toggleBotEnabled = async (channelId: string) => {
    const current = botForms[channelId];
    if (!current) return;
    const newEnabled = !current.isEnabled;
    setBotForms(prev => ({ ...prev, [channelId]: { ...prev[channelId], isEnabled: newEnabled } }));
    try {
      await fetch(`${API}/api/crm/bot/config/${channelId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isEnabled: newEnabled }),
      });
    } catch (e) {
      console.error(e);
      setBotForms(prev => ({ ...prev, [channelId]: { ...prev[channelId], isEnabled: !newEnabled } }));
    }
  };

  const saveBotConfig = async (channelId: string) => {
    const form = botForms[channelId];
    if (!form) return;
    setSavingBot(channelId);
    try {
      await fetch(`${API}/api/crm/bot/config/${channelId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isEnabled: form.isEnabled,
          systemPrompt: form.systemPrompt || null,
          handoffKeywords: form.handoffKeywords,
          greetingMessage: form.greetingMessage || null,
        }),
      });
      setSavedBot(channelId);
      setTimeout(() => setSavedBot(null), 2000);
    } catch (e) { console.error(e); }
    finally { setSavingBot(null); }
  };

  const addKeyword = (channelId: string) => {
    const val = (tagInput[channelId] || '').trim().toLowerCase();
    if (!val) return;
    const current = botForms[channelId]?.handoffKeywords || [];
    if (current.includes(val)) return;
    setBotForms(prev => ({
      ...prev,
      [channelId]: { ...prev[channelId], handoffKeywords: [...current, val] },
    }));
    setTagInput(prev => ({ ...prev, [channelId]: '' }));
  };

  const removeKeyword = (channelId: string, keyword: string) => {
    const current = botForms[channelId]?.handoffKeywords || [];
    setBotForms(prev => ({
      ...prev,
      [channelId]: { ...prev[channelId], handoffKeywords: current.filter(k => k !== keyword) },
    }));
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const perm = await Notification.requestPermission();
      if (perm === 'granted') {
        setNotifications(prev => ({ ...prev, desktop: true }));
      }
    }
  };

  const usertypeBadge: Record<string, { label: string; color: string }> = {
    BO: { label: 'Business Owner', color: '#7C3AED' },
    GW: { label: 'Gig Worker', color: '#EC4899' },
    SA: { label: 'Super Admin', color: '#F97316' },
    AD: { label: 'Admin', color: '#3B82F6' },
  };

  const ut = usertypeBadge[user?.usertype || 'BO'] || usertypeBadge.BO;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#F8F8FF', marginBottom: '24px', letterSpacing: '-0.02em' }}>
        ⚙️ Settings
      </h1>

      {/* SECTION 1 — Profile */}
      <SectionLabel>Profile</SectionLabel>
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '3px', borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
            <div style={{ padding: '2px', borderRadius: '50%', background: '#0A0A0F' }}>
              <Avatar name={user?.fname || null} size="lg" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#F8F8FF' }}>{user?.fname || 'User'}</div>
            <div style={{ fontSize: '13px', color: '#6B7280', fontFamily: 'monospace', marginTop: '2px' }}>{user?.whatsapp || ''}</div>
            <span style={{
              display: 'inline-block', marginTop: '6px', padding: '3px 10px', borderRadius: '20px',
              fontSize: '10px', fontWeight: 700, background: `${ut.color}15`, color: ut.color,
              border: `1px solid ${ut.color}30`,
            }}>{ut.label}</span>
          </div>
        </div>
      </GlassCard>

      {/* SECTION 2 — AI Bot Configuration */}
      <SectionLabel>🤖 AI Bot Configuration</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
        {botStatuses.map(status => {
          const form = botForms[status.channelId];
          if (!form) return null;
          const isExpanded = expandedBot === status.channelId;

          return (
            <GlassCard key={status.channelId}>
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>{status.type === 'WABA' ? '💼' : '📱'}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#F8F8FF' }}>{status.channelName}</span>
                      <ChannelBadge type={status.type} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#6B7280', fontFamily: 'monospace' }}>{status.phone}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* Pulsing green dot when enabled */}
                  {form.isEnabled && (
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%', background: '#10B981',
                      boxShadow: '0 0 6px #10B981, 0 0 12px rgba(16,185,129,0.4)',
                      animation: 'pulse 2s infinite',
                    }} />
                  )}
                  {/* Toggle */}
                  <button onClick={() => toggleBotEnabled(status.channelId)} style={{
                    width: '48px', height: '26px', borderRadius: '13px', border: 'none', cursor: 'pointer',
                    background: form.isEnabled ? 'linear-gradient(135deg, #7C3AED, #EC4899)' : 'rgba(255,255,255,0.1)',
                    position: 'relative', transition: 'background 0.2s ease',
                  }}>
                    <span style={{
                      position: 'absolute', top: '3px',
                      left: form.isEnabled ? '25px' : '3px',
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: '#fff', transition: 'left 0.2s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                    }} />
                  </button>
                </div>
              </div>

              {/* Expand toggle */}
              <button
                onClick={() => setExpandedBot(isExpanded ? null : status.channelId)}
                style={{
                  display: 'block', width: '100%', marginTop: '10px', padding: '6px 0',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '12px', color: '#6B7280', textAlign: 'center',
                  transition: 'color 0.15s ease',
                }}
              >
                {isExpanded ? '▴ Collapse settings' : '▾ Expand settings'}
              </button>

              {/* Expanded settings */}
              {isExpanded && (
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
                  {/* Greeting Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      First message when bot starts
                    </label>
                    <textarea
                      value={form.greetingMessage || ''}
                      onChange={e => setBotForms(prev => ({ ...prev, [status.channelId]: { ...prev[status.channelId], greetingMessage: e.target.value } }))}
                      placeholder="👋 Namaste! I'm Saubh Assistant.&#10;How can I help you today?&#10;(Type 'agent' to talk to our team)"
                      rows={3}
                      style={{
                        width: '100%', padding: '10px 12px', borderRadius: '10px', resize: 'vertical',
                        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                        color: '#F8F8FF', fontSize: '13px', outline: 'none', boxSizing: 'border-box',
                        fontFamily: 'inherit', lineHeight: 1.5,
                      }}
                    />
                  </div>

                  {/* System Prompt */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Bot personality &amp; instructions
                    </label>
                    <textarea
                      value={form.systemPrompt || ''}
                      onChange={e => setBotForms(prev => ({ ...prev, [status.channelId]: { ...prev[status.channelId], systemPrompt: e.target.value } }))}
                      placeholder="You are a helpful assistant for Saubh, an Indian phygital gig marketplace..."
                      rows={4}
                      style={{
                        width: '100%', padding: '10px 12px', borderRadius: '10px', resize: 'vertical',
                        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                        color: '#F8F8FF', fontSize: '13px', outline: 'none', boxSizing: 'border-box',
                        fontFamily: 'inherit', lineHeight: 1.5,
                      }}
                    />
                  </div>

                  {/* Handoff Keywords */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Words that connect to human agent
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                      {form.handoffKeywords.map(kw => (
                        <span key={kw} style={{
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                          padding: '4px 10px', borderRadius: '20px', fontSize: '12px',
                          background: 'rgba(124,58,237,0.12)', color: '#A78BFA',
                          border: '1px solid rgba(124,58,237,0.2)',
                        }}>
                          {kw}
                          <button onClick={() => removeKeyword(status.channelId, kw)} style={{
                            background: 'none', border: 'none', cursor: 'pointer', color: '#A78BFA',
                            fontSize: '14px', padding: '0 0 0 2px', lineHeight: 1,
                          }}>×</button>
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <input
                        value={tagInput[status.channelId] || ''}
                        onChange={e => setTagInput(prev => ({ ...prev, [status.channelId]: e.target.value }))}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addKeyword(status.channelId); } }}
                        placeholder="Type keyword + Enter"
                        style={{
                          flex: 1, padding: '8px 12px', borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                          color: '#F8F8FF', fontSize: '12px', outline: 'none',
                        }}
                      />
                      <button onClick={() => addKeyword(status.channelId)} style={{
                        padding: '8px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                        background: 'rgba(124,58,237,0.15)', color: '#7C3AED', fontSize: '12px', fontWeight: 600,
                      }}>Add</button>
                    </div>
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={() => saveBotConfig(status.channelId)}
                    disabled={savingBot === status.channelId}
                    className="btn-gradient"
                    style={{
                      padding: '10px 20px', fontSize: '13px', fontWeight: 600, width: '100%',
                      opacity: savingBot === status.channelId ? 0.6 : 1,
                    }}
                  >
                    {savedBot === status.channelId ? '✓ Saved' : savingBot === status.channelId ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>

      {/* SECTION 3 — Bot Activity */}
      <SectionLabel>Bot Activity (last 24hr)</SectionLabel>
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <StatBox label="Auto-replies" value={botStats.autoReplies} color="#7C3AED" />
          <StatBox label="Handoffs" value={botStats.handoffs} color="#EC4899" />
          <StatBox label="New convos" value={botStats.newConversations} color="#F97316" />
        </div>
      </GlassCard>

      {/* SECTION 4 — Channel Status */}
      <SectionLabel>Channel Status</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {channels.map(ch => (
          <GlassCard key={ch.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{ch.type === 'WABA' ? '💼' : '📱'}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F8F8FF' }}>{ch.name}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280', fontFamily: 'monospace' }}>{ch.phone}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ChannelBadge type={ch.type} />
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: 700,
                  background: ch.isActive ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
                  color: ch.isActive ? '#10B981' : '#EF4444',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ch.isActive ? '#10B981' : '#EF4444' }} />
                  {ch.isActive ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* SECTION 5 — Notifications */}
      <SectionLabel>Notifications</SectionLabel>
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ToggleRow
            label="New message sound"
            checked={notifications.sound}
            onChange={() => setNotifications(p => ({ ...p, sound: !p.sound }))}
          />
          <ToggleRow
            label="Desktop notifications"
            checked={notifications.desktop}
            onChange={requestNotificationPermission}
          />
        </div>
      </GlassCard>

      {/* SECTION 6 — Default Channel */}
      <SectionLabel>Default Channel Filter</SectionLabel>
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {(['ALL', 'EVOLUTION', 'WABA'] as const).map(ch => (
            <button key={ch} onClick={() => setSelectedChannel(ch)} style={{
              flex: 1, padding: '8px', borderRadius: '8px', border: 'none', fontSize: '12px',
              fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s ease',
              background: selectedChannel === ch ? 'linear-gradient(135deg, #7C3AED, #EC4899)' : 'rgba(255,255,255,0.05)',
              color: selectedChannel === ch ? '#fff' : '#6B7280',
            }}>
              {ch === 'ALL' ? 'All' : ch === 'EVOLUTION' ? '📱 SIM' : '💼 WABA'}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Logout */}
      <button onClick={logout} style={{
        width: '100%', padding: '12px', borderRadius: '12px',
        background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)',
        color: '#EF4444', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}>
        Sign Out
      </button>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px' }}>
      {children}
    </div>
  );
}

function ToggleRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '14px', color: '#F8F8FF' }}>{label}</span>
      <button onClick={onChange} style={{
        width: '44px', height: '24px', borderRadius: '12px', border: 'none', cursor: 'pointer',
        background: checked ? 'linear-gradient(135deg, #7C3AED, #EC4899)' : 'rgba(255,255,255,0.1)',
        position: 'relative', transition: 'background 0.2s ease',
      }}>
        <span style={{
          position: 'absolute', top: '3px',
          left: checked ? '23px' : '3px',
          width: '18px', height: '18px', borderRadius: '50%',
          background: '#fff', transition: 'left 0.2s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }} />
      </button>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div style={{ fontSize: '24px', fontWeight: 800, color, letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>{label}</div>
    </div>
  );
}
