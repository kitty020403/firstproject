'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RepondreTicket() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [statut, setStatut] = useState('en-cours');
  const [priorite, setPriorite] = useState('moyenne');

  // Données du ticket (à remplacer par les données réelles)
  const ticketData = {
    id: "TK-2025-015",
    sujet: "Problème de connexion à l'application mobile",
    description: "Je ne peux pas me connecter à mon compte depuis l'application mobile malgré des identifiants corrects. L'erreur 'Connexion impossible' s'affiche.",
    client: "Mohamed Trabelsi",
    email: "mohamed.trabelsi@example.tn",
    dateCreation: "15/08/2025 10:30",
    categorie: "Technique",
    prioriteActuelle: "Haute",
    statutActuel: "Ouvert",
    messages: [
      {
        id: 1,
        auteur: "Mohamed Trabelsi",
        role: "Client",
        message: "Bonjour, je n'arrive pas à me connecter depuis ce matin. Pouvez-vous m'aider ?",
        date: "15/10/2023 10:30",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        id: 2,
        auteur: "Malek Belcheikh",
        role: "Support",
        message: "Nous avons identifié le problème. Une mise à jour est en cours de déploiement.",
        date: "15/10/2023 11:15",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg"
      }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer la réponse
    console.log('Réponse envoyée:', { message, statut, priorite });
    // Redirection ou mise à jour de l'interface
    router.push('/admin/tickets');
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
      case 'critique': return 'bg-danger';
      case 'haute': return 'bg-warning';
      case 'moyenne': return 'bg-primary';
      default: return 'bg-secondary';
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
          <span className="fw-bold fs-4" style={{ color: '#6a0dad' }}>Admin</span>
        </div>
        <nav>
          <div className="mt-3">
            <div className="text-muted text-uppercase px-4 mb-2 small">Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad' }}
                  onClick={() => router.push('/admin')}>
                  <i className="bi bi-speedometer2 me-2"></i>Tableau de bord
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad' }}
                  onClick={() => router.push('/admin/tickets')}>
                  <i className="bi bi-ticket-detailed me-2"></i>Tickets
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link px-4 py-2 d-flex align-items-center rounded text-start w-100 border-0"
                  style={{ color: '#6a0dad', backgroundColor: 'rgba(106, 13, 173, 0.1)' }}>
                  <i className="bi bi-chat-dots me-2"></i>Répondre
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Contenu principal */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Barre supérieure */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-sm me-3"
              style={{ color: '#6a0dad', backgroundColor: 'rgba(106, 13, 173, 0.1)' }}
              onClick={() => router.push('/admin/tickets')}
            >
              <i className="bi bi-arrow-left me-2"></i>Retour
            </button>
            <h5 className="mb-0 fw-bold" style={{ color: '#6a0dad' }}>
              <i className="bi bi-chat-dots me-2"></i>
              Répondre au Ticket
            </h5>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-primary">#{ticketData.id}</span>
            <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Admin" 
              className="rounded-circle border" width="36" height="36"
              style={{ borderColor: 'rgba(118, 75, 162, 0.3)' }} />
          </div>
        </header>

        {/* Contenu du ticket */}
        <main className="p-4 flex-grow-1">
          <div className="row">
            {/* Colonne de gauche - Historique des messages */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 fw-bold" style={{ color: '#6a0dad' }}>
                    <i className="bi bi-chat-text me-2"></i>
                    Historique de la conversation
                  </h6>
                </div>
                <div className="card-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {ticketData.messages.map(msg => (
                    <div key={msg.id} className={`mb-4 ${msg.role === 'Support' ? 'text-end' : ''}`}>
                      <div className="d-flex align-items-start gap-2">
                        {msg.role !== 'Support' && (
                          <img src={msg.avatar} alt={msg.auteur} 
                            className="rounded-circle" width="40" height="40" />
                        )}
                        <div className={`p-3 rounded ${msg.role === 'Support' 
                          ? 'bg-primary text-white' 
                          : 'bg-light'}`}
                          style={{ maxWidth: '70%' }}
                        >
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <strong>{msg.auteur}</strong>
                            <small>{msg.date}</small>
                          </div>
                          <p className="mb-0">{msg.message}</p>
                        </div>
                        {msg.role === 'Support' && (
                          <img src={msg.avatar} alt={msg.auteur} 
                            className="rounded-circle" width="40" height="40" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulaire de réponse */}
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <h6 className="mb-0 fw-bold" style={{ color: '#6a0dad' }}>
                    <i className="bi bi-reply me-2"></i>
                    Votre réponse
                  </h6>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Tapez votre réponse ici..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{ borderColor: 'rgba(118, 75, 162, 0.3)' }}
                      ></textarea>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold" style={{ color: '#6a0dad' }}>Statut</label>
                        <select
                          className="form-select"
                          value={statut}
                          onChange={(e) => setStatut(e.target.value)}
                          style={{ borderColor: 'rgba(118, 75, 162, 0.3)' }}
                        >
                          <option value="ouvert">Ouvert</option>
                          <option value="en-cours">En cours</option>
                          <option value="résolu">Résolu</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold" style={{ color: '#6a0dad' }}>Priorité</label>
                        <select
                          className="form-select"
                          value={priorite}
                          onChange={(e) => setPriorite(e.target.value)}
                          style={{ borderColor: 'rgba(118, 75, 162, 0.3)' }}
                        >
                          <option value="basse">Basse</option>
                          <option value="moyenne">Moyenne</option>
                          <option value="haute">Haute</option>
                          <option value="critique">Critique</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                      <button 
                        type="button" 
                        className="btn btn-light"
                        style={{ color: '#6a0dad', borderColor: 'rgba(118, 75, 162, 0.3)' }}
                        onClick={() => router.push('/admin/tickets')}
                      >
                        Annuler
                      </button>
                      <button 
                        type="submit" 
                        className="btn"
                        style={{ 
                          background: 'linear-gradient(135deg, #6a0dad 0%, #8a2be2 100%)',
                          color: 'white'
                        }}
                      >
                        <i className="bi bi-send me-2"></i>
                        Envoyer la réponse
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Colonne de droite - Détails du ticket */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-white">
                  <h6 className="mb-0 fw-bold" style={{ color: '#6a0dad' }}>
                    <i className="bi bi-info-circle me-2"></i>
                    Détails du Ticket
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <strong style={{ color: '#6a0dad' }}>Sujet:</strong>
                    <p className="mb-0">{ticketData.sujet}</p>
                  </div>
                  
                  <div className="mb-3">
                    <strong style={{ color: '#6a0dad' }}>Description:</strong>
                    <p className="mb-0 text-muted">{ticketData.description}</p>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <strong style={{ color: '#6a0dad' }}>Client:</strong>
                      <p className="mb-0">{ticketData.client}</p>
                    </div>
                    <div className="col-6">
                      <strong style={{ color: '#6a0dad' }}>Email:</strong>
                      <p className="mb-0">{ticketData.email}</p>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <strong style={{ color: '#6a0dad' }}>Catégorie:</strong>
                      <p className="mb-0">{ticketData.categorie}</p>
                    </div>
                    <div className="col-6">
                      <strong style={{ color: '#6a0dad' }}>Date:</strong>
                      <p className="mb-0">{ticketData.dateCreation}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <strong style={{ color: '#6a0dad' }}>Priorité:</strong>
                      <br />
                      <span className={`badge ${getBadgePriorite(ticketData.prioriteActuelle.toLowerCase())}`}>
                        {ticketData.prioriteActuelle}
                      </span>
                    </div>
                    <div className="col-6">
                      <strong style={{ color: '#6a0dad' }}>Statut:</strong>
                      <br />
                      <span className={`badge ${getBadgeStatut(ticketData.statutActuel.toLowerCase())}`}>
                        {ticketData.statutActuel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white">
                  <h6 className="mb-0 fw-bold" style={{ color: '#6a0dad' }}>
                    <i className="bi bi-lightning me-2"></i>
                    Actions Rapides
                  </h6>
                </div>
                <div className="card-body">
                  <button className="btn btn-sm w-100 mb-2"
                    style={{ color: '#6a0dad', backgroundColor: 'rgba(106, 13, 173, 0.1)' }}>
                    <i className="bi bi-telephone me-2"></i>
                    Contacter le client
                  </button>
                  <button className="btn btn-sm w-100 mb-2"
                    style={{ color: '#28a745', backgroundColor: 'rgba(40, 167, 69, 0.1)' }}>
                    <i className="bi bi-check-circle me-2"></i>
                    Marquer comme résolu
                  </button>
                  <button className="btn btn-sm w-100"
                    style={{ color: '#dc3545', backgroundColor: 'rgba(220, 53, 69, 0.1)' }}>
                    <i className="bi bi-x-circle me-2"></i>
                    Fermer le ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}