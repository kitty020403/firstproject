'use client';
import { useRouter } from 'next/navigation';

export default function UserPage() {
  const router = useRouter();

  // User data
  const userData = {
    name: "Sarah Mr",
    email: "Sarah.mr@gmail.com",
    role: "Utilisateur Standard",
    joinDate: "15 Juillet 2025",
    tickets: {
      total: 24,
      open: 5,
      resolved: 16,
      inProgress: 3
    },
    recentActivity: [
      { id: 1, action: "Ticket créé", ticketId: "TK-1024", date: "2 heures ago" },
      { id: 2, action: "Commentaire ajouté", ticketId: "TK-1018", date: "1 jour ago" },
      { id: 3, action: "Ticket résolu", ticketId: "TK-1009", date: "3 jours ago" }
    ],
    priorityTickets: [
      { id: "TK-1024", title: "Problème de connexion", priority: "Haute", status: "En cours" },
      { id: "TK-1028", title: "Probleme de performance", priority: "Haute", status: "En cours" },
      { id: "TK-1018", title: "Demande de fonctionnalité", priority: "Moyenne", status: "En attente" }
    ]
  };

  // Sidebar links
  const sidebarLinks = [
    { section: "Tableau de bord", items: [
      { title: "Vue d'ensemble", icon: "bi bi-house", href: "/user" }
    ]},
    { section: "Mes Tickets", items: [
      { title: "Tous mes tickets", icon: "bi bi-ticket", href: "/tickets" },
      { title: "Nouveau ticket", icon: "bi bi-plus-circle", href: "tickets/new" }
    ]},
    { section: "Compte", items: [
      { title: "Mon profil", icon: "bi bi-person", href: "/userprofil" },
      { title: "Déconnexion", icon: "bi bi-box-arrow-right", href: "/logout" }
    ]}
  ];

  return (
    <div className="d-flex min-vh-100" style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #39395e 100%)',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif"
    }}> 
      {/* Sidebar */}
      <aside className="border-end" style={{ 
        width: "260px", 
        backgroundColor: 'rgba(26, 26, 46, 0.8)',
        borderRight: "1px solid rgba(79, 70, 229, 0.3)" 
      }}>
        <div className="p-4 border-bottom d-flex align-items-center" style={{ borderColor: 'rgba(79, 70, 229, 0.3)' }}>
          <i className="bi bi-layers fs-3 me-2" style={{ color: '#4f46e5' }}></i>
          <span className="fw-bold fs-4" style={{ color: '#ffffff' }}>ResolvePro</span>
        </div>
        <nav>
          {sidebarLinks.map(section => (
            <div key={section.section} className="mt-3">
              <div className="px-4 mb-2 small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{section.section}</div>
              <ul className="nav flex-column">
                {section.items.map(link => (
                  <li className="nav-item" key={link.title}>
                    <button
                      className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                      style={{
                        color: router.pathname === link.href ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                        backgroundColor: router.pathname === link.href ? 'rgba(79, 70, 229, 0.2)' : 'transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (router.pathname !== link.href) {
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (router.pathname !== link.href) {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                      onClick={() => router.push(link.href)}
                    >
                      <i className={`${link.icon} me-2`}></i>
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3" style={{
          borderBottom: "1px solid rgba(79, 70, 229, 0.3)",
          backgroundColor: 'rgba(26, 26, 46, 0.8)',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="input-group rounded" style={{ maxWidth: "400px" }}>
            <span className="input-group-text border-0" style={{ 
              backgroundColor: 'rgba(79, 70, 229, 0.2)',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control border-0" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 1)',
                color: '#ffffff',
                placeholder: 'rgba(255, 255, 255, 0.6)'
              }}
              placeholder="Rechercher mes tickets..." 
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <i className="bi bi-bell fs-5" style={{ color: 'rgba(255, 255, 255, 0.8)' }}></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ 
                backgroundColor: '#4f46e5',
                fontSize: '0.6rem'
              }}>
                3
              </span>
            </div>
            <img 
              src="https://randomuser.me/api/portraits/women/17.jpg" 
              alt="avatar" 
              className="rounded-circle" 
              width="36" 
              height="36" 
            />
            <span className="fw-bold" style={{ color: '#ffffff' }}>{userData.name}</span>
          </div>
        </header>

        {/* Dashboard */}
        <main className="p-4 flex-grow-1">
          {/* Welcome Banner */}
          <div className="card mb-4 border-0" style={{
            background: 'rgba(79, 70, 229, 0.15)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-2" style={{ color: '#ffffff' }}>Bonjour, {userData.name}!</h2>
                <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Que souhaitez-vous faire aujourd'hui ?</p>
              </div>
              <div className="d-flex gap-2">
                <button 
                  className="btn px-4 py-2 rounded" 
                  style={{
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    color: '#ffffff',
                    border: '1px solid rgba(79, 70, 229, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)'}
                  onClick={() => router.push('/tickets/new')}
                >
                  <i className="bi bi-plus-circle me-2"></i>Nouveau Ticket
                </button>
                <button 
                  className="btn px-4 py-2 rounded" 
                  style={{
                    backgroundColor: '#4f46e5',
                    color: '#ffffff',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
                  onClick={() => router.push('/tickets')}
                >
                  <i className="bi bi-ticket-detailed me-2"></i>Voir mes Tickets
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card border-0 h-100" style={{
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded me-3" style={{ 
                      backgroundColor: 'rgba(79, 70, 229, 0.2)',
                      color: '#4f46e5'
                    }}>
                      <i className="bi bi-ticket-detailed fs-3"></i>
                    </div>
                    <div>
                      <div className="fs-3 fw-bold" style={{ color: '#ffffff' }}>{userData.tickets.total}</div>
                      <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Tickets Totals</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress" style={{ height: "6px", backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div 
                        className="progress-bar" 
                        style={{ 
                          width: "100%",
                          backgroundColor: '#4f46e5'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other stat cards follow same pattern with different colors */}
            {/* Resolved Tickets */}
            <div className="col-md-3">
              <div className="card border-0 h-100" style={{
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded me-3" style={{ 
                      backgroundColor: 'rgba(74, 222, 128, 0.2)',
                      color: '#4ade80'
                    }}>
                      <i className="bi bi-check-circle fs-3"></i>
                    </div>
                    <div>
                      <div className="fs-3 fw-bold" style={{ color: '#ffffff' }}>{userData.tickets.resolved}</div>
                      <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Résolus</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress" style={{ height: "6px", backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div 
                        className="progress-bar" 
                        style={{ 
                          width: `${(userData.tickets.resolved / userData.tickets.total) * 100}%`,
                          backgroundColor: '#4ade80'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Open Tickets */}
            <div className="col-md-3">
              <div className="card border-0 h-100" style={{
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded me-3" style={{ 
                      backgroundColor: 'rgba(251, 191, 36, 0.2)',
                      color: '#fbbf24'
                    }}>
                      <i className="bi bi-hourglass-split fs-3"></i>
                    </div>
                    <div>
                      <div className="fs-3 fw-bold" style={{ color: '#ffffff' }}>{userData.tickets.open}</div>
                      <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>En Attente</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress" style={{ height: "6px", backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div 
                        className="progress-bar" 
                        style={{ 
                          width: `${(userData.tickets.open / userData.tickets.total) * 100}%`,
                          backgroundColor: '#fbbf24'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* In Progress Tickets */}
            <div className="col-md-3">
              <div className="card border-0 h-100" style={{
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded me-3" style={{ 
                      backgroundColor: 'rgba(56, 189, 248, 0.2)',
                      color: '#38bdf8'
                    }}>
                      <i className="bi bi-arrow-repeat fs-3"></i>
                    </div>
                    <div>
                      <div className="fs-3 fw-bold" style={{ color: '#ffffff' }}>{userData.tickets.inProgress}</div>
                      <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>En Cours</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress" style={{ height: "6px", backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div 
                        className="progress-bar" 
                        style={{ 
                          width: `${(userData.tickets.inProgress / userData.tickets.total) * 100}%`,
                          backgroundColor: '#38bdf8'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Recent Activity and Priority Tickets */}
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="card border-0 h-100" style={{
                    backgroundColor: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="card-header border-0 d-flex justify-content-between align-items-center" style={{
                      backgroundColor: 'rgba(79, 70, 229, 0.2)',
                      color: '#ffffff'
                    }}>
                      <span className="fw-bold">Mon Activité Récente</span>
                      <button className="btn btn-sm rounded" style={{
                        backgroundColor: 'rgba(79, 70, 229, 0.3)',
                        color: '#ffffff',
                        border: '1px solid rgba(79, 70, 229, 0.5)'
                      }}>
                        Voir tout
                      </button>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table mb-0" style={{ color: '#ffffff' }}>
                          <thead style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)' }}>
                            <tr>
                              <th>Action</th>
                              <th>Ticket</th>
                              <th>Date</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {userData.recentActivity.map(activity => (
  <tr key={activity.id} style={{ 
    borderColor: 'rgba(79, 70, 229, 0.1)',
    backgroundColor: 'rgba(26, 26, 46, 0.6)' // Darker background for rows
  }}>
    <td style={{ color: '#ffffff' }}>
      <span className={`badge ${activity.action.includes('créé') ? 'bg-primary' : activity.action.includes('résolu') ? 'bg-success' : 'bg-info'}`}>
        {activity.action}
      </span>
    </td>
    <td style={{ color: '#a78bfa' }}> {/* Lighter purple for links */}
      <a href="#" className="text-decoration-none">{activity.ticketId}</a>
    </td>
    <td style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{activity.date}</td>
    <td className="text-end">
      <button className="btn btn-sm rounded" style={{
        backgroundColor: 'rgba(79, 70, 229, 0.3)',
        color: '#ffffff',
        border: '1px solid rgba(79, 70, 229, 0.5)'
      }}>
        <i className="bi bi-arrow-right"></i>
      </button>
    </td>
  </tr>
))}
</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Priority Tickets Card */}
                <div className="col-md-12">
                  <div className="card border-0 h-100" style={{
                    backgroundColor: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="card-header border-0 d-flex justify-content-between align-items-center" style={{
                      backgroundColor: 'rgba(79, 70, 229, 0.2)',
                      color: '#ffffff'
                    }}>
                      <span className="fw-bold">Mes Tickets Prioritaires</span>
                      <button className="btn btn-sm rounded" style={{
                        backgroundColor: 'rgba(79, 70, 229, 0.3)',
                        color: '#ffffff',
                        border: '1px solid rgba(79, 70, 229, 0.5)'
                      }}>
                        Voir tout
                      </button>
                    </div>
                    <div className="card-body">
                      {userData.priorityTickets.map(ticket => (
                        <div key={ticket.id} className="mb-3 p-3 rounded" style={{
                          backgroundColor: 'rgba(79, 70, 229, 0.1)',
                          border: '1px solid rgba(79, 70, 229, 0.2)'
                        }}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0" style={{ color: '#ffffff' }}>{ticket.title}</h6>
                            <span className={`badge ${ticket.priority === 'Haute' ? 'bg-danger' : 'bg-warning'}`}>
                              {ticket.priority}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{ticket.id}</span>
                            <span className={`badge ${ticket.status === 'En cours' ? 'bg-info' : 'bg-secondary'} bg-opacity-10 text-white`}>
                              {ticket.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* User Profile and Quick Links */}
            <div className="col-lg-4">
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="card border-0" style={{
                    backgroundColor: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="card-header border-0 fw-bold" style={{
                      backgroundColor: 'rgba(79, 70, 229, 0.2)',
                      color: '#ffffff'
                    }}>
                      Mon Profil
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <img 
                          src="https://randomuser.me/api/portraits/women/17.jpg" 
                          alt="avatar" 
                          className="rounded-circle me-3" 
                          width="64" 
                          height="64" 
                        />
                        <div>
                          <h5 className="mb-1" style={{ color: '#ffffff' }}>{userData.name}</h5>
                          <p className="small mb-1" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{userData.role}</p>
                          <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Membre depuis {userData.joinDate}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          value={userData.email} 
                          readOnly
                          style={{
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            border: '1px solid rgba(79, 70, 229, 0.2)',
                            color: '#ffffff'
                          }}
                        />
                      </div>
                      <button 
                        className="w-100 py-2 rounded" 
                        style={{
                          backgroundColor: 'rgba(79, 70, 229, 0.2)',
                          color: '#ffffff',
                          border: '1px solid rgba(79, 70, 229, 0.5)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.3)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)'}
                        onClick={() => router.push('/userprofil')}
                      >
                        Modifier le Profil
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Quick Links Card */}
                <div className="col-md-12">
                  <div className="card border-0 mt-4" style={{
                    backgroundColor: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="card-header border-0 fw-bold" style={{
                      backgroundColor: 'rgba(79, 70, 229, 0.2)',
                      color: '#ffffff'
                    }}>
                      Liens Rapides
                    </div>
                    <div className="card-body">
                      <div className="d-grid gap-2">
                        <button 
                          className="btn text-start d-flex align-items-center rounded py-2" 
                          style={{
                            color: '#ffffff',
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            border: '1px solid rgba(79, 70, 229, 0.2)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.1)'}
                        >
                          <i className="bi bi-question-circle me-2"></i>Centre d'aide
                        </button>
                        
                        <button 
                          className="btn text-start d-flex align-items-center rounded py-2" 
                          style={{
                            color: '#ffffff',
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            border: '1px solid rgba(79, 70, 229, 0.2)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.1)'}
                        >
                          <i className="bi bi-file-earmark-text me-2"></i>Documentation
                        </button>
                        
                        <button 
                          className="btn text-start d-flex align-items-center rounded py-2" 
                          style={{
                            color: '#ffffff',
                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                            border: '1px solid rgba(79, 70, 229, 0.2)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.1)'}
                        >
                          <i className="bi bi-chat-left-text me-2"></i>Contactez le support
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Statistics Card */}
                <div className="col-md-12">
                  <div className="card border-0" style={{
                    backgroundColor: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="card-header border-0 fw-bold" style={{
                      backgroundColor: 'rgba(79, 70, 229, 0.2)',
                      color: '#ffffff'
                    }}>
                      Statistiques
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <div className="mb-3">
                          <div className="fs-4 fw-bold" style={{ color: '#ffffff' }}>{userData.tickets.resolved}</div>
                          <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Tickets résolus ce mois</div>
                        </div>
                        <div className="mb-3">
                          <div className="fs-4 fw-bold" style={{ color: '#ffffff' }}>92%</div>
                          <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Taux de satisfaction</div>
                        </div>
                        <div className="mb-3">
                          <div className="fs-4 fw-bold" style={{ color: '#ffffff' }}>2.4j</div>
                          <div className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Temps moyen de résolution</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}