'use client';

interface SkeletonProps {
  variant?: 'text' | 'avatar' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
}

export default function SkeletonLoader({ variant = 'text', width, height, count = 1 }: SkeletonProps) {
  const items = Array.from({ length: count });

  if (variant === 'avatar') {
    return (
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
        {items.map((_, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className="skeleton" style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="skeleton" style={{ width: '60%', height: 14 }} />
              <div className="skeleton" style={{ width: '40%', height: 10 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((_, i) => (
          <div key={i} className="glass" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="skeleton" style={{ width: '70%', height: 16 }} />
            <div className="skeleton" style={{ width: '100%', height: 12 }} />
            <div className="skeleton" style={{ width: '50%', height: 12 }} />
          </div>
        ))}
      </div>
    );
  }

  // text
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((_, i) => (
        <div key={i} className="skeleton" style={{ width: width || '100%', height: height || 14 }} />
      ))}
    </div>
  );
}
