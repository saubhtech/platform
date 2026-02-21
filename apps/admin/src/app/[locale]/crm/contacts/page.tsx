'use client';

import { useEffect, useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.saubh.tech';

interface WaChannel {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
}

interface WaContact {
  id: string;
  whatsapp: string;
  name: string | null;
  userId: number | null;
  isBlocked: boolean;
  optedOut: boolean;
  createdAt: string;
  conversations: any[];
}

export default function ContactsPage() {
  const [channels, setChannels] = useState<WaChannel[]>([]);
  const [activeChannel, setActiveChannel] = useState<string>('');
  const [contacts, setContacts] = useState<WaContact[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newWhatsapp, setNewWhatsapp] = useState('');
  const [newName, setNewName] = useState('');

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

  const fetchContacts = async () => {
    if (!activeChannel) return;
    try {
      const params = new URLSearchParams();
      params.set('channelId', activeChannel);
      if (search) params.set('search', search);
      const res = await fetch(`${API}/api/crm/contacts?${params}`);
      const json = await res.json();
      setContacts(json.data || []);
      setTotal(json.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const addContact = async () => {
    if (!newWhatsapp.trim()) return;
    try {
      await fetch(`${API}/api/crm/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsapp: newWhatsapp.trim(), name: newName.trim() || undefined }),
      });
      setNewWhatsapp('');
      setNewName('');
      setShowAdd(false);
      await fetchContacts();
    } catch (e) {
      console.error(e);
    }
  };

  const toggleBlock = async (id: string, current: boolean) => {
    await fetch(`${API}/api/crm/contacts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isBlocked: !current }),
    });
    await fetchContacts();
  };

  useEffect(() => { fetchChannels(); }, []);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => fetchContacts(), search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [search, activeChannel]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h1 style={titleStyle}>\uD83D\uDC64 Contacts <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>({total})</span></h1>
        <button onClick={() => setShowAdd(!showAdd)} style={addBtnStyle}>
          + Add Contact
        </button>
      </div>

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

      {showAdd && (
        <div style={addFormStyle}>
          <input value={newWhatsapp} onChange={e => setNewWhatsapp(e.target.value)} placeholder="WhatsApp number (e.g. 919876543210)" style={inputStyle} />
          <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Name (optional)" style={inputStyle} />
          <button onClick={addContact} style={saveBtnStyle}>Save</button>
        </div>
      )}

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name or number..."
        style={{ ...inputStyle, marginBottom: '16px', width: '100%', maxWidth: '400px' }}
      />

      {loading ? (
        <div style={{ color: 'rgba(255,255,255,0.3)' }}>Loading...</div>
      ) : contacts.length === 0 ? (
        <div style={{ color: 'rgba(255,255,255,0.3)', padding: '40px', textAlign: 'center' }}>No contacts on this channel yet.</div>
      ) : (
        <div style={{ display: 'grid', gap: '8px' }}>
          {/* Header */}
          <div style={headerRowStyle}>
            <span style={{ flex: 1 }}>Name</span>
            <span style={{ width: '180px' }}>WhatsApp</span>
            <span style={{ width: '100px' }}>Status</span>
            <span style={{ width: '100px' }}>Linked</span>
            <span style={{ width: '140px' }}>Created</span>
            <span style={{ width: '100px' }}>Actions</span>
          </div>
          {contacts.map(c => (
            <div key={c.id} style={rowStyle}>
              <span style={{ flex: 1, fontWeight: 500, color: '#fff' }}>{c.name || '\u2014'}</span>
              <span style={{ width: '180px', color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace', fontSize: '13px' }}>{c.whatsapp}</span>
              <span style={{ width: '100px' }}>
                {c.isBlocked ? <span style={{ color: '#f87171' }}>Blocked</span> :
                 c.optedOut ? <span style={{ color: '#fbbf24' }}>Opted Out</span> :
                 <span style={{ color: '#4ade80' }}>Active</span>}
              </span>
              <span style={{ width: '100px', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                {c.userId ? `User #${c.userId}` : '\u2014'}
              </span>
              <span style={{ width: '140px', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                {new Date(c.createdAt).toLocaleDateString()}
              </span>
              <span style={{ width: '100px' }}>
                <button onClick={() => toggleBlock(c.id, c.isBlocked)} style={{
                  ...smallBtnStyle,
                  color: c.isBlocked ? '#4ade80' : '#f87171',
                }}>
                  {c.isBlocked ? 'Unblock' : 'Block'}
                </button>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const titleStyle: React.CSSProperties = { fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '28px', letterSpacing: '-0.03em', color: '#fff' };
const addBtnStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer' };
const addFormStyle: React.CSSProperties = { display: 'flex', gap: '10px', marginBottom: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' };
const inputStyle: React.CSSProperties = { padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', fontSize: '14px', outline: 'none' };
const saveBtnStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '10px', background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80', fontWeight: 600, cursor: 'pointer' };
const headerRowStyle: React.CSSProperties = { display: 'flex', gap: '12px', padding: '10px 16px', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.06)' };
const rowStyle: React.CSSProperties = { display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' };
const smallBtnStyle: React.CSSProperties = { padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' };
