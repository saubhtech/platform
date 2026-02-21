'use client';

interface AvatarProps {
  name: string | null;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 32, md: 40, lg: 56 };
const fontMap = { sm: '12px', md: '14px', lg: '20px' };

const gradients = [
  'linear-gradient(135deg, #7C3AED, #EC4899)',
  'linear-gradient(135deg, #EC4899, #F97316)',
  'linear-gradient(135deg, #F97316, #F59E0B)',
  'linear-gradient(135deg, #10B981, #3B82F6)',
  'linear-gradient(135deg, #3B82F6, #7C3AED)',
  'linear-gradient(135deg, #EF4444, #EC4899)',
];

function hashName(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export default function Avatar({ name, size = 'md' }: AvatarProps) {
  const displayName = name || '?';
  const initials = displayName
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  const gradient = gradients[hashName(displayName) % gradients.length];
  const px = sizeMap[size];

  return (
    <div style={{
      width: px,
      height: px,
      borderRadius: '50%',
      background: gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fontMap[size],
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0,
      letterSpacing: '0.02em',
    }}>
      {initials}
    </div>
  );
}
