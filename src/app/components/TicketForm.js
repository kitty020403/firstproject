'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TicketForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'technical'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Ticket soumis:', formData);
      router.push('/tickets/confirmation');
    }, 1500);
  };

  return (
    <div className="container-fluid bg-purple" style={{ 
      backgroundColor: '#6a0dad',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">
                <i className="fas fa-ticket-alt me-2"></i>
                Nouveau Ticket d'Assistance
              </h2>
            </div>
            
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Titre */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-muted">Titre du problème *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-heading text-muted"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement le problème"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-muted">Description détaillée *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light align-items-start pt-2">
                      <i className="fas fa-align-left text-muted"></i>
                    </span>
                    <textarea
                      className="form-control form-control-lg"
                      name="description"
                      rows="6"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Décrivez le problème en détail..."
                      required
                    ></textarea>
                  </div>
                  <small className="text-muted">Minimum 20 caractères</small>
                </div>

                {/* Priorité et Catégorie */}
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold text-muted">Priorité</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-exclamation-triangle text-muted"></i>
                      </span>
                      <select
                        className="form-select form-select-lg"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                      >
                        <option value="low">Faible</option>
                        <option value="medium">Moyenne</option>
                        <option value="high">Élevée</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold text-muted">Catégorie</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-tag text-muted"></i>
                      </span>
                      <select
                        className="form-select form-select-lg"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="technical">Technique</option>
                        <option value="billing">Facturation</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bouton de soumission */}
                <div className="d-grid mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg fw-bold py-3"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.opacity = '0.9'}
                    onMouseOut={(e) => e.target.style.opacity = '1'}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Soumettre le ticket
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Style global pour le fond violet */}
      <style jsx global>{`
        html, body, #__next {
          background-color: #6a0dad !important;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default TicketForm;