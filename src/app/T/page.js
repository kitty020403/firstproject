'use client';
import { useRouter } from 'next/navigation';

export default function PageAdminAccueil() {
  const router = useRouter();

  // Liens de la barre latérale
  const liensBarreLaterale = [
    { section: "Tableau de bord", items: [
      { title: "Tableau de bord", icon: "bi bi-speedometer2", href: "/" }
    ]},
    { section: "Gestion", items: [
      { title: "Tickets", icon: "bi bi-ticket-detailed", href: "/admin/tickets" },
      { title: "Utilisateurs", icon: "bi bi-people-fill", href: "/Users" },
      { title: "Rapports", icon: "bi bi-graph-up", href: "/admin/reports" }
    ]},
    { section: "Paramètres", items: [
      { title: "Paramètres système", icon: "bi bi-gear-fill", href: "/settings" },
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
      // ... (keep your existing ticket data)
    ]
  };

  const getBadgeStatut = (statut) => {
    switch(statut) {
      case 'ouvert': return 'bg-warning text-dark';
      case 'en-cours': return 'bg-info text-white';
      case 'résolu': return 'bg-success text-white';
      default: return 'bg-secondary text-white';
    }
  };

  const getBadgePriorite = (priorite) => {
    switch(priorite) {
      case 'haute': return 'bg-danger text-white';
      case 'moyenne': return 'bg-primary text-white';
      case 'basse': return 'bg-secondary text-white';
      default: return 'bg-light text-dark';
    }
  };

  return (
    <div className="d-flex min-vh-100" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: '#ffffff'
    }}>
      {/* Barre latérale - Admin Version */}
      <aside style={{
        width: "280px",
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(79, 70, 229, 0.3)",
        boxShadow: "5px 0 15px rgba(0, 0, 0, 0.2)"
      }}>
        <div className="p-4 border-bottom d-flex align-items-center" style={{ borderColor: 'rgba(79, 70, 229, 0.3)' }}>
          <i className="bi bi-shield-lock fs-3 me-2" style={{ color: '#818cf8' }}></i>
          <span className="fw-bold fs-4" style={{ color: '#ffffff' }}>Admin Panel</span>
        </div>
        <nav>
          {liensBarreLaterale.map(section => (
            <div key={section.section} className="mt-3">
              <div className="text-uppercase px-4 mb-2 small" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{section.section}</div>
              <ul className="nav flex-column">
                {section.items.map(lien => (
                  <li className="nav-item" key={lien.title}>
                    <button
                      className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                      style={{
                        color: router.pathname === lien.href ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                        backgroundColor: router.pathname === lien.href ? 'rgba(79, 70, 229, 0.3)' : 'transparent',
                        transition: 'all 0.2s ease',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        if (router.pathname !== lien.href) {
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (router.pathname !== lien.href) {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                      onClick={() => router.push(lien.href)}
                    >
                      <i className={`${lien.icon} me-2`} style={{ width: '20px' }}></i>
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
        {/* Barre supérieure - Admin Version */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3" style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: "1px solid rgba(79, 70, 229, 0.3)"
        }}>
          <div className="input-group rounded" style={{ 
            maxWidth: "400px",
            border: "1px solid rgba(79, 70, 229, 0.5)"
          }}>
            <span className="input-group-text border-0" style={{
              backgroundColor: "rgba(79, 70, 229, 0.2)",
              color: "#818cf8"
            }}>
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control border-0" 
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#ffffff",
                placeholder: "rgba(255, 255, 255, 0.5)"
              }}
              placeholder="Rechercher des tickets..." 
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <i className="bi bi-bell fs-5" style={{ color: 'rgba(255, 255, 255, 0.8)' }}></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ 
                fontSize: '0.6rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                3
              </span>
            </div>
            <div className="position-relative">
              <i className="bi bi-gear fs-5" style={{ color: 'rgba(255, 255, 255, 0.8)' }}></i>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="avatar" 
                className="rounded-circle border" 
                width="36" 
                height="36"
                style={{ borderColor: 'rgba(79, 70, 229, 0.5)' }}
              />
              <div className="d-flex flex-column">
                <span className="fw-bold small" style={{ color: '#ffffff' }}>Malek Belcheikh</span>
                <span className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Administrateur</span>
              </div>
            </div>
          </div>
        </header>

        {/* Tableau de bord - Admin Version */}
        <main className="p-4 flex-grow-1" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
          {/* Section Statistiques */}
          <div className="row mb-4">
            <div className="col-md-8">
              <div className="card mb-4 h-100 border-0" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="card-header border-0 d-flex justify-content-between align-items-center" style={{
                  background: 'rgba(79, 70, 229, 0.2)',
                  color: '#ffffff'
                }}>
                  <span className="fw-bold">Analyse des Tickets</span>
                  <span className="badge bg-primary">Total: {statistiquesTickets.total}</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Répartition par statut</h6>
                      {/* ... (keep your existing status progress bars) */}
                    </div>
                    <div className="col-md-6">
                      <h6 className="mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Répartition par catégorie</h6>
                      {/* ... (keep your existing category progress bars) */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0" style={{
                background: 'rgba(15, 23, 42, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="card-header border-0 d-flex justify-content-between align-items-center" style={{
                  background: 'rgba(220, 38, 38, 0.2)',
                  color: '#ffffff'
                }}>
                  <span className="fw-bold">Tickets Urgents</span>
                  <span className="badge bg-danger">{statistiquesTickets.urgents}</span>
                </div>
                <div className="card-body">
                  {/* ... (keep your existing urgent tickets list) */}
                </div>
              </div>
            </div>
          </div>

          {/* Tableau des tickets récents - Admin Version */}
          <div className="card border-0" style={{
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="card-header border-0 d-flex justify-content-between align-items-center" style={{
              background: 'rgba(79, 70, 229, 0.2)',
              color: '#ffffff'
            }}>
              <span className="fw-bold">Tickets Récents</span>
              <button 
                className="btn btn-sm rounded"
                style={{
                  background: 'rgba(79, 70, 229, 0.5)',
                  color: '#ffffff',
                  border: '1px solid rgba(79, 70, 229, 0.7)'
                }}
                onClick={() => router.push('/tickets/new')}
              >
                <i className="bi bi-plus"></i> Nouveau Ticket
              </button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead style={{ background: 'rgba(79, 70, 229, 0.2)' }}>
                    <tr style={{ color: '#ffffff' }}>
                      <th>ID</th>
                      <th>Sujet</th>
                      <th>Statut</th>
                      <th>Priorité</th>
                      <th>Auteur</th>
                      <th>Dernière MAJ</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statistiquesTickets.ticketsRecents.map(ticket => (
                      <tr 
                        key={ticket.id} 
                        style={{ 
                          cursor: 'pointer',
                          color: 'rgba(255, 255, 255, 0.8)',
                          background: 'transparent',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        onClick={() => router.push(`/tickets/${ticket.id}`)}
                      >
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
                        <td>
                          <button 
                            className="btn btn-sm p-0 border-0" 
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              // Add admin action here
                            }}
                          >
                            <i className="bi bi-three-dots-vertical"></i>
                          </button>
                        </td>
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