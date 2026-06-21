import { useState, useEffect } from 'react';
import { useNavigate }         from 'react-router-dom';
import { getLeads }            from '../../services/api';
import Sidebar                 from '../../components/admin/Sidebar';
import Stats                   from '../../components/admin/Stats';
import LeadForm                from '../../components/admin/LeadForm';
import LeadCard                from '../../components/admin/LeadCard';
import s                       from './Dashboard.module.css';

const TABS = [
  { key: 'all',       label: 'All Leads'   },
  { key: 'new',       label: '🆕 New'       },
  { key: 'contacted', label: '📞 Contacted' },
  { key: 'converted', label: '✅ Converted' },
];

export default function Dashboard() {
  const [leads,     setLeads]     = useState([]);
  const [filter,    setFilter]    = useState('all');
  const [search,    setSearch]    = useState('');
  const [loading,   setLoading]   = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { fetchLeads(); }, []);

  const fetchLeads = async () => {
    try {
      const res = await getLeads();
      setLeads(res.data);
      setLoading(false);
    } catch {
      localStorage.removeItem('token');
      navigate('/admin/login');
    }
  };

  const countFor = (key) =>
    key === 'all' ? leads.length : leads.filter(l => l.status === key).length;

  const visibleLeads = leads
    .filter(l => filter === 'all' || l.status === filter)
    .filter(l =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase())
    );

  const sidebarW = collapsed ? 64 : 220;

  return (
    <div className={s.layout}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

      <main className={s.main} style={{ marginLeft: sidebarW }}>

        {/* Top bar */}
        <div className={s.topbar}>
          <div>
            <h1 className={s.pageTitle}>Dashboard</h1>
            <p className={s.pageSub}>Lead Management Overview</p>
          </div>
        </div>

        <div className={s.content}>
          <Stats leads={leads} />
          <LeadForm onLeadAdded={fetchLeads} />

          {/* Search */}
          <input
            className={s.searchInput}
            placeholder="🔍 Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {/* Filter tabs */}
          <div className={s.tabsRow}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                className={filter === tab.key ? s.tabActive : s.tab}
                onClick={() => setFilter(tab.key)}
              >
                {tab.label}
                <span className={filter === tab.key ? s.countActive : s.count}>
                  {countFor(tab.key)}
                </span>
              </button>
            ))}
          </div>

          {/* Leads list */}
          <div className={s.listSection}>
            <div className={s.listHeader}>
              <h2 className={s.listTitle}>
                {filter === 'all' ? 'All Leads'
                  : filter.charAt(0).toUpperCase() + filter.slice(1) + ' Leads'}
              </h2>
              <span className={s.listCount}>
                {visibleLeads.length} lead{visibleLeads.length !== 1 ? 's' : ''}
              </span>
            </div>

            {loading && <p className={s.emptyText}>Loading leads...</p>}

            {!loading && visibleLeads.length === 0 && (
              <p className={s.emptyText}>
                {search ? 'No leads match your search.' : 'No leads yet. Add one above!'}
              </p>
            )}

            {!loading && visibleLeads.map(lead => (
              <LeadCard key={lead._id} lead={lead} onUpdate={fetchLeads} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
