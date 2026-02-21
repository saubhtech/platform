'use client';

import { useEffect, useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';

interface WaChannel {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  isActive: boolean;
}

interface WaMessage {
  id: string;
  direction: string;
  body: string | null;
  mediaType: string | null;
  status: string;
  sentAt: string;
}

interface WaConversation {
  id: string;
  status: string;
  isBot: boolean;
  assignedTo: number | null;
  updatedAt: string;
  contact: { id: string; whatsapp: string; name: string | null };
  channel: { id: string; name: string; type: string };
  messages: WaMessage[];
}

export default function InboxPage() {
  const [channels, setChannels] = useState<WaChannel[]>([]);
  const [activeChannel, setActiveChannel] = useState<string>('');
  const [conversations, setConversations] = useState<WaConversation[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [messages, setMessages] = useState<WaMessage[]>([]);
  const [msgInput, setMsgInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'ASSIGNED' | 'RESOLVED'>('ALL');

  const fetchChannels = async () => {
    try {
      const res = await fetch(`${API}/api/crm/channels`);
      const data = await res.json();
      setChannels(data || []);
      if (data?.length > 0 && !activeChannel) {
        setActiveChannel(data[0].id);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchConversations = async () => {
    if (!activeChannel) return;
    try {
      const params = new URLSearchParams();
      params.set('channelId', activeChannel);
      if (filter !== 'ALL') params.set('status', filter);
      const res = await fetch(`${API}/api/crm/conversations?${params}`);
      const json = await res.json();
      setConversations(json.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (convId: string) => {
    try {
      const res = await fetch(`${API}/api/crm/conversations/${convId}/messages?limit=100`);
      const json = await res.json();
      setMessages(json.data || []);
    } catch (e) {
      console.error(e);
    }
  };

  const sendMessage = async () => {
    if (!msgInput.trim() || !selected) return;
    setSending(true);
    try {
      await fetch(`${API}/api/crm/conversations/${selected}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: msgInput }),
      });
      setMsgInput('');
      await fetchMessages(selected);
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  };

  const resolveConv = async (id: string) => {
    await fetch(`${API}/api/crm/conversations/${id}/resolve`, { method: 'PATCH' });
    await fetchConversations();
  };

  const toggleBot = async (id: string) => {
    await fetch(`${API}/api/crm/conversations/${id}/toggle-bot`, { method: 'PATCH' });
    await fetchConversations();
  };

  useEffect(() => { fetchChannels(); }, []);
  useEffect(() => {
    setSelected(null);
    setMessages([]);
    setLoading(true);
    fetchConversations();
  }, [activeChannel, filter]);
  useEffect(() => { if (selected) fetchMessages(selected); }, [selected]);

  // Auto-refresh every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      fetchConversations();
      if (selected) fetchMessages(selected);
    }, 5000);
    return () => clearInterval(timer);
  }, [selected, filter, activeChannel]);

  const selectedConv = conversations.find(c => c.id === selected);
  const activeChannelData = channels.find(c => c.id === activeChannel);

  return (
    <div>
      <h1 style={titleStyle}>\uD83D\uDCAC Inbox</h1>

      {/* Channel Switcher */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {channels.map(ch => (
          <button key={ch.id} onClick={() => setActiveChannel(ch.id)} style={{
            padding: '8px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
            background: activeChannel === ch.id
              ? ch.type === 'WABA' ? 'rgba(34,197,94,0.15)' : 'rgba(139,92,246,0.15)'
              : 'rgba(255,255,255,0.04)',
            color: activeChannel === ch.id
              ? ch.type === 'WABA' ? '#4ade80' : '#a78bfa'
              : 'rgba(255,255,255,0.4)',
            border: activeChannel === ch.id
              ? ch.type === 'WABA' ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(139,92,246,0.3)'
              : '1px solid rgba(255,255,255,0.08)',
          }}>
            {ch.type === 'WABA' ? '\uD83C\uDFE2' : '\uD83D\uDCF1'} {ch.name}
            <span style={{ marginLeft: '6px', fontSize: '10px', opacity: 0.6 }}>{ch.type}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '24px', height: 'calc(100vh - 200px)' }}>
        {/* Conversation list */}
        <div style={{ width: '360px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            {(['ALL', 'OPEN', 'ASSIGNED', 'RESOLVED'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                ...filterBtnStyle,
                background: filter === f ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.05)',
                color: filter === f ? '#a78bfa' : 'rgba(255,255,255,0.5)',
                border: filter === f ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(255,255,255,0.08)',
              }}>{f}</button>
            ))}
          </div>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {loading ? <div style={{ color: 'rgba(255,255,255,0.3)', padding: '20px', textAlign: 'center' }}>Loading...</div> :
              conversations.length === 0 ? <div style={{ color: 'rgba(255,255,255,0.3)', padding: '20px', textAlign: 'center' }}>No conversations on this channel yet.</div> :
              conversations.map(conv => (
                <div key={conv.id} onClick={() => setSelected(conv.id)} style={{
                  ...convItemStyle,
                  background: selected === conv.id ? 'rgba(139,92,246,0.1)' : 'rgba(255,255,255,0.03)',
                  borderColor: selected === conv.id ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.06)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>
                      {conv.contact.name || conv.contact.whatsapp}
                    </span>
                    <span style={statusBadge(conv.status)}>{conv.status}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                    {conv.contact.whatsapp}
                  </div>
                  {conv.messages[0] && (
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {conv.messages[0].direction === 'OUT' ? '\u2197 ' : '\u2199 '}
                      {conv.messages[0].body || '[media]'}
                    </div>
                  )}
                  {conv.isBot && (
                    <div style={{ fontSize: '10px', color: '#c084fc', marginTop: '4px' }}>\uD83E\uDD16 Bot Active</div>
                  )}
                </div>
              ))
            }
          </div>
        </div>

        {/* Message thread */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
          {!selected ? (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.25)' }}>
              Select a conversation
            </div>
          ) : (
            <>
              {/* Header */}
              <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff' }}>
                    {selectedConv?.contact.name || selectedConv?.contact.whatsapp}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                    {selectedConv?.contact.whatsapp} \u2022 {activeChannelData?.name || ''}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => toggleBot(selected)} style={actionBtnStyle}>
                    {selectedConv?.isBot ? '\uD83E\uDD16 Bot ON' : '\uD83D\uDC64 Bot OFF'}
                  </button>
                  {selectedConv?.status !== 'RESOLVED' && (
                    <button onClick={() => resolveConv(selected)} style={{ ...actionBtnStyle, background: 'rgba(34,197,94,0.15)', color: '#4ade80' }}>
                      \u2713 Resolve
                    </button>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {messages.map(msg => (
                  <div key={msg.id} style={{
                    alignSelf: msg.direction === 'OUT' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    background: msg.direction === 'OUT' ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.06)',
                    border: msg.direction === 'OUT' ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    fontSize: '14px',
                    color: '#e2e8f0',
                  }}>
                    <div>{msg.body || `[${msg.mediaType || 'media'}]`}</div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '4px', textAlign: msg.direction === 'OUT' ? 'right' : 'left' }}>
                      {new Date(msg.sentAt).toLocaleTimeString()} \u2022 {msg.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '10px' }}>
                <input
                  value={msgInput}
                  onChange={e => setMsgInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  style={inputStyle}
                />
                <button onClick={sendMessage} disabled={sending || !msgInput.trim()} style={sendBtnStyle}>
                  {sending ? '...' : 'Send'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const titleStyle: React.CSSProperties = { fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '28px', letterSpacing: '-0.03em', color: '#fff', marginBottom: '16px' };
const filterBtnStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' };
const convItemStyle: React.CSSProperties = { padding: '12px 14px', borderRadius: '12px', cursor: 'pointer', border: '1px solid', transition: 'all 0.15s' };
const actionBtnStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' };
const inputStyle: React.CSSProperties = { flex: 1, padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', fontSize: '14px', outline: 'none' };
const sendBtnStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer' };

function statusBadge(status: string): React.CSSProperties {
  const colors: Record<string, { bg: string; color: string }> = {
    OPEN: { bg: 'rgba(234,179,8,0.15)', color: '#fbbf24' },
    ASSIGNED: { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa' },
    RESOLVED: { bg: 'rgba(34,197,94,0.15)', color: '#4ade80' },
  };
  const c = colors[status] || colors.OPEN;
  return { padding: '2px 8px', borderRadius: '6px', background: c.bg, color: c.color, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' };
}
