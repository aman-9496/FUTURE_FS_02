import Navbar from '../../components/public/Navbar';
import Footer from '../../components/public/Footer';

const team = [
  { name: 'Alex Morgan',   role: 'Founder & Developer', avatar: 'AM' },
  { name: 'Sara Chen',     role: 'UX Designer',          avatar: 'SC' },
  { name: 'James Okafor',  role: 'Backend Engineer',     avatar: 'JO' },
];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroBlob} />
        <div style={s.heroInner}>
          <span style={s.badge}>About Us</span>
          <h1 style={s.title}>Built for Simplicity,<br />Designed for Results</h1>
          <p style={s.sub}>
            A modern, lightweight CRM solution built with React and Node.js.
            Streamline your lead management and client relationships with our clean,
            responsive interface designed for today's fast-moving businesses.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.missionGrid}>
            <div>
              <h2 style={s.h2}>Our Mission</h2>
              <p style={s.body}>
                MiniCRM simplifies customer relationship management for small businesses and freelancers.
                Built with modern web technologies, it offers an intuitive interface to track leads,
                manage contacts, and grow your business — without the complexity of enterprise solutions.
                Fast, secure, and designed to scale with your needs.
              </p>
            </div>
            <div style={s.statsRow}>
              {[
                { n: '500+', l: 'Leads Managed'   },
                { n: '99%',  l: 'Uptime'           },
                { n: '3s',   l: 'Avg. Load Time'   },
              ].map(({ n, l }) => (
                <div key={l} style={s.statBox}>
                  <div style={s.statNum}>{n}</div>
                  <div style={s.statLabel}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <h2 style={{ ...s.h2, marginTop: '4rem' }}>Meet the Team</h2>
          <div style={s.teamGrid}>
            {team.map(m => (
              <div key={m.name} style={s.teamCard}>
                <div style={s.avatar}>{m.avatar}</div>
                <div style={s.memberName}>{m.name}</div>
                <div style={s.memberRole}>{m.role}</div>
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
  heroBlob: {
    position: 'absolute', width: '500px', height: '500px',
    borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2,
    background: 'radial-gradient(circle,#2563eb,transparent)',
    top: '-100px', right: '0', pointerEvents: 'none',
  },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' },
  badge: {
    display: 'inline-block', padding: '6px 16px',
    background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.4)',
    borderRadius: '99px', color: '#93c5fd', fontSize: '13px', fontWeight: 600, marginBottom: '20px',
  },
  title: { fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'white', marginBottom: '16px', lineHeight: 1.2 },
  sub:   { color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.7 },
  section: { background: '#f8fafc', padding: '5rem 2rem' },
  inner: { maxWidth: '900px', margin: '0 auto' },
  missionGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '3rem', alignItems: 'center',
  },
  h2: { fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' },
  body: { color: '#64748b', fontSize: '15px', lineHeight: 1.8 },
  statsRow: { display: 'flex', flexDirection: 'column', gap: '16px' },
  statBox: {
    background: 'white', borderRadius: '12px', padding: '1.25rem 1.5rem',
    border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  statNum:   { fontSize: '2rem', fontWeight: 800, color: '#2563eb' },
  statLabel: { fontSize: '13px', color: '#64748b', marginTop: '2px' },
  teamGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
    gap: '20px', marginTop: '24px',
  },
  teamCard: {
    background: 'white', borderRadius: '16px', padding: '2rem',
    textAlign: 'center', border: '1px solid #f1f5f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  avatar: {
    width: '64px', height: '64px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    borderRadius: '50%', display: 'flex', alignItems: 'center',
    justifyContent: 'center', color: 'white', fontWeight: 800,
    fontSize: '18px', margin: '0 auto 14px',
  },
  memberName: { fontWeight: 700, color: '#0f172a', fontSize: '15px' },
  memberRole: { color: '#64748b', fontSize: '13px', marginTop: '4px' },
};
