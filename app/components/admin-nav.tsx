'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MapPin, Map, Building2, Mail, Upload } from 'lucide-react';

const adminNavItems = [
  {
    title: 'States',
    href: '/dashboard/admin/states',
    icon: Map,
  },
  {
    title: 'Districts',
    href: '/dashboard/admin/districts',
    icon: Building2,
  },
  {
    title: 'Postal Codes',
    href: '/dashboard/admin/postal',
    icon: Mail,
  },
  {
    title: 'Bulk Import',
    href: '/dashboard/admin/import',
    icon: Upload,
  },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Location Management
        </h2>
        <div className="space-y-1">
          {adminNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
                pathname === item.href
                  ? 'bg-accent text-accent-foreground'
                  : 'transparent'
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
