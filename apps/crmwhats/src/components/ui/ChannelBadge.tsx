'use client';

interface ChannelBadgeProps {
  type: 'EVOLUTION' | 'WABA' | string;
}

export default function ChannelBadge({ type }: ChannelBadgeProps) {
  const isWaba = type === 'WABA';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      borderRadius: '20px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.03em',
      background: isWaba ? 'rgba(16, 185, 129, 0.12)' : 'rgba(124, 58, 237, 0.12)',
      color: isWaba ? '#10B981' : '#7C3AED',
      border: `1px solid ${isWaba ? 'rgba(16, 185, 129, 0.2)' : 'rgba(124, 58, 237, 0.2)'}`,
    }}>
      {isWaba ? '\uD83D\uDCBC' : '\uD83D\uDCF1'} {isWaba ? 'WABA' : 'SIM'}
    </span>
  );
}
