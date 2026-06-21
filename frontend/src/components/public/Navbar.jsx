import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/',         label: 'Home'     },
    { to: '/about',    label: 'About'    },
    { to: '/services', label: 'Services' },
    { to: '/contact',  label: 'Contact'  },
  ];

  return (
    <nav style={{ ...nav.bar, ...(scrolled ? nav.barScrolled : {}) }}>
      <Link to="/" style={nav.brand}>
        <span style={nav.logo}>CRM</span>
        <span style={nav.brandName}>MiniCRM</span>
      </Link>

      {/* Desktop links */}
      <div style={nav.links}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            style={{
              ...nav.link,
              ...(location.pathname === l.to ? nav.linkActive : {}),
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/contact" style={nav.cta}>Get Started</Link>
      </div>

      {/* Hamburger */}
      <button style={nav.burger} onClick={() => setMenuOpen(o => !o)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={nav.drawer}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={nav.drawerLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" style={nav.drawerCta} onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

const nav = {
  bar: {
    position:        'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display:         'flex', alignItems: 'center', justifyContent: 'space-between',
    padding:         '0 2rem', height: '64px',
    background:      'rgba(15,23,42,0.7)',
    backdropFilter:  'blur(14px)',
    borderBottom:    '1px solid rgba(255,255,255,0.08)',
    transition:      'background 0.3s, box-shadow 0.3s',
  },
  barScrolled: {
    background:  'rgba(15,23,42,0.97)',
    boxShadow:   '0 4px 24px rgba(0,0,0,0.4)',
  },
  brand: {
    display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none',
  },
  logo: {
    width: '36px', height: '36px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    borderRadius: '8px', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center',
    color: 'white', fontWeight: 800, fontSize: '13px',
  },
  brandName: { color: 'white', fontWeight: 700, fontSize: '18px' },
  links: { display: 'flex', alignItems: 'center', gap: '8px' },
  link: {
    color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
    padding: '6px 14px', borderRadius: '6px', fontSize: '14px',
    fontWeight: 500, transition: 'color 0.2s, background 0.2s',
  },
  linkActive: {
    color: 'white', background: 'rgba(255,255,255,0.1)',
  },
  cta: {
    marginLeft: '8px', padding: '8px 20px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    color: 'white', borderRadius: '8px', textDecoration: 'none',
    fontSize: '14px', fontWeight: 600,
    boxShadow: '0 2px 12px rgba(37,99,235,0.4)',
    transition: 'opacity 0.2s',
  },
  burger: {
    display: 'none', background: 'none', border: 'none',
    color: 'white', fontSize: '22px', cursor: 'pointer',
    '@media(max-width:768px)': { display: 'block' },
  },
  drawer: {
    position: 'absolute', top: '64px', left: 0, right: 0,
    background: 'rgba(15,23,42,0.98)', backdropFilter: 'blur(14px)',
    display: 'flex', flexDirection: 'column', padding: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    gap: '4px',
  },
  drawerLink: {
    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
    padding: '12px 16px', borderRadius: '8px', fontSize: '15px',
    fontWeight: 500,
  },
  drawerCta: {
    marginTop: '8px', padding: '12px 16px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    color: 'white', borderRadius: '8px', textDecoration: 'none',
    fontSize: '15px', fontWeight: 600, textAlign: 'center',
  },
};
