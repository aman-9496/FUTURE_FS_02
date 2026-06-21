import { useState } from 'react';
import Navbar from '../../components/public/Navbar';
import Footer from '../../components/public/Footer';
import { addLead } from '../../services/api';

const EMPTY = { name: '', email: '', source: 'website', notes: '' };

export default function Contact() {
  const [form,    setForm]    = useState(EMPTY);
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field, value) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim())        return setError('Full name is required');
    if (!form.email.trim())       return setError('Email is required');
    if (!form.email.includes('@')) return setError('Enter a valid email');

    setLoading(true);
    setError('');
    try {
      await addLead(form);
      setSuccess(true);
      setForm(EMPTY);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <section style={s.hero}>
        <div style={s.blob} />
        <div style={s.heroInner}>
          <span style={s.badge}>Contact Us</span>
          <h1 style={s.title}>Let's Work Together</h1>
          <p style={s.sub}>Fill in your details and we'll reach out shortly.</p>
        </div>
      </section>

      <section style={s.section}>
        <div style={s.card}>
          {success ? (
            <div style={s.successBox}>
              <div style={s.successIcon}>✅</div>
              <h2 style={s.successTitle}>Thank you!</h2>
              <p style={s.successText}>We received your info and will contact you soon.</p>
              <button style={s.btn} onClick={() => setSuccess(false)}>
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 style={s.formTitle}>Get In Touch</h2>

              {error && <div style={s.error}>⚠️ {error}</div>}

              <div style={s.field}>
                <label style={s.label}>Full Name *</label>
                <input
                  style={s.input}
                  placeholder="e.g. Abebe Girma"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                />
              </div>

              <div style={s.field}>
                <label style={s.label}>Email Address *</label>
                <input
                  style={s.input}
                  type="email"
                  placeholder="e.g. abebe@gmail.com"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                />
              </div>

              <div style={s.field}>
                <label style={s.label}>How did you hear about us?</label>
                <select
                  style={s.input}
                  value={form.source}
                  onChange={e => update('source', e.target.value)}
                >
                  <option value="website">🌐 Website</option>
                  <option value="referral">👥 Referral</option>
                  <option value="social">📱 Social Media</option>
                  <option value="other">📋 Other</option>
                </select>
              </div>

              <div style={s.field}>
                <label style={s.label}>Message / Notes</label>
                <textarea
                  style={{ ...s.input, height: '90px', resize: 'vertical' }}
                  placeholder="Tell us what you need..."
                  value={form.notes}
                  onChange={e => update('notes', e.target.value)}
                />
              </div>

              <button
                type="submit"
                style={loading ? s.btnDisabled : s.btn}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit →'}
              </button>
            </form>
          )}
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
    background: 'radial-gradient(circle,#2563eb,transparent)',
    top: '-100px', right: '0', pointerEvents: 'none',
  },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' },
  badge: {
    display: 'inline-block', padding: '6px 16px',
    background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.4)',
    borderRadius: '99px', color: '#93c5fd', fontSize: '13px', fontWeight: 600, marginBottom: '20px',
  },
  title: { fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: 'white', marginBottom: '12px' },
  sub:   { color: 'rgba(255,255,255,0.65)', fontSize: '15px' },
  section: { background: '#f8fafc', padding: '4rem 2rem', display: 'flex', justifyContent: 'center' },
  card: {
    background: 'white', borderRadius: '20px', padding: '2.5rem',
    width: '100%', maxWidth: '480px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9',
  },
  formTitle: { fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' },
  error: {
    background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca',
    padding: '10px 14px', borderRadius: '8px', fontSize: '13px',
    marginBottom: '16px', textAlign: 'center',
  },
  field: { marginBottom: '16px' },
  label: { display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' },
  input: {
    width: '100%', padding: '11px 13px', borderRadius: '8px',
    border: '1.5px solid #e5e7eb', fontSize: '14px',
    background: '#f9fafb', boxSizing: 'border-box', fontFamily: 'inherit',
    outline: 'none',
  },
  btn: {
    width: '100%', padding: '13px', marginTop: '4px',
    background: 'linear-gradient(135deg,#1e3a5f,#2563eb)',
    color: 'white', border: 'none', borderRadius: '10px',
    fontSize: '15px', fontWeight: 700, cursor: 'pointer',
  },
  btnDisabled: {
    width: '100%', padding: '13px', marginTop: '4px',
    background: '#94a3b8', color: 'white', border: 'none',
    borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'not-allowed',
  },
  successBox: { textAlign: 'center', padding: '2rem 0' },
  successIcon: { fontSize: '52px', marginBottom: '16px' },
  successTitle: { fontSize: '22px', fontWeight: 700, color: '#166534', marginBottom: '8px' },
  successText: { color: '#64748b', marginBottom: '24px', fontSize: '14px' },
};
