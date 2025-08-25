'use client';
import { useRouter } from 'next/navigation';

const TicketListPage = () => {
  const router = useRouter();

  // Static ticket data
  const staticTickets = [
    {
      id: 1,
      title: "Problème de connexion",
      description: "Je ne peux pas me connecter à mon compte malgré des identifiants corrects.",
      priority: "high",
      category: "technical",
      status: "open",
      createdAt: "2025-05-15T10:30:00Z"
    },
    {
      id: 2,
      title: "Facture incorrecte",
      description: "Ma dernière facture contient des montants qui ne correspondent pas à mon utilisation.",
      priority: "medium",
      category: "billing",
      status: "in-progress",
      createdAt: "2025-05-10T14:45:00Z"
    },
    {
      id: 3,
      title: "Fonctionnalité manquante",
      description: "La fonction d'export des données mentionnée dans la documentation semble absente.",
      priority: "low",
      category: "support",
      status: "resolved",
      createdAt: "2025-05-05T09:15:00Z"
    },
    {
      id: 4,
      title: "Demande de fonctionnalité",
      description: "J'aimerais pouvoir exporter les données en format CSV.",
      priority: "low",
      category: "support",
      status: "open",
      createdAt: "2025-05-20T11:20:00Z"
    },
    {
      id: 5,
      title: "Problème d'affichage",
      description: "Le tableau de bord n'affiche pas correctement les graphiques sur mobile.",
      priority: "medium",
      category: "technical",
      status: "in-progress",
      createdAt: "2025-05-22T14:10:00Z"
    }
  ];

  return (
    <div className="min-vh-100" style={{ 
      background: 'linear-gradient(135deg, #fdfdfdff 0%, #ef91c3ff 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0" style={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.85)'
            }}>
              <div className="card-header border-0 bg-transparent pt-4">
                <h2 className="mb-0 text-center fw-bold" style={{ color: '#b95797ff' }}>
                  <i className="fas fa-ticket-alt me-2"></i>
                  Mes Tickets d'Assistance
                </h2>
              </div>
              
              <div className="card-body p-4">
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr style={{ color: '#b95797ff' }}>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Priorité</th>
                        <th>Statut</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staticTickets.map(ticket => (
                        <tr key={ticket.id}>
                          <td>#{ticket.id}</td>
                          <td>{ticket.title}</td>
                          <td>
                            <span className={`badge ${
                              ticket.priority === 'high' ? 'bg-danger' : 
                              ticket.priority === 'medium' ? 'bg-warning' : 'bg-success'
                            }`}>
                              {ticket.priority === 'high' ? 'Élevée' : 
                              ticket.priority === 'medium' ? 'Moyenne' : 'Faible'}
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${
                              ticket.status === 'open' ? 'bg-primary' : 
                              ticket.status === 'in-progress' ? 'bg-info' : 'bg-success'
                            }`}>
                              {ticket.status === 'open' ? 'Ouvert' : 
                              ticket.status === 'in-progress' ? 'En cours' : 'Résolu'}
                            </span>
                          </td>
                          <td>{new Date(ticket.createdAt).toLocaleDateString('fr-FR')}</td>
                          <td>
                            <button 
                              className="btn btn-sm"
                              style={{
                                background: 'rgba(185, 87, 151, 0.1)',
                                border: '1px solid rgba(185, 87, 151, 0.3)',
                                color: '#b95797ff',
                                transition: 'all 0.3s'
                              }}
                              onClick={() => router.push(`/tickets/${ticket.id}`)}
                              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(185, 87, 151, 0.2)'}
                              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(185, 87, 151, 0.1)'}
                            >
                              Voir
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Add New Ticket Button */}
                <div className="d-grid mt-4">
                  <button 
                    className="btn btn-lg fw-bold py-3 border-0"
                    style={{
                      background: 'linear-gradient(135deg, #b95797ff 0%, #ef91c3ff 100%)',
                      color: 'white',
                      transition: 'all 0.3s',
                      boxShadow: '0 4px 15px rgba(185, 87, 151, 0.3)'
                    }}
                    onClick={() => router.push('/tickets/new')}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <i className="fas fa-plus-circle me-2"></i>
                    Créer un Nouveau Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketListPage;