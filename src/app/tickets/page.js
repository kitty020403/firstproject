// src/app/tickets/page.js
'use client';
import TicketCard from "../components/TicketCard";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TicketsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  
  const tickets = [
    { 
      id: 1, 
      title: "Connexion impossible au VPN", 
      status: "Ouvert",
      priority: "Haute",
      date: "2023-06-15",
      category: "Réseau"
    },
    { 
      id: 2, 
      title: "Erreur d'affichage sur le tableau de bord", 
      status: "En cours",
      priority: "Moyenne",
      date: "2023-06-14",
      category: "Interface"
    }
  ];

  const filteredTickets = filter === 'all' 
    ? tickets 
    : tickets.filter(ticket => ticket.status.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="container-fluid bg-purple min-vh-100" style={{ backgroundColor: '#6a0dad', padding: '2rem 0' }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">
                <i className="fas fa-ticket-alt me-2"></i>
                Mes Tickets d'Assistance
              </h2>
            </div>
            
            <div className="card-body">
              {/* Filtres et bouton */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
                <div className="d-flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-light'}`}
                  >
                    Tous
                  </button>
                  <button
                    onClick={() => setFilter('ouvert')}
                    className={`btn btn-sm ${filter === 'ouvert' ? 'btn-primary' : 'btn-outline-light'}`}
                  >
                    Ouverts
                  </button>
                  <button
                    onClick={() => setFilter('en cours')}
                    className={`btn btn-sm ${filter === 'en cours' ? 'btn-primary' : 'btn-outline-light'}`}
                  >
                    En cours
                  </button>
                </div>
                <button 
                  onClick={() => router.push('/tickets/new')}
                  className="btn btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none'
                  }}
                >
                  <i className="fas fa-plus me-2"></i>
                  Nouveau Ticket
                </button>
              </div>

              {/* Liste des tickets */}
              <div className="list-group">
                {filteredTickets.length > 0 ? (
                  filteredTickets.map(ticket => (
                    <TicketCard 
                      key={ticket.id}
                      id={ticket.id}
                      title={ticket.title}
                      status={ticket.status}
                      priority={ticket.priority}
                      date={ticket.date}
                      category={ticket.category}
                      onClick={() => router.push(`/tickets/${ticket.id}`)}
                    />
                  ))
                ) : (
                  <div className="alert alert-info text-center">
                    Aucun ticket trouvé
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}