'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useChannel } from '@/context/ChannelContext';
import Avatar from '@/components/ui/Avatar';
import ChannelBadge from '@/components/ui/ChannelBadge';
import StatusDot from '@/components/ui/StatusDot';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { io, Socket } from 'socket.io-client';
import api from '@/lib/api';

const WS_URL = process.env.NEXT_PUBLIC_WS_URL || 'https://realtime.saubh.tech';

interface WaMessage {
  id: string;
  direction: string;
  body: string | null;
  mediaUrl: string | null;
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

type StatusFilter = 'ALL' | 'OPEN' | 'ASSIGNED' | 'RESOLVED';

function timeAgo(date: string): string {
  const now = Date.now();
  const d = new Date(date).getTime();
  const diff = Math.floor((now - d) / 1000);
  if (diff < 60) return 'now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}

const MEDIA_ICONS: Record<string, string> = {
  image: '🖼️',
  video: '🎬',
  audio: '🎵',
  document: '📄',
};

function MediaBubble({ msg }: { msg: WaMessage }) {
  if (!msg.mediaUrl) return null;
  const type = msg.mediaType || 'document';

  if (type === 'image') {
    return (
      <div style={{ marginBottom: msg.body ? '6px' : 0 }}>
        <img
          src={msg.mediaUrl}
          alt="media"
          style={{
            maxWidth: '100%', maxHeight: '220px', borderRadius: '10px',
            display: 'block', objectFit: 'cover',
          }}
          loading="lazy"
        />
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div style={{ marginBottom: msg.body ? '6px' : 0 }}>
        <video
          src={msg.mediaUrl}
          controls
          style={{ maxWidth: '100%', maxHeight: '220px', borderRadius: '10px', display: 'block' }}
        />
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div style={{ marginBottom: msg.body ? '6px' : 0 }}>
        <audio src={msg.mediaUrl} controls style={{ width: '100%', maxWidth: '260px' }} />
      </div>
    );
  }

  return (
    <a
      href={msg.mediaUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '8px 12px', borderRadius: '8px', textDecoration: 'none',
        background: 'rgba(255,255,255,0.06)', marginBottom: msg.body ? '6px' : 0,
      }}
    >
      <span style={{ fontSize: '20px' }}>📄</span>
      <span style={{ fontSize: '12px', color: '#A78BFA' }}>Download Document</span>
    </a>
  );
}

export default function InboxPage() {
  const { selectedChannel } = useChannel();
  const [channels, setChannels] = useState<any[]>([]);
  const [conversations, setConversations] = useState<WaConversation[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [messages, setMessages] = useState<WaMessage[]>([]);
  const [msgInput, setMsgInput] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<StatusFilter>('ALL');
  const [loading, setLoading] = useState(true);
  const [msgsLoading, setMsgsLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const selectedRef = useRef<string | null>(null);

  // Keep selectedRef in sync
  useEffect(() => { selectedRef.current = selected; }, [selected]);

  // ─── WebSocket connection ─────────────────────────────────────────────
  useEffect(() => {
    // Get JWT for WebSocket auth
    const token = typeof document !== 'undefined'
      ? document.cookie.split('; ').find(r => r.startsWith('saubh_token='))?.split('=')[1] || ''
      : '';

    const socket = io(`${WS_URL}/crm`, {
      transports: ['websocket', 'polling'],
      auth: { token },
      reconnection: true,
      reconnectionDelay: 2000,
      reconnectionAttempts: 20,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setWsConnected(true);
      socket.emit('crm:join:all'); // Join inbox-wide feed
    });

    socket.on('disconnect', () => {
      setWsConnected(false);
    });

    // Real-time inbound message
    socket.on('crm:message', (data: { conversationId: string; message: WaMessage; contact: any }) => {
      // Update messages if viewing this conversation
      if (selectedRef.current === data.conversationId) {
        setMessages(prev => {
          // Prevent duplicates
          if (prev.some(m => m.id === data.message.id)) return prev;
          return [...prev, data.message];
        });
      }

      // Update conversation list — bump to top with latest message
      setConversations(prev => {
        const idx = prev.findIndex(c => c.id === data.conversationId);
        if (idx === -1) {
          // New conversation not in list yet — trigger a re-fetch
          fetchConversations();
          return prev;
        }
        const updated = [...prev];
        const conv = { ...updated[idx] };
        conv.updatedAt = new Date().toISOString();
        conv.messages = [data.message];
        updated.splice(idx, 1);
        updated.unshift(conv);
        return updated;
      });
    });

    // Real-time conversation update (new conv, status change)
    socket.on('crm:update', (data: { conversationId: string; isNew?: boolean }) => {
      if (data.isNew) {
        fetchConversations();
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  // Join/leave conversation room when selection changes
  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;

    if (selected) {
      socket.emit('crm:join', { conversationId: selected });
    }

    return () => {
      if (selected) {
        socket.emit('crm:leave', { conversationId: selected });
      }
    };
  }, [selected]);

  // ─── REST fetches ─────────────────────────────────────────────────────
  const fetchChannels = useCallback(async () => {
    try {
      const data = await api.get<any[]>('/api/crm/channels');
      setChannels(data || []);
    } catch (e) { console.error(e); }
  }, []);

  const fetchConversations = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (filter !== 'ALL') params.set('status', filter);
      if (search) params.set('search', search);

      if (selectedChannel !== 'ALL' && channels.length > 0) {
        const ch = channels.find((c: any) => c.type === selectedChannel);
        if (ch) params.set('channelId', ch.id);
      }

      const json = await api.get<any>(`/api/crm/conversations?${params}`);
      setConversations(json.data || []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }, [filter, search, selectedChannel, channels]);

  const fetchMessages = useCallback(async (convId: string) => {
    setMsgsLoading(true);
    try {
      const json = await api.get<any>(`/api/crm/conversations/${convId}/messages?limit=100`);
      setMessages(json.data || []);
    } catch (e) { console.error(e); }
    finally { setMsgsLoading(false); }
  }, []);

  const sendMessage = async () => {
    if (!msgInput.trim() || !selected) return;
    setSending(true);
    try {
      await api.post(`/api/crm/conversations/${selected}/messages`, { body: msgInput });
      setMsgInput('');
      await fetchMessages(selected);
    } catch (e) { console.error(e); }
    finally { setSending(false); }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selected) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const uploadData = await api.upload<any>('/api/crm/media/upload', formData);

      await api.post(`/api/crm/conversations/${selected}/media`, {
        mediaUrl: uploadData.mediaUrl,
        mediaType: uploadData.mediaType,
        caption: msgInput.trim() || undefined,
        filename: uploadData.originalName,
      });

      setMsgInput('');
      await fetchMessages(selected);
    } catch (err: any) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const resolveConv = async (id: string) => {
    await api.patch(`/api/crm/conversations/${id}/resolve`);
    await fetchConversations();
  };

  const toggleBot = async (id: string) => {
    await api.patch(`/api/crm/conversations/${id}/toggle-bot`);
    await fetchConversations();
  };

  useEffect(() => { fetchChannels(); }, [fetchChannels]);
  useEffect(() => { setLoading(true); fetchConversations(); }, [fetchConversations]);
  useEffect(() => { if (selected) fetchMessages(selected); }, [selected, fetchMessages]);

  // Fallback polling only when WebSocket is disconnected (30s instead of 5s)
  useEffect(() => {
    if (wsConnected) return;
    const timer = setInterval(() => {
      fetchConversations();
      if (selected) fetchMessages(selected);
    }, 30000);
    return () => clearInterval(timer);
  }, [selected, wsConnected, fetchConversations, fetchMessages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    const el = document.getElementById('msg-scroll');
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const selectedConv = conversations.find(c => c.id === selected);

  const statusFilters: StatusFilter[] = ['ALL', 'OPEN', 'ASSIGNED', 'RESOLVED'];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* LEFT PANEL — Conversation List */}
      <div style={{
        width: '380px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,15,0.5)',
      }}
        className="conv-list-panel"
      >
        {/* Header */}
        <div style={{ padding: '20px 16px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#F8F8FF', margin: 0, letterSpacing: '-0.02em' }}>
              💬 Inbox
            </h1>
            {/* WS status indicator */}
            <span style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '10px', color: wsConnected ? '#10B981' : '#F59E0B',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: wsConnected ? '#10B981' : '#F59E0B',
                boxShadow: wsConnected ? '0 0 6px #10B981' : 'none',
              }} />
              {wsConnected ? 'Live' : 'Polling'}
            </span>
          </div>

          {/* Search */}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search conversations..."
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#F8F8FF',
              fontSize: '13px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          {/* Status Filters */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
            {statusFilters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '5px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.15s ease',
                background: filter === f ? 'rgba(124, 58, 237, 0.15)' : 'rgba(255,255,255,0.04)',
                color: filter === f ? '#7C3AED' : '#6B7280',
              }}>{f}</button>
            ))}
          </div>
        </div>

        {/* Conversation Cards */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px 8px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {loading ? (
            <div style={{ padding: '16px' }}><SkeletonLoader variant="avatar" count={6} /></div>
          ) : conversations.length === 0 ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: '#6B7280', fontSize: '13px' }}>
              No conversations found
            </div>
          ) : (
            conversations.map(conv => (
              <div
                key={conv.id}
                onClick={() => setSelected(conv.id)}
                className="glass-hover"
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '12px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: selected === conv.id ? 'rgba(124, 58, 237, 0.08)' : 'transparent',
                  border: selected === conv.id ? '1px solid rgba(124, 58, 237, 0.15)' : '1px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                <Avatar name={conv.contact.name || conv.contact.whatsapp} size="md" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#F8F8FF', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {conv.contact.name || conv.contact.whatsapp}
                    </span>
                    <span style={{ fontSize: '11px', color: '#6B7280', flexShrink: 0 }}>
                      {timeAgo(conv.updatedAt)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <ChannelBadge type={conv.channel.type} />
                    <StatusDot status={conv.status} isBot={conv.isBot} size={6} />
                    {conv.isBot && <span style={{ fontSize: '10px', color: '#7C3AED' }}>⚡ Bot</span>}
                  </div>
                  {conv.messages[0] && (
                    <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {conv.messages[0].direction === 'OUT' ? '↗ You: ' : ''}
                      {conv.messages[0].mediaType
                        ? `${MEDIA_ICONS[conv.messages[0].mediaType] || '📎'} ${conv.messages[0].body || conv.messages[0].mediaType}`
                        : conv.messages[0].body || '[media]'
                      }
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* RIGHT PANEL — Message Thread */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }} className="msg-panel">
        {!selected ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '48px' }}>💬</span>
            <span style={{ color: '#6B7280', fontSize: '15px' }}>Select a conversation to start messaging</span>
          </div>
        ) : (
          <>
            {/* Thread Header */}
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(19,19,26,0.5)',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setSelected(null)}
                  className="mobile-back-btn"
                  style={{
                    display: 'none', background: 'none', border: 'none',
                    color: '#6B7280', fontSize: '18px', cursor: 'pointer', padding: '4px',
                  }}
                >←</button>
                <Avatar name={selectedConv?.contact.name || selectedConv?.contact.whatsapp || null} size="md" />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#F8F8FF' }}>
                    {selectedConv?.contact.name || selectedConv?.contact.whatsapp}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    <span style={{ fontSize: '12px', color: '#6B7280' }}>{selectedConv?.contact.whatsapp}</span>
                    {selectedConv && <ChannelBadge type={selectedConv.channel.type} />}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => toggleBot(selected)} style={{
                  padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', border: 'none',
                  background: selectedConv?.isBot ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.05)',
                  color: selectedConv?.isBot ? '#7C3AED' : '#6B7280',
                  transition: 'all 0.15s ease',
                }}>
                  ⚡ {selectedConv?.isBot ? 'Bot ON' : 'Bot OFF'}
                </button>
                {selectedConv?.status !== 'RESOLVED' && (
                  <button onClick={() => resolveConv(selected)} style={{
                    padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', border: 'none',
                    background: 'rgba(16,185,129,0.12)', color: '#10B981',
                  }}>
                    ✓ Resolve
                  </button>
                )}
              </div>
            </div>

            {/* Bot Banner */}
            {selectedConv?.isBot && (
              <div style={{
                padding: '8px 20px',
                background: 'rgba(124, 58, 237, 0.08)',
                borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
              }}>
                <span style={{ color: '#7C3AED' }}>🤖 Bot is handling this conversation</span>
                <button onClick={() => toggleBot(selected)} style={{
                  padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600,
                  cursor: 'pointer', border: 'none',
                  background: 'rgba(124,58,237,0.2)', color: '#7C3AED',
                }}>Take Over</button>
              </div>
            )}

            {/* Messages */}
            <div id="msg-scroll" style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {msgsLoading ? (
                <SkeletonLoader variant="text" count={8} height={40} />
              ) : messages.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#6B7280', padding: '40px', fontSize: '13px' }}>No messages yet</div>
              ) : (
                messages.map(msg => (
                  <div key={msg.id} style={{
                    alignSelf: msg.direction === 'OUT' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%',
                  }}>
                    <div style={{
                      padding: '10px 14px',
                      borderRadius: msg.direction === 'OUT' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      background: msg.direction === 'OUT'
                        ? 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(236,72,153,0.2))'
                        : 'rgba(28, 28, 39, 0.8)',
                      border: msg.direction === 'OUT'
                        ? '1px solid rgba(124,58,237,0.2)'
                        : '1px solid rgba(255,255,255,0.06)',
                      fontSize: '14px',
                      color: '#e2e8f0',
                      lineHeight: 1.5,
                    }}>
                      {msg.mediaUrl && <MediaBubble msg={msg} />}
                      {msg.body && <span style={{ whiteSpace: 'pre-wrap' }}>{msg.body}</span>}
                      {!msg.body && !msg.mediaUrl && `[${msg.mediaType || 'media'}]`}
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.25)',
                      marginTop: '3px',
                      textAlign: msg.direction === 'OUT' ? 'right' : 'left',
                      padding: '0 4px',
                    }}>
                      {new Date(msg.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {msg.direction === 'OUT' && (
                        <span style={{ marginLeft: '4px' }}>
                          {msg.status === 'DELIVERED' ? '✓✓' : msg.status === 'READ' ? '✓✓' : '✓'}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Uploading indicator */}
            {uploading && (
              <div style={{
                padding: '8px 20px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                fontSize: '12px', color: '#7C3AED',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{
                  width: '14px', height: '14px', border: '2px solid rgba(124,58,237,0.3)',
                  borderTopColor: '#7C3AED', borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite', display: 'inline-block',
                }} />
                Uploading file...
              </div>
            )}

            {/* Input Area */}
            <div style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-end',
              background: 'rgba(19,19,26,0.5)',
            }}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  color: '#6B7280', fontSize: '18px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 0.15s ease',
                  opacity: uploading ? 0.4 : 1,
                }}
                title="Attach file"
              >📎</button>

              <input
                value={msgInput}
                onChange={e => setMsgInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#F8F8FF',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                onClick={sendMessage}
                disabled={sending || !msgInput.trim()}
                className="btn-gradient"
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  opacity: (!msgInput.trim() || sending) ? 0.4 : 1,
                }}
              >
                {sending ? '...' : 'Send'}
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .conv-list-panel {
            width: 100% !important;
            display: ${selected ? 'none' : 'flex'} !important;
          }
          .msg-panel {
            display: ${selected ? 'flex' : 'none'} !important;
          }
          .mobile-back-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
