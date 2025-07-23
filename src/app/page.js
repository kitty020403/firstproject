'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  // List of dashboard links (add more as needed)
  const links = [
    {
      title: "Mes Tickets",
      description: "Consultez et gérez vos tickets d'assistance.",
      icon: "fas fa-ticket-alt",
      href: "/tickets"
    },
    {
      title: "Nouveau Ticket",
      description: "Créez un nouveau ticket d'assistance.",
      icon: "fas fa-plus-circle",
      href: "/tickets/new"
    },
    {
      title: "Connexion",
      description: "Accédez à votre compte.",
      icon: "fas fa-sign-in-alt",
      href: "/login"
    },
    {
      title: "Inscription",
      description: "Créez un nouveau compte utilisateur.",
      icon: "fas fa-user-plus",
      href: "/signup"
    }
    // Ajoutez d'autres liens ici si vous avez plus de composants/pages
  ];

  return (
    <div className="container-fluid bg-purple min-vh-100" style={{ backgroundColor: '#6a0dad', padding: '2rem 0' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h1 className="mb-0">
                <i className="fas fa-home me-2"></i>
                Tableau de Bord
              </h1>
            </div>
            <div className="card-body">
              <div className="row g-4">
                {links.map(link => (
                  <div className="col-md-6" key={link.href}>
                    <div
                      className="card h-100 shadow-sm dashboard-link"
                      style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                      onClick={() => router.push(link.href)}
                      tabIndex={0}
                      onKeyPress={e => { if (e.key === 'Enter') router.push(link.href); }}
                    >
                      <div className="card-body d-flex align-items-center">
                        <div className="me-3">
                          <i className={`${link.icon} fa-2x text-primary`}></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">{link.title}</h5>
                          <p className="card-text text-muted mb-0">{link.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer text-center text-muted">
              Bienvenue sur votre espace d'assistance !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}