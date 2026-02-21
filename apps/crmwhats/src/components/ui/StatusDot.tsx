'use client';

interface StatusDotProps {
  status: 'OPEN' | 'ASSIGNED' | 'RESOLVED' | string;
  isBot?: boolean;
  size?: number;
}

const statusColors: Record<string, string> = {
  OPEN: '#10B981',
  ASSIGNED: '#3B82F6',
  RESOLVED: '#6B7280',
};

export default function StatusDot({ status, isBot, size = 8 }: StatusDotProps) {
  const color = isBot ? '#7C3AED' : (statusColors[status] || '#6B7280');
  const shouldPulse = status === 'OPEN' || isBot;

  return (
    <span
      className={shouldPulse ? 'pulse-dot' : ''}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 ${size}px ${color}40`,
        flexShrink: 0,
      }}
    />
  );
}
