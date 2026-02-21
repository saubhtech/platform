'use client';

import { useEffect, useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';

interface Channel { id: string; name: string; phone: string; type: string; }
interface Broadcast {
  id: string;
  name: string;
  body: string;
  status: string;
  scheduledAt: string | null;
  sentAt: string | null;
  createdAt: string;
  channel: Channel;
  _count: { recipients: number };
}

export default function BroadcastsPage() {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBroadcasts = async () => {
    try {
      const res = await fetch(`${API}/api/crm/broadcasts`);
      const json = await res.json();
      setBroadcasts(json.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBroadcasts(); }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={titleStyle}>📢 Broadcasts</h1>
        <button style={addBtnStyle} onClick={() => alert('Create broadcast form — coming soon')}>+ New Broadcast</button>
      </div>

      {loading ? (
        <div style={{ color: 'rgba(255,255,255,0.3)' }}>Loading...</div>
      ) : broadcasts.length === 0 ? (
        <div style={emptyStyle}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📢</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>No broadcasts yet</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>Create a broadcast to send messages to multiple contacts at once.</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '12px' }}>
          {broadcasts.map(bc => (
            <div key={bc.id} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '16px' }}>{bc.name}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                    {bc.channel.name} • {bc._count.recipients} recipients
                  </div>
                </div>
                <span style={statusBadge(bc.status)}>{bc.status}</span>
              </div>
              <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>
                {bc.body.substring(0, 200)}{bc.body.length > 200 ? '...' : ''}
              </div>
              <div style={{ marginTop: '10px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
                Created {new Date(bc.createdAt).toLocaleString()}
                {bc.sentAt && ` • Sent ${new Date(bc.sentAt).toLocaleString()}`}
                {bc.scheduledAt && !bc.sentAt && ` • Scheduled ${new Date(bc.scheduledAt).toLocaleString()}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const titleStyle: React.CSSProperties = { fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '28px', letterSpacing: '-0.03em', color: '#fff' };
const addBtnStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer' };
const emptyStyle: React.CSSProperties = { padding: '60px 20px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' };
const cardStyle: React.CSSProperties = { padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' };

function statusBadge(status: string): React.CSSProperties {
  const colors: Record<string, { bg: string; color: string }> = {
    DRAFT: { bg: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' },
    SCHEDULED: { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa' },
    SENDING: { bg: 'rgba(234,179,8,0.15)', color: '#fbbf24' },
    DONE: { bg: 'rgba(34,197,94,0.15)', color: '#4ade80' },
    FAILED: { bg: 'rgba(239,68,68,0.15)', color: '#f87171' },
  };
  const c = colors[status] || colors.DRAFT;
  return { padding: '3px 10px', borderRadius: '6px', background: c.bg, color: c.color, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' };
}
