import { updateLead, deleteLead } from '../../services/api';
import s from './LeadCard.module.css';

const statusColors = {
  new:       { bg: '#dbeafe', color: '#1e40af' },
  contacted: { bg: '#fef9c3', color: '#854d0e' },
  converted: { bg: '#dcfce7', color: '#166534' },
};

const sourceIcons = { website: '🌐', referral: '👥', social: '📱', other: '📋' };

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export default function LeadCard({ lead, onUpdate }) {

  const handleStatus = async (newStatus) => {
    try {
      await updateLead(lead._id, { status: newStatus });
      onUpdate();
    } catch {
      alert('Failed to update status');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete lead for ${lead.name}?`)) return;
    try {
      await deleteLead(lead._id);
      onUpdate();
    } catch {
      alert('Failed to delete lead');
    }
  };

  return (
    <div className={s.card}>
      <div className={s.top}>
        <div className={s.avatar}>{lead.name.charAt(0).toUpperCase()}</div>
        <div className={s.details}>
          <div className={s.name}>{lead.name}</div>
          <div className={s.email}>✉️ {lead.email}</div>
          <div className={s.meta}>
            {sourceIcons[lead.source]} {lead.source}
            &nbsp;·&nbsp;
            📅 {formatDate(lead.createdAt)}
          </div>
        </div>
        <span className={s.badge} style={statusColors[lead.status]}>
          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
        </span>
      </div>

      {lead.notes && <div className={s.notes}>📝 {lead.notes}</div>}

      <div className={s.actions}>
        <div className={s.statusWrap}>
          <span className={s.statusLabel}>Update Status:</span>
          <select className={s.select} value={lead.status} onChange={e => handleStatus(e.target.value)}>
            <option value="new">🆕 New</option>
            <option value="contacted">📞 Contacted</option>
            <option value="converted">✅ Converted</option>
          </select>
        </div>
        <button className={s.deleteBtn} onClick={handleDelete}>🗑 Delete</button>
      </div>
    </div>
  );
}
