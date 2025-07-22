// src/components/TicketCard.js
'use client';
import { useRouter } from 'next/navigation';

export default function TicketCard({ 
  id, 
  title, 
  status, 
  priority, 
  date, 
  category,
  onClick 
}) {
  const router = useRouter();
  
  const statusBadgeClass = {
    'Ouvert': 'bg-primary',
    'En cours': 'bg-warning',
    'Résolu': 'bg-success'
  };

  const priorityTextClass = {
    'Haute': 'text-danger',
    'Moyenne': 'text-warning',
    'Basse': 'text-muted'
  };

  return (
    <div 
      onClick={onClick || (() => router.push(`/tickets/${id}`))}
      className="list-group-item list-group-item-action"
      style={{
        cursor: 'pointer',
        transition: 'all 0.3s',
        borderLeft: '4px solid #6a0dad'
      }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <div className="mb-2 mb-md-0">
          <h5 className="mb-1">{title}</h5>
          <div className="d-flex gap-2">
            <span className={`badge ${statusBadgeClass[status] || 'bg-secondary'}`}>
              {status}
            </span>
            <span className="badge bg-light text-dark">
              {category}
            </span>
          </div>
        </div>
        <div className="text-md-end">
          <small className={`d-block ${priorityTextClass[priority]}`}>
            {priority} priorité
          </small>
          <small className="text-muted">
            {new Date(date).toLocaleDateString('fr-FR')}
          </small>
        </div>
      </div>
    </div>
  );
}