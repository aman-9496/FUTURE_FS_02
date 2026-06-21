import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: '📊', label: 'Dashboard', path: '/admin/dashboard' },
];

export default function Sidebar({ collapsed, onToggle }) {
  const navigate  = useNavigate();
  const location  = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <aside style={{ ...s.aside, width: collapsed ? '64px' : '220px' }}>

      {/* Brand */}
      <div style={s.brand}>
        <div style={s.logo}>CRM</div>
        {!collapsed && <span style={s.brandName}>MiniCRM</span>}
      </div>

      {/* Toggle */}
      <button style={s.toggle} onClick={onToggle}>
        {collapsed ? '→' : '←'}
      </button>

      {/* Nav */}
      <nav style={s.nav}>
        {navItems.map(item => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              style={{ ...s.navItem, ...(active ? s.navItemActive : {}) }}
              onClick={() => navigate(item.path)}
              title={collapsed ? item.label : ''}
            >
              <span style={s.navIcon}>{item.icon}</span>
              {!collapsed && <span style={s.navLabel}>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <button style={s.logout} onClick={handleLogout} title={collapsed ? 'Logout' : ''}>
        <span style={s.navIcon}>🚪</span>
        {!collapsed && <span style={s.navLabel}>Sign Out</span>}
      </button>

    </aside>
  );
}

const s = {
  aside: {
    background:     '#0f172a',
    borderRight:    '1px solid rgba(255,255,255,0.07)',
    display:        'flex', flexDirection: 'column',
    height:         '100vh', position: 'fixed', top: 0, left: 0, zIndex: 50,
    transition:     'width 0.25s ease',
    overflow:       'hidden',
  },
  brand: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '20px 16px 8px',
  },
  logo: {
    minWidth: '32px', height: '32px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    borderRadius: '8px', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    color: 'white', fontWeight: 800, fontSize: '12px', flexShrink: 0,
  },
  brandName: { color: 'white', fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap' },
  toggle: {
    background: 'rgba(255,255,255,0.06)', border: 'none',
    color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
    margin: '8px 16px', padding: '6px', borderRadius: '6px',
    fontSize: '14px', alignSelf: 'flex-start',
  },
  nav: { flex: 1, padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' },
  navItem: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '10px 12px', borderRadius: '8px',
    background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
    cursor: 'pointer', width: '100%', textAlign: 'left', fontSize: '14px',
    fontWeight: 500, transition: 'background 0.15s, color 0.15s',
  },
  navItemActive: {
    background: 'rgba(37,99,235,0.2)', color: '#93c5fd',
  },
  navIcon:  { fontSize: '16px', flexShrink: 0 },
  navLabel: { whiteSpace: 'nowrap' },
  logout: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '10px 20px', margin: '8px',
    background: 'none', border: 'none',
    color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
    fontSize: '14px', borderRadius: '8px',
    transition: 'color 0.15s',
  },
};
