import Navbar      from '../../components/public/Navbar';
import Hero        from '../../components/public/Hero';
import FeatureCard from '../../components/public/FeatureCard';
import Footer      from '../../components/public/Footer';
import { Link }    from 'react-router-dom';

const features = [
  { icon: '📊', title: 'Real-time Stats',      desc: 'Live dashboard shows total, new, contacted, and converted leads at a glance.',         accent: '#2563eb' },
  { icon: '🔍', title: 'Smart Search',         desc: 'Instantly filter leads by name or email across any status category.',                    accent: '#7c3aed' },
  { icon: '📋', title: 'Lead Tracking',        desc: 'Move leads through pipeline stages — New → Contacted → Converted — in one click.',      accent: '#0891b2' },
  { icon: '📱', title: 'Mobile Friendly',      desc: 'Fully responsive design that works perfectly on phone, tablet, and desktop.',           accent: '#16a34a' },
  { icon: '🌐', title: 'Public Contact Form',  desc: 'Customers submit their info directly — leads land in your dashboard automatically.',    accent: '#d97706' },
  { icon: '🔒', title: 'Secure Admin Access',  desc: 'JWT-based authentication keeps your lead data private and protected.',                  accent: '#dc2626' },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Features section */}
      <section style={s.section}>
        <div style={s.sectionInner}>
          <p style={s.eyebrow}>Everything you need</p>
          <h2 style={s.sectionTitle}>Powerful Yet Simple</h2>
          <p style={s.sectionSub}>
            Built for small teams and freelancers who need a fast, clean way to manage client leads.
          </p>
          <div style={s.grid}>
            {features.map(f => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={s.cta}>
        <div style={s.ctaInner}>
          <h2 style={s.ctaTitle}>Ready to manage your leads?</h2>
          <p style={s.ctaSub}>Submit your info or explore our services to learn more.</p>
          <div style={s.ctaActions}>
            <Link to="/contact"  style={s.ctaBtn}>Get Started Free →</Link>
            <Link to="/services" style={s.ctaBtnOutline}>View Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const s = {
  section: { background: '#f8fafc', padding: '5rem 2rem' },
  sectionInner: { maxWidth: '960px', margin: '0 auto' },
  eyebrow: { color: '#2563eb', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' },
  sectionTitle: { fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' },
  sectionSub: { color: '#64748b', fontSize: '15px', maxWidth: '480px', lineHeight: 1.6, marginBottom: '40px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  cta: {
    background: 'linear-gradient(135deg,#0f172a,#1e3a5f,#2563eb)',
    padding: '5rem 2rem', textAlign: 'center',
  },
  ctaInner: { maxWidth: '600px', margin: '0 auto' },
  ctaTitle: { fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '12px' },
  ctaSub: { color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginBottom: '32px' },
  ctaActions: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: {
    padding: '13px 30px', background: 'white', color: '#1e3a5f',
    borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '15px',
  },
  ctaBtnOutline: {
    padding: '13px 30px', background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
  },
};
