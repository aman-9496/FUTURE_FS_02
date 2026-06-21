import s from './Stats.module.css';

const cards = (leads) => [
  { label: 'Total Leads', value: leads.length,                                          icon: '👥', color: '#2563eb', bg: '#dbeafe' },
  { label: 'New',         value: leads.filter(l => l.status === 'new').length,          icon: '🆕', color: '#0891b2', bg: '#cffafe' },
  { label: 'Contacted',   value: leads.filter(l => l.status === 'contacted').length,    icon: '📞', color: '#d97706', bg: '#fef3c7' },
  { label: 'Converted',   value: leads.filter(l => l.status === 'converted').length,    icon: '✅', color: '#16a34a', bg: '#dcfce7' },
];

export default function Stats({ leads }) {
  return (
    <div className={s.grid}>
      {cards(leads).map(card => (
        <div key={card.label} className={s.card}>
          <div className={s.iconBox} style={{ background: card.bg, color: card.color }}>
            {card.icon}
          </div>
          <div className={s.number} style={{ color: card.color }}>{card.value}</div>
          <div className={s.label}>{card.label}</div>
        </div>
      ))}
    </div>
  );
}
