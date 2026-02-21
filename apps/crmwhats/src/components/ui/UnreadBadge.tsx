'use client';

interface UnreadBadgeProps {
  count: number;
}

export default function UnreadBadge({ count }: UnreadBadgeProps) {
  if (count <= 0) return null;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '18px',
      height: '18px',
      padding: '0 5px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
      color: '#fff',
      fontSize: '10px',
      fontWeight: 700,
      lineHeight: 1,
    }}>
      {count > 99 ? '99+' : count}
    </span>
  );
}
