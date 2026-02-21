'use client';

import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  hover?: boolean;
  onClick?: () => void;
  active?: boolean;
  style?: CSSProperties;
  className?: string;
}

export default function GlassCard({ children, hover = false, onClick, active, style, className }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass ${hover ? 'glass-hover' : ''} ${className || ''}`}
      style={{
        padding: '16px',
        cursor: onClick ? 'pointer' : 'default',
        borderColor: active ? 'rgba(124, 58, 237, 0.3)' : undefined,
        background: active ? 'rgba(124, 58, 237, 0.08)' : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
