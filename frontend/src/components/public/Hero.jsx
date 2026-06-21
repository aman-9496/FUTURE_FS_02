import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={s.section}>
      {/* Animated blobs */}
      <div style={s.blob1} />
      <div style={s.blob2} />

      <div style={s.inner}>
        <span style={s.badge}>✨ Modern Lead Management</span>
        <h1 style={s.heading}>
          Turn Every Lead Into<br />
          <span style={s.headingAccent}>a Loyal Client</span>
        </h1>
        <p style={s.sub}>
          Mini CRM helps you capture, track, and convert leads
          with a beautifully simple interface — no complexity, just results.
        </p>
        <div style={s.actions}>
          <Link to="/contact" style={s.btnPrimary}>Start Free → </Link>
          <Link to="/services" style={s.btnSecondary}>See Features</Link>
        </div>

        {/* Social proof strip */}
        <div style={s.proof}>
          {['⚡ Instant Setup', '🔒 Secure', '📊 Real-time Stats', '📱 Mobile Ready'].map(t => (
            <span key={t} style={s.proofItem}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    position: 'relative', overflow: 'hidden',
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%)',
    paddingTop: '64px',
  },
  blob1: {
    position: 'absolute', width: '600px', height: '600px',
    borderRadius: '50%', filter: 'blur(120px)', opacity: 0.25,
    background: 'radial-gradient(circle,#2563eb,transparent)',
    top: '-100px', right: '-100px', pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute', width: '400px', height: '400px',
    borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2,
    background: 'radial-gradient(circle,#7c3aed,transparent)',
    bottom: '0', left: '-100px', pointerEvents: 'none',
  },
  inner: {
    position: 'relative', zIndex: 1,
    maxWidth: '760px', margin: '0 auto', padding: '4rem 2rem',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block', padding: '6px 16px',
    background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.4)',
    borderRadius: '99px', color: '#93c5fd', fontSize: '13px',
    fontWeight: 600, marginBottom: '24px', letterSpacing: '0.02em',
  },
  heading: {
    fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 800,
    color: 'white', lineHeight: 1.15, marginBottom: '20px',
  },
  headingAccent: {
    background: 'linear-gradient(90deg,#60a5fa,#818cf8)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  sub: {
    fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
    maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7,
  },
  actions: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    padding: '14px 34px', background: 'linear-gradient(135deg,#1e40af,#2563eb)',
    color: 'white', borderRadius: '10px', textDecoration: 'none',
    fontWeight: 700, fontSize: '15px',
    boxShadow: '0 4px 20px rgba(37,99,235,0.5)',
  },
  btnSecondary: {
    padding: '14px 34px', background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white', borderRadius: '10px', textDecoration: 'none',
    fontWeight: 600, fontSize: '15px',
  },
  proof: {
    display: 'flex', flexWrap: 'wrap', gap: '10px',
    justifyContent: 'center', marginTop: '48px',
  },
  proofItem: {
    padding: '8px 16px', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '99px', color: 'rgba(255,255,255,0.7)',
    fontSize: '13px', fontWeight: 500,
  },
};
