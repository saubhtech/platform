import { getSessionWithRefresh } from '@/lib/auth';
import { redirect } from 'next/navigation';

const TABLES = [
  {
    category: 'Geographic Hierarchy',
    color: '#06b6d4',
    items: [
      { key: 'countries', label: 'Countries', description: 'Country codes, ISD, flags' },
      { key: 'states', label: 'States', description: 'State codes and regions' },
      { key: 'districts', label: 'Districts', description: 'District boundaries' },
      { key: 'postals', label: 'Postals', description: 'PIN codes and post offices' },
      { key: 'places', label: 'Places', description: 'Cities, towns, villages' },
    ],
  },
  {
    category: 'Operational Zones',
    color: '#f59e0b',
    items: [
      { key: 'localities', label: 'Localities', description: 'Local service areas' },
      { key: 'areas', label: 'Areas', description: 'Grouped localities' },
      { key: 'divisions', label: 'Divisions', description: 'Grouped areas' },
      { key: 'regions', label: 'Regions', description: 'Grouped divisions' },
      { key: 'zones', label: 'Zones', description: 'Top-level grouping' },
    ],
  },
  {
    category: 'Market Taxonomy',
    color: '#8b5cf6',
    items: [
      { key: 'sectors', label: 'Sectors', description: 'Industry sectors' },
      { key: 'fields', label: 'Fields', description: 'Fields within sectors' },
      { key: 'markets', label: 'Markets', description: 'Products and services' },
    ],
  },
  {
    category: 'Platform Config',
    color: '#22c55e',
    items: [
      { key: 'language', label: 'Languages', description: 'Locales, RTL, sort order' },
    ],
  },
];

export default async function MasterIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await getSessionWithRefresh();
  if (!session) redirect(`/${locale}/login`);

  return (
    <div>
      <h1 style={pageTitle}>Master Data</h1>
      <p style={pageSubtitle}>Manage platform reference tables</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {TABLES.map((group) => (
          <div key={group.category}>
            <h2 style={{ ...sectionTitle, color: group.color }}>{group.category}</h2>
            <div style={gridStyle}>
              {group.items.map((item) => (
                <a
                  key={item.key}
                  href={`/${locale}/master/${item.key}`}
                  style={cardStyle}
                >
                  <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '15px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
                    {item.description}
                  </div>
                  <div style={arrowStyle}>&rarr;</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────

const pageTitle: React.CSSProperties = {
  fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '28px',
  letterSpacing: '-0.03em', color: '#fff', margin: '0 0 4px',
};

const pageSubtitle: React.CSSProperties = {
  fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '32px',
};

const sectionTitle: React.CSSProperties = {
  fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
  textTransform: 'uppercase', marginBottom: '12px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px',
};

const cardStyle: React.CSSProperties = {
  position: 'relative', padding: '20px',
  background: 'rgba(255,255,255,0.02)', borderRadius: '14px',
  border: '1px solid rgba(255,255,255,0.06)',
  textDecoration: 'none', color: 'inherit',
};

const arrowStyle: React.CSSProperties = {
  position: 'absolute', top: '16px', right: '16px',
  fontSize: '18px', color: 'rgba(255,255,255,0.15)',
};
