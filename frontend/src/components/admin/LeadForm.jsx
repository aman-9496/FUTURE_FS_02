import { useState }  from 'react';
import { addLead }   from '../../services/api';
import s             from './LeadForm.module.css';

const EMPTY = { name: '', email: '', source: 'website', status: 'new', notes: '' };

export default function LeadForm({ onLeadAdded }) {
  const [form,    setForm]    = useState(EMPTY);
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (field, value) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!form.name.trim())          return setError('Full name is required');
    if (!form.email.trim())         return setError('Email address is required');
    if (!form.email.includes('@'))  return setError('Please enter a valid email');

    setLoading(true);
    setError('');
    try {
      await addLead(form);
      setForm(EMPTY);
      setSuccess('Lead added successfully!');
      setTimeout(() => setSuccess(''), 3000);
      onLeadAdded();
    } catch {
      setError('Failed to add lead. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.card}>
      <h2 className={s.title}>➕ Add New Lead</h2>

      {error   && <div className={s.error}>⚠️ {error}</div>}
      {success && <div className={s.success}>✓ {success}</div>}

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label}>Full Name *</label>
          <input className={s.input} placeholder="e.g. Abebe Girma"
            value={form.name} onChange={e => update('name', e.target.value)} />
        </div>
        <div className={s.field}>
          <label className={s.label}>Email Address *</label>
          <input className={s.input} type="email" placeholder="e.g. abebe@gmail.com"
            value={form.email} onChange={e => update('email', e.target.value)} />
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label}>Lead Source</label>
          <select className={s.input} value={form.source} onChange={e => update('source', e.target.value)}>
            <option value="website">🌐 Website</option>
            <option value="referral">👥 Referral</option>
            <option value="social">📱 Social Media</option>
            <option value="other">📋 Other</option>
          </select>
        </div>
        <div className={s.field}>
          <label className={s.label}>Initial Status</label>
          <select className={s.input} value={form.status} onChange={e => update('status', e.target.value)}>
            <option value="new">🆕 New</option>
            <option value="contacted">📞 Contacted</option>
            <option value="converted">✅ Converted</option>
          </select>
        </div>
      </div>

      <div className={s.field}>
        <label className={s.label}>Notes / Follow-up</label>
        <textarea className={s.textarea} placeholder="Any notes about this lead..."
          value={form.notes} onChange={e => update('notes', e.target.value)} />
      </div>

      <button className={loading ? s.btnOff : s.btn} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Adding...' : '+ Add Lead'}
      </button>
    </div>
  );
}
