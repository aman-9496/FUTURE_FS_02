import Navbar      from '../../components/public/Navbar';
import Footer      from '../../components/public/Footer';
import FeatureCard from '../../components/public/FeatureCard';
import { Link }    from 'react-router-dom';

const services = [
  { icon: '📥', title: 'Lead Capture',       desc: 'Public contact form lets customers submit their details directly into your dashboard.', accent: '#2563eb' },
  { icon: '📊', title: 'Lead Analytics',     desc: 'Visual stats show your pipeline health — total leads, new, contacted, converted.',      accent: '#7c3aed' },
  { icon: '🔄', title: 'Status Management',  desc: 'Drag-and-drop style status updates move leads from new to converted in seconds.',       accent: '#0891b2' },
  { icon: '🔍', title: 'Instant Search',     desc: 'Filter leads in real-time by name or email across all status categories.',              accent: '#16a34a' },
  { icon: '📝', title: 'Notes & Follow-ups', desc: 'Attach notes to any lead so you never forget what was discussed or promised.',          accent: '#d97706' },
  { icon: '🔐', title: 'Secure Dashboard',   desc: 'JWT authentication ensures only authorized admins can access lead data.',              accent: '#dc2626' },
];

const plans = [
  { name: 'Free',    price: '$0',  features: ['Up to 50 leads', 'Basic stats', 'Email support'],                              cta: 'Get Started', highlight: false },
  { name: 'Pro',     price: '$12', features: ['Unlimited leads', 'Advanced stats', 'Priority support', 'Export to CSV'],      cta: 'Start Pro',   highlight: true  },
  { name: 'Team',    price: '$29', features: ['Everything in Pro', 'Multi-user', 'Custom fields', 'API access'],              cta: 'Go Team',     highlight: false },
];

export default function Services() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.blob} />
        <div style={s.heroInner}>
          <span style={s.badge}>What We Offer</span>
          <h1 style={s.title}>Services Built for<br />Modern Lead Management</h1>
          <p style={s.sub}>Everything you need — nothing you don't.</p>
        </div>
      </section>

      {/* Services grid */}
      <section style={s.section}>
        <div style={s.inner}>
          <h2 style={s.h2}>Core Features</h2>
          <div style={s.grid}>
            {services.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ ...s.section, background: 'white' }}>
        <div style={s.inner}>
          <h2 style={s.h2}>Simple Pricing</h2>
          <p style={s.sectionSub}>No hidden fees. No surprise charges.</p>
          <div style={s.plansGrid}>
            {plans.map(p => (
              <div key={p.name} style={{ ...s.planCard, ...(p.highlight ? s.planHighlight : {}) }}>
                {p.highlight && <div style={s.popularBadge}>Most Popular</div>}
                <div style={{ ...s.planName, ...(p.highlight ? { color: 'white' } : {}) }}>{p.name}</div>
                <div style={{ ...s.planPrice, ...(p.highlight ? { color: 'white' } : {}) }}>
                  {p.price}<span style={s.planPer}>/mo</span>
                </div>
                <ul style={s.planList}>
                  {p.features.map(f => (
                    <li key={f} style={{ ...s.planItem, ...(p.highlight ? { color: 'rgba(255,255,255,0.85)' } : {}) }}>
                      ✓ {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  style={{ ...s.planBtn, ...(p.highlight ? s.planBtnWhite : {}) }}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const s = {
  hero: {
    position: 'relative', overflow: 'hidden',
    background: 'linear-gradient(135deg,#0f172a,#1e3a5f)',
    padding: '8rem 2rem 5rem', textAlign: 'center',
  },
  blob: {
    position: 'absolute', width: '500px', height: '500px',
    borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2,
    background: 'radial-gradient(circle,#7c3aed,transparent)',
    top: '-100px', left: '0', pointerEvents: 'none',
  },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' },
  badge: {
    display: 'inline-block', padding: '6px 16px',
    background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.4)',
    borderRadius: '99px', color: '#93c5fd', fontSize: '13px', fontWeight: 600, marginBottom: '20px',
  },
  title: { fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'white', marginBottom: '16px', lineHeight: 1.2 },
  sub:   { color: 'rgba(255,255,255,0.65)', fontSize: '15px' },
  section: { background: '#f8fafc', padding: '5rem 2rem' },
  inner: { maxWidth: '960px', margin: '0 auto' },
  h2: { fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' },
  sectionSub: { color: '#64748b', fontSize: '15px', marginBottom: '36px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px', marginTop: '32px' },
  plansGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
    gap: '24px', marginTop: '32px',
  },
  planCard: {
    background: '#f8fafc', borderRadius: '16px', padding: '2rem',
    border: '1px solid #e2e8f0', position: 'relative',
    transition: 'transform 0.2s',
  },
  planHighlight: {
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    border: 'none', transform: 'scale(1.04)',
    boxShadow: '0 16px 48px rgba(37,99,235,0.4)',
  },
  popularBadge: {
    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
    background: '#f59e0b', color: 'white', padding: '4px 14px',
    borderRadius: '99px', fontSize: '11px', fontWeight: 700,
  },
  planName: { fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' },
  planPrice: { fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' },
  planPer: { fontSize: '14px', fontWeight: 500, opacity: 0.6 },
  planList: { listStyle: 'none', marginBottom: '28px' },
  planItem: { color: '#64748b', fontSize: '14px', padding: '6px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' },
  planBtn: {
    display: 'block', textAlign: 'center', padding: '12px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)', color: 'white',
    borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '14px',
  },
  planBtnWhite: {
    background: 'white', color: '#1e3a5f',
  },
};
