export default function FeatureCard({ icon, title, desc, accent = '#2563eb' }) {
  return (
    <div style={s.card}>
      <div style={{ ...s.iconBox, background: accent + '1a', color: accent }}>
        {icon}
      </div>
      <h3 style={s.title}>{title}</h3>
      <p style={s.desc}>{desc}</p>
    </div>
  );
}

const s = {
  card: {
    background: 'white', borderRadius: '16px',
    padding: '1.75rem', border: '1px solid #f1f5f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'default',
  },
  iconBox: {
    width: '52px', height: '52px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '24px', marginBottom: '16px',
  },
  title: { fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' },
  desc:  { fontSize: '14px', color: '#64748b', lineHeight: 1.6 },
};
