'use client';
import { useRouter } from 'next/navigation';

export default function PageAdminAccueil() {
  const router = useRouter();

  // Liens de la barre latérale
  const liensBarreLaterale = [
    { section: "Tableau de bord", items: [
      { title: "Tableau de bord", icon: "bi bi-house", href: "/" }
    ]},
    { section: "Pages", items: [
      { title: "Tickets", icon: "bi bi-ticket", href: "/admin/tickets" },
      { title: "Utilisateurs", icon: "bi bi-people", href: "/Users" }
    ]},
    { section: "Paramètres", items: [
      { title: "Profil", icon: "bi bi-person-gear", href: "/profil" },
      { title: "Déconnexion", icon: "bi bi-box-arrow-right", href: "/logout" }
    ]}
  ];

  // Statistiques des tickets
  const statistiquesTickets = {
    total: 65,
    ouverts: 18,
    enCours: 12,
    resolus: 30,
    urgents: 5,
    categories: {
      technique: 22,
      facturation: 15,
      support: 23,
      autre: 5
    },
    ticketsRecents: [
      {
        id: "TK-001",
        sujet: "Problèmes de connexion après mise à jour",
        statut: "ouvert",
        priorite: "haute",
        auteur: "Samira Ben Ammar",
        derniereMiseAJour: "il y a 2 heures"
      },
      {
        id: "TK-002",
        sujet: "Erreur de facturation",
        statut: "en-cours",
        priorite: "moyenne",
        auteur: "Mohamed Trabelsi",
        derniereMiseAJour: "il y a 1 jour"
      },
      {
        id: "TK-003",
        sujet: "Demande de fonctionnalité - mode sombre",
        statut: "ouvert",
        priorite: "basse",
        auteur: "Lilia Harzallah",
        derniereMiseAJour: "il y a 3 jours"
      },
      {
        id: "TK-004",
        sujet: "Erreurs de timeout du serveur",
        statut: "résolu",
        priorite: "haute",
        auteur: "Leila Boukadida",
        derniereMiseAJour: "il y a 1 semaine"
      },
      {
        id: "TK-005",
        sujet: "Réinitialisation de mot de passe impossible",
        statut: "ouvert",
        priorite: "haute",
        auteur: "Youssef Gharbi",
        derniereMiseAJour: "il y a 1 heure"
      },
      {
        id: "TK-006",
        sujet: "Tableau de bord lent",
        statut: "en-cours",
        priorite: "moyenne",
        auteur: "Amira Chaabane",
        derniereMiseAJour: "il y a 3 heures"
      },
      {
        id: "TK-007",
        sujet: "Demande: Mode sombre",
        statut: "ouvert",
        priorite: "basse",
        auteur: "Azza Boughzella",
        derniereMiseAJour: "il y a 1 jour"
      },
      {
        id: "TK-008",
        sujet: "Problème de téléchargement de facture",
        statut: "résolu",
        priorite: "moyenne",
        auteur: "Karim Zoghlami",
        derniereMiseAJour: "il y a 2 jours"
      }
    ]
  };

  const getBadgeStatut = (statut) => {
    switch(statut) {
      case 'ouvert': return 'bg-warning';
      case 'en-cours': return 'bg-info';
      case 'résolu': return 'bg-success';
      default: return 'bg-secondary';
    }
  };

  const getBadgePriorite = (priorite) => {
    switch(priorite) {
      case 'haute': return 'bg-danger';
      case 'moyenne': return 'bg-primary';
      case 'basse': return 'bg-secondary';
      default: return 'bg-light text-dark';
    }
  };

  return (
    <div className="d-flex min-vh-100" style={{
      background: 'linear-gradient(135deg, rgba(187, 197, 241, 1) 0%, rgba(166, 143, 188, 1) 100%)',
      backdropFilter: 'blur(2px)'
    }}>
      {/* Barre latérale */}
      <aside style={{
        width: "260px",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(118, 75, 162, 0.1)",
        boxShadow: "2px 0 15px rgba(0, 0, 0, 0.05)"
      }}>
        <div className="p-4 border-bottom d-flex align-items-center">
          <i className="bi bi-layers fs-3 text-primary me-2"></i>
          <span className="fw-bold fs-4" style={{ color: 'rgba(87, 50, 112, 1)' }}>Admin</span>
        </div>
        <nav>
          {liensBarreLaterale.map(section => (
            <div key={section.section} className="mt-3">
              <div className="text-muted text-uppercase px-4 mb-2 small">{section.section}</div>
              <ul className="nav flex-column">
                {section.items.map(lien => (
                  <li className="nav-item" key={lien.title}>
                    <button
                      className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                      style={{
                        color: '#6a0dad',
                        backgroundColor: 'transparent',
                        transition: 'all 0.2s ease',
                        fontWeight: '500'
                      }}
                      onClick={() => router.push(lien.href)}
                    >
                      <i className={`${lien.icon} me-2`}></i>
                      {lien.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Contenu principal */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Barre supérieure */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
          <div className="input-group rounded" style={{ 
            maxWidth: "400px",
            boxShadow: "0 2px 8px rgba(118, 75, 162, 1)"
          }}>
            <span className="input-group-text border-0" style={{
              backgroundColor: "rgba(118, 75, 162, 0.27)",
              color: "#6a0dad"
            }}>
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control border-0" 
              style={{
                backgroundColor: "rgba(118, 75, 162, 0.05)",
                color: "#6a0dad"
              }}
              placeholder="Rechercher des tickets..." 
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-bell fs-5" style={{ color: '#6a0dad' }}></i>
            <img 
              src="https://randomuser.me/api/portraits/women/63.jpg" 
              alt="avatar" 
              className="rounded-circle border" 
              width="36" 
              height="36"
              style={{ borderColor: 'rgba(118, 75, 162, 0.3)' }}
            />
            <span className="fw-bold" style={{ color: '#6a0dad' }}>Malek Belcheikh</span>
          </div>
        </header>

        {/* Tableau de bord */}
        <main className="p-4 flex-grow-1">
          {/* Section Statistiques */}
          <div className="row mb-4">
            <div className="col-md-8">
              <div className="card mb-4 h-100">
                <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                  <span>Analyse des Tickets</span>
                  <span className="badge bg-primary">Total: {statistiquesTickets.total}</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-muted mb-3">Répartition par statut</h6>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1 small">
                          <span>Ouverts</span>
                          <span>{statistiquesTickets.ouverts} ({Math.round((statistiquesTickets.ouverts/statistiquesTickets.total)*100)}%)</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                          <div 
                            className="progress-bar bg-warning" 
                            style={{ width: `${(statistiquesTickets.ouverts/statistiquesTickets.total)*100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1 small">
                          <span>En cours</span>
                          <span>{statistiquesTickets.enCours} ({Math.round((statistiquesTickets.enCours/statistiquesTickets.total)*100)}%)</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                          <div 
                            className="progress-bar bg-info" 
                            style={{ width: `${(statistiquesTickets.enCours/statistiquesTickets.total)*100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1 small">
                          <span>Résolus</span>
                          <span>{statistiquesTickets.resolus} ({Math.round((statistiquesTickets.resolus/statistiquesTickets.total)*100)}%)</span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                          <div 
                            className="progress-bar bg-success" 
                            style={{ width: `${(statistiquesTickets.resolus/statistiquesTickets.total)*100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-muted mb-3">Répartition par catégorie</h6>
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                          <span className="badge bg-primary me-2">T</span>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between small">
                            <span>Technique</span>
                            <span>{statistiquesTickets.categories.technique}</span>
                          </div>
                          <div className="progress mt-1" style={{ height: '6px' }}>
                            <div 
                              className="progress-bar bg-primary" 
                              style={{ width: `${(statistiquesTickets.categories.technique/statistiquesTickets.total)*100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                          <span className="badge bg-danger me-2">F</span>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between small">
                            <span>Facturation</span>
                            <span>{statistiquesTickets.categories.facturation}</span>
                          </div>
                          <div className="progress mt-1" style={{ height: '6px' }}>
                            <div 
                              className="progress-bar bg-danger" 
                              style={{ width: `${(statistiquesTickets.categories.facturation/statistiquesTickets.total)*100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <span className="badge bg-success me-2">S</span>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between small">
                            <span>Support</span>
                            <span>{statistiquesTickets.categories.support}</span>
                          </div>
                          <div className="progress mt-1" style={{ height: '6px' }}>
                            <div 
                              className="progress-bar bg-success" 
                              style={{ width: `${(statistiquesTickets.categories.support/statistiquesTickets.total)*100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                  <span>Tickets Urgents</span>
                  <span className="badge bg-danger">{statistiquesTickets.urgents}</span>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-column gap-3">
                    {statistiquesTickets.ticketsRecents
                      .filter(ticket => ticket.priorite === 'haute')
                      .map(ticket => (
                        <div key={ticket.id} className="border-bottom pb-2">
                          <div className="d-flex justify-content-between align-items-start">
                            <span className="fw-bold small">{ticket.id}</span>
                            <span className={`badge ${getBadgeStatut(ticket.statut)} small`}>
                              {ticket.statut.replace('-', ' ')}
                            </span>
                          </div>
                          <p className="mb-1 small">{ticket.sujet}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="small text-muted">{ticket.auteur}</span>
                            <span className="small text-muted">{ticket.derniereMiseAJour}</span>
                          </div>
                        </div>
                      ))}
                    {statistiquesTickets.ticketsRecents.filter(ticket => ticket.priorite === 'haute').length === 0 && (
                      <div className="text-center text-muted py-3 small">
                        Aucun ticket urgent pour le moment
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau des tickets récents */}
          <div className="card">
            <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
              <span>Tickets Récents</span>
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => router.push('/tickets/new')}
              >
                <i className="bi bi-plus"></i> Nouveau Ticket
              </button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Sujet</th>
                      <th>Statut</th>
                      <th>Priorité</th>
                      <th>Auteur</th>
                      <th>Dernière MAJ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statistiquesTickets.ticketsRecents.map(ticket => (
                      <tr key={ticket.id} style={{ cursor: 'pointer' }} onClick={() => router.push(`/tickets/${ticket.id}`)}>
                        <td className="fw-bold">{ticket.id}</td>
                        <td>{ticket.sujet}</td>
                        <td>
                          <span className={`badge ${getBadgeStatut(ticket.statut)}`}>
                            {ticket.statut.replace('-', ' ')}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${getBadgePriorite(ticket.priorite)}`}>
                            {ticket.priorite}
                          </span>
                        </td>
                        <td>{ticket.auteur}</td>
                        <td>{ticket.derniereMiseAJour}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}