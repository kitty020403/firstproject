'use client';
import { useRouter } from 'next/navigation';

export default function PageUtilisateurs() {
  const router = useRouter();

  // Données des utilisateurs (noms tunisiens)
  const utilisateurs = [
    {
      id: 1,
      nomComplet: "Samira Ben Ammar",
      email: "samira.benammar@gmail.com",
      role: "Administrateur",
      dateInscription: "15/03/2025",
      statut: "actif"
    },
    {
      id: 2,
      nomComplet: "Mohamed Trabelsi",
      email: "mohamed.trabelsi@gmail.com",
      role: "Utilisateur",
      dateInscription: "22/05/2025",
      statut: "actif"
    },
    {
      id: 3,
      nomComplet: "Leila Boukadida",
      email: "leila.boukadida@gmail.com",
      role: "Utilisateur",
      dateInscription: "10/06/2025",
      statut: "actif"
    },
    {
      id: 4,
      nomComplet: "Youssef Gharbi",
      email: "youssef.gharbi@gmail.com",
      role: "Utilisateur",
      dateInscription: "05/07/2025",
      statut: "inactif"
    },
    {
      id: 5,
      nomComplet: "Amira Chaabane",
      email: "amira.chaabane@gmail.com",
      role: "Administrateur",
      dateInscription: "18/08/2025",
      statut: "actif"
    },
    {
      id: 6,
      nomComplet: "Karim Zoghlami",
      email: "karim.zoghlami@gmail.com",
      role: "Utilisateur",
      dateInscription: "30/08/2025",
      statut: "actif"
    }
  ];

  const getBadgeStatut = (statut) => {
    return statut === 'actif' ? 'bg-success' : 'bg-secondary';
  };

  const getBadgeRole = (role) => {
    switch(role) {
      case 'Administrateur': return 'bg-danger';
      case 'Modérateur': return 'bg-primary';
      default: return 'bg-info';
    }
  };

  return (
    <div className="d-flex min-vh-100" style={{
      background: 'linear-gradient(135deg, rgba(187, 197, 241, 1) 0%, rgba(166, 143, 188, 1) 100%)',
      backdropFilter: 'blur(2px)'
    }}>
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
                  style={{ color: '#6a0dad', backgroundColor: 'rgba(106, 13, 173, 0.1)' }}>
                  <i className="bi bi-people me-2"></i>Utilisateurs
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad', backgroundColor: 'transparent' }}
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
        {/* Barre supérieure identique */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
          <div className="input-group rounded" style={{ maxWidth: "400px", boxShadow: "0 2px 8px rgba(118, 75, 162, 1)" }}>
            <span className="input-group-text border-0" style={{ backgroundColor: "rgba(118, 75, 162, 0.27)", color: "#6a0dad" }}>
              <i className="bi bi-search"></i>
            </span>
            <input type="text" className="form-control border-0" 
              style={{ backgroundColor: "rgba(118, 75, 162, 0.05)", color: "#6a0dad" }}
              placeholder="Rechercher des utilisateurs..." />
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-bell fs-5" style={{ color: '#6a0dad' }}></i>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" 
              className="rounded-circle border" width="36" height="36"
              style={{ borderColor: 'rgba(118, 75, 162, 0.3)' }} />
            <span className="fw-bold" style={{ color: '#6a0dad' }}>Admin</span>
          </div>
        </header>

        {/* Tableau des utilisateurs */}
        <main className="p-4 flex-grow-1">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold" style={{ color: '#6a0dad' }}>
                <i className="bi bi-people me-2"></i>
                Gestion des Utilisateurs
              </h5>
              <button className="btn btn-sm" 
                style={{ 
                  background: 'linear-gradient(135deg, #ab98aeff 0%, #703c84ff 100%)',
                  color: 'white'
                }}
                onClick={() => router.push('/admin/utilisateurs/nouveau')}>
                <i className="bi bi-plus-lg me-1"></i> Nouvel utilisateur
              </button>
            </div>
            
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr style={{ color: '#6a0dad' }}>
                      <th>ID</th>
                      <th>Nom Complet</th>
                      <th>Email</th>
                      <th>Rôle</th>
                      <th>Inscription</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utilisateurs.map(user => (
                      <tr key={user.id}>
                        <td>#{user.id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={`https://randomuser.me/api/portraits/${user.id % 2 === 0 ? 'men' : 'women'}/${user.id}.jpg`} 
                              className="rounded-circle me-2" width="32" height="32" />
                            {user.nomComplet}
                          </div>
                        </td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`badge ${getBadgeRole(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                        <td>{user.dateInscription}</td>
                        <td>
                          <span className={`badge ${getBadgeStatut(user.statut)}`}>
                            {user.statut === 'actif' ? 'Actif' : 'Inactif'}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm me-1" 
                            style={{ 
                              backgroundColor: 'rgba(106, 13, 173, 0.1)',
                              color: '#6a0dad'
                            }}
                            onClick={() => router.push(`/admin/utilisateurs/${user.id}`)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-sm" 
                            style={{ 
                              backgroundColor: 'rgba(220, 53, 69, 0.1)',
                              color: '#dc3545'
                            }}>
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
                Affichage 1 à {utilisateurs.length} sur {utilisateurs.length} utilisateurs
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-sm" disabled
                  style={{ 
                    backgroundColor: 'rgba(106, 13, 173, 0.1)',
                    color: '#6a0dad'
                  }}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button className="btn btn-sm" 
                  style={{ 
                    backgroundColor: 'rgba(106, 13, 173, 0.1)',
                    color: '#6a0dad'
                  }}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}