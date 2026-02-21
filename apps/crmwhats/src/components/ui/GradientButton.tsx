'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { padding: '6px 14px', fontSize: '12px' },
  md: { padding: '10px 20px', fontSize: '14px' },
  lg: { padding: '14px 28px', fontSize: '16px' },
};

export default function GradientButton({ children, loading, size = 'md', disabled, style, ...props }: GradientButtonProps) {
  return (
    <button
      className="btn-gradient"
      disabled={disabled || loading}
      style={{ ...sizes[size], ...style }}
      {...props}
    >
      {loading ? (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.6s linear infinite', display: 'inline-block' }} />
          Loading...
        </span>
      ) : children}
    </button>
  );
}
