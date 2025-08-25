'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminTicketsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Données des tickets avec noms tunisiens
  const tickets = [
    {
      id: "TK-001",
      sujet: "Problème de connexion",
      categorie: "Technique",
      priorite: "Haute",
      statut: "Ouvert",
      client: "Mohamed Trabelsi",
      dateCreation: "15/10/2023",
      derniereActivite: "Il y a 2 heures",
      assigneA: "Vous"
    },
    {
      id: "TK-002",
      sujet: "Facture incorrecte",
      categorie: "Facturation",
      priorite: "Moyenne",
      statut: "En cours",
      client: "Leila Boukadida",
      dateCreation: "14/10/2023",
      derniereActivite: "Il y a 1 jour",
      assigneA: "Non assigné"
    },
    {
      id: "TK-003",
      sujet: "Demande de fonctionnalité",
      categorie: "Support",
      priorite: "Basse",
      statut: "En attente",
      client: "Youssef Gharbi",
      dateCreation: "12/10/2023",
      derniereActivite: "Il y a 3 jours",
      assigneA: "Non assigné"
    },
    {
      id: "TK-004",
      sujet: "Problème de serveur",
      categorie: "Technique",
      priorite: "Critique",
      statut: "Résolu",
      client: "Amira Chaabane",
      dateCreation: "10/10/2023",
      derniereActivite: "Il y a 1 semaine",
      assigneA: "Vous"
    },
    {
      id: "TK-005",
      sujet: "Mise à jour du profil",
      categorie: "Compte",
      priorite: "Moyenne",
      statut: "En cours",
      client: "Karim Zoghlami",
      dateCreation: "09/10/2023",
      derniereActivite: "Il y a 2 jours",
      assigneA: "Vous"
    }
  ];

  // Filtrer les tickets
  const filteredTickets = tickets.filter(ticket => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'assigned' && ticket.assigneA === 'Vous') || 
                         (filter === 'unassigned' && ticket.assigneA === 'Non assigné') ||
                         ticket.statut.toLowerCase().includes(filter.toLowerCase());
    
    const matchesSearch = ticket.sujet.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         ticket.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Styles cohérents avec le thème admin
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critique': return 'bg-danger';
      case 'Haute': return 'bg-warning';
      case 'Moyenne': return 'bg-primary';
      default: return 'bg-secondary';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Ouvert': return 'bg-warning';
      case 'En cours': return 'bg-info';
      case 'Résolu': return 'bg-success';
      default: return 'bg-light text-dark';
    }
  };

  return (
    <div className="d-flex min-vh-100" style={{
      background: 'linear-gradient(135deg, rgba(187, 197, 241, 1) 0%, rgba(166, 143, 188, 1) 100%)',
      backdropFilter: 'blur(2px)'
    }}>
      {/* Barre latérale identique */}
      {/* Barre latérale identique */}
      <aside style={{
        width: "260px",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(118, 75, 162, 0.1)",
        boxShadow: "2px 0 15px rgba(0, 0, 0, 0.05)"
      }}>
        <div className="p-4 border-bottom d-flex align-items-center">
          <i className="bi bi-layers fs-3 text-primary me-2"></i>
          <span className="fw-bold fs-4 " style={{ color: 'rgba(87, 50, 112, 1)' }} >Admin</span>
        </div>
        <nav>
          <div className="mt-3">
            <div className="text-muted text-uppercase px-4 mb-2 small">Tableau de bord</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad', backgroundColor: 'transparent' }}
                  onClick={() => router.push('/admin')}>
                  <i className="bi bi-house me-2"></i>Accueil
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <div className="text-muted text-uppercase px-4 mb-2 small">Gestion</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad', backgroundColor: 'transparent' }}
                  onClick={() => router.push('/Users')}>
                  <i className="bi bi-people me-2"></i>Utilisateurs
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad', backgroundColor: 'rgba(106, 13, 173, 0.1)' }}
                  onClick={() => router.push('/admin/tickets')}>
                  <i className="bi bi-ticket me-2"></i>Tickets
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Contenu principal */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Barre supérieure avec recherche */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
          <div className="input-group rounded" style={{ 
            maxWidth: "500px",
            boxShadow: "0 2px 8px rgba(118, 75, 162, 0.5)"
          }}>
            <span className="input-group-text border-0 bg-light">
              <i className="bi bi-search text-purple"></i>
            </span>
            <input 
              type="text" 
              className="form-control border-0 bg-light" 
              placeholder="Rechercher tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-purple"
              onClick={() => router.push('/admin/tickets/nouveau')}
              style={{
                background: 'linear-gradient(135deg, #4d3161ff 0%, #745b8bff 100%)',
                color: 'white'
              }}
            >
              <i className="bi bi-plus-circle me-2"></i> Nouveau Ticket
            </button>
          </div>
        </header>

        {/* Tableau de bord des tickets */}
        <main className="p-4 flex-grow-1">
          {/* Filtres rapides */}
          <div className="d-flex mb-4 gap-2 flex-wrap">
            <button 
              className={`btn btn-sm ${filter === 'all' ? 'btn-purple' : 'btn-outline-purple'}`}
              onClick={() => setFilter('all')}
            >
              Tous les tickets
            </button>
            <button 
              className={`btn btn-sm ${filter === 'assigned' ? 'btn-purple' : 'btn-outline-purple'}`}
              onClick={() => setFilter('assigned')}
            >
              Assignés à moi
            </button>
            <button 
              className={`btn btn-sm ${filter === 'unassigned' ? 'btn-purple' : 'btn-outline-purple'}`}
              onClick={() => setFilter('unassigned')}
            >
              Non assignés
            </button>
            <button 
              className={`btn btn-sm ${filter === 'ouvert' ? 'btn-purple' : 'btn-outline-purple'}`}
              onClick={() => setFilter('ouvert')}
            >
              Ouverts
            </button>
            <button 
              className={`btn btn-sm ${filter === 'résolu' ? 'btn-purple' : 'btn-outline-purple'}`}
              onClick={() => setFilter('résolu')}
            >
              Résolus
            </button>
          </div>

          {/* Carte des statistiques */}
          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body py-3">
              <div className="row text-center">
                <div className="col">
                  <h5 className="mb-0">{tickets.length}</h5>
                  <small className="text-muted">Total</small>
                </div>
                <div className="col">
                  <h5 className="mb-0 text-warning">{tickets.filter(t => t.statut === 'Ouvert').length}</h5>
                  <small className="text-muted">Ouverts</small>
                </div>
                <div className="col">
                  <h5 className="mb-0 text-info">{tickets.filter(t => t.statut === 'En cours').length}</h5>
                  <small className="text-muted">En cours</small>
                </div>
                <div className="col">
                  <h5 className="mb-0 text-danger">{tickets.filter(t => t.priorite === 'Critique').length}</h5>
                  <small className="text-muted">En attente</small>
                </div>
                <div className="col">
                  <h5 className="mb-0 text-success">{tickets.filter(t => t.statut === 'Résolu').length}</h5>
                  <small className="text-muted">Résolus</small>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau des tickets */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Sujet</th>
                      <th>Client</th>
                      <th>Priorité</th>
                      <th>Statut</th>
                      <th>Assigné à</th>
                      <th>Dernière activité</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTickets.map(ticket => (
                      <tr key={ticket.id} style={{ cursor: 'pointer' }} onClick={() => router.push(`/admin/tickets/${ticket.id}`)}>
                        <td className="fw-bold">{ticket.id}</td>
                        <td>{ticket.sujet}</td>
                        <td>{ticket.client}</td>
                        <td>
                          <span className={`badge ${getPriorityColor(ticket.priorite)}`}>
                            {ticket.priorite}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${getStatusColor(ticket.statut)}`}>
                            {ticket.statut}
                          </span>
                        </td>
                        <td>{ticket.assigneA}</td>
                        <td>{ticket.derniereActivite}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-purple me-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Action d'assignation
                            }}
                          >
                            <i className="bi bi-person-plus"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Action de suppression
                            }}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-white d-flex justify-content-between align-items-center">
              <div className="text-muted small">
                Affichage 1 à {filteredTickets.length} sur {tickets.length} tickets
              </div>
              <nav aria-label="Pagination">
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Précédent</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Suivant</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}