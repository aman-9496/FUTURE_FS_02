import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>

        {/* Brand */}
        <div style={s.brand}>
          <span style={s.logo}>CRM</span>
          <span style={s.name}>MiniCRM</span>
        </div>

        {/* Nav links */}
        <div style={s.nav}>
          {[
            { to: '/',         label: 'Home'     },
            { to: '/about',    label: 'About'    },
            { to: '/services', label: 'Services' },
            { to: '/contact',  label: 'Contact'  },
          ].map(l => (
            <Link key={l.to} to={l.to} style={s.link}>{l.label}</Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={s.bottom}>
          <span style={s.copy}>© {new Date().getFullYear()} MiniCRM. All rights reserved.</span>
          {/* Admin login — subtle footer link */}
          <Link to="/admin/login" style={s.adminLink}>Admin Login</Link>
        </div>

      </div>
    </footer>
  );
}

const s = {
  footer: {
    background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '3rem 2rem 1.5rem',
  },
  inner: { maxWidth: '960px', margin: '0 auto' },
  brand: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' },
  logo: {
    width: '36px', height: '36px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    borderRadius: '8px', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center',
    color: 'white', fontWeight: 800, fontSize: '13px',
  },
  name: { color: 'white', fontWeight: 700, fontSize: '18px' },
  nav: { display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' },
  link: { color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '14px' },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    paddingTop: '16px', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px',
  },
  copy: { color: 'rgba(255,255,255,0.35)', fontSize: '13px' },
  adminLink: {
    color: 'rgba(255,255,255,0.25)', fontSize: '12px',
    textDecoration: 'none', letterSpacing: '0.03em',
    transition: 'color 0.2s',
  },
};
