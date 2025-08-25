'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function HomePage() {
  const router = useRouter();
 
 
  // Sidebar links
  const sidebarLinks = [
    { section: "Dashboard", items: [
      { title: "Default", icon: "fas fa-tachometer-alt", href: "/" }
    ]},
  
    { section: "Pages", items: [
      { title: "Connexion", icon: "fas fa-sign-in-alt", href: "/login" },
      { title: "Inscription", icon: "fas fa-user-plus", href: "/signup" },
      { title: "Deconnexion", icon: "fas fa-user-plus", href: "/logout"}
    ]}
  ];

  // Dashboard cards
  const dashboardCards = [
    { color: "bg-primary", value: "12", label: "Tickets Ouverts", icon: "fas fa-ticket-alt" },
    { color: "bg-success", value: "5", label: "Tickets Résolus", icon: "fas fa-check-circle" },
    { color: "bg-warning", value: "3", label: "Tickets en Attente", icon: "fas fa-hourglass-half" }
  ];

  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Sidebar */}
      <aside className="bg-white border-end shadow-sm" style={{ width: 250 }}>
        <div className="p-4 border-bottom d-flex align-items-center">
          <i className="fas fa-life-ring fa-2x text-primary me-2"></i>
          <span className="fw-bold fs-4">ResolvePro</span>
        </div>
        <nav className="flex-grow-1">
          {sidebarLinks.map(section => (
            <div key={section.section} className="mt-4">
              <div className="text-muted text-uppercase px-4 mb-2" style={{ fontSize: 12 }}>{section.section}</div>
              <ul className="nav flex-column">
                {section.items.map(link => (
                  <li className="nav-item" key={link.title}>
                    <a
                      className="nav-link px-4 py-2 d-flex align-items-center rounded"
                      style={{ color: "#333", cursor: "pointer", transition: "background 0.2s" }}
                      onClick={() => router.push(link.href)}
                      onMouseOver={e => e.currentTarget.style.background = "#f0f4fa"}
                      onMouseOut={e => e.currentTarget.style.background = "transparent"}
                    >
                      <i className={`${link.icon} me-2`}></i>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white shadow-sm">
          <div className="input-group w-50 rounded" style={{ background: "#f0f4fa" }}>
            <span className="input-group-text bg-transparent border-0"><i className="fas fa-search"></i></span>
            <input type="text" className="form-control border-0 bg-transparent" placeholder="Rechercher..." />
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="fas fa-bell fa-lg text-muted" style={{ cursor: "pointer" }}></i>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="rounded-circle border" width={36} height={36} />
          </div>
        </header>

        {/* Dashboard */}
        <main className="p-4">
          <div className="row g-4 mb-4">
            {dashboardCards.map(card => (
              <div className="col-md-4" key={card.label}>
                <div className={`card shadow-sm border-0 ${card.color} text-white rounded-4`}>
                  <div className="card-body d-flex align-items-center">
                    <i className={`${card.icon} fa-2x me-3`}></i>
                    <div>
                      <div className="fs-3 fw-bold">{card.value}</div>
                      <div>{card.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4">
            {/* Chart Placeholder */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-header bg-white fw-bold rounded-top-4">Statistiques des Tickets</div>
                <div className="card-body" style={{ minHeight: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {/* Replace this with a chart component */}
                  <span className="text-muted">[Graphique à venir]</span>
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 mb-4 rounded-4">
                <div className="card-header bg-white fw-bold rounded-top-4">Actions Rapides</div>
                <div className="card-body">
                  <button className="btn btn-primary w-100 mb-2 rounded-3" onClick={() => router.push("/tickets/new")}>
                    <i className="fas fa-plus-circle me-2"></i> Nouveau Ticket
                  </button>
                  <button className="btn btn-outline-primary w-100 rounded-3" onClick={() => router.push("/tickets")}>
                    <i className="fas fa-ticket-alt me-2"></i> Voir Mes Tickets
                  </button>
                </div>
              </div>
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-header bg-white fw-bold rounded-top-4">Infos Utilisateur</div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="rounded-circle me-2 border" width={40} height={40} />
                    <div>
                      <div className="fw-bold">Lina</div>
                      <div className="text-muted" style={{ fontSize: 13 }}>Utilisateur</div>
                    </div>
                  </div>
                  <div className="text-muted" style={{ fontSize: 13 }}>Bienvenue sur votre espace d'assistance !</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}