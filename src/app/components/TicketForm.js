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

    // Simulate form submission delay
    setTimeout(() => {
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        category: 'technical'
      });
      setIsSubmitting(false);
      router.push('/tickets/confirmation');
    }, 1500);
  };

  return (
    <div className="min-vh-100" style={{ 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #39395e 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0" style={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.85)'
            }}>
              <div className="card-header border-0 bg-transparent pt-4">
                <h2 className="mb-0 text-center fw-bold" style={{ color: '#39395e' }}>
                  <i className="fas fa-ticket-alt me-2"></i>
                  Nouveau Ticket d'Assistance
                </h2>
              </div>
              
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Titre */}
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#39395e' }}>Titre du problème *</label>
                    <div className="input-group">
                      <span className="input-group-text" style={{
                        backgroundColor: 'rgba(118, 75, 162, 0.3)',
                        borderColor: 'rgba(118, 75, 162, 0.3)'
                      }}>
                        <i className="fas fa-heading" style={{ color: '#39395e' }}></i>
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Décrivez brièvement le problème"
                        required
                        style={{
                          borderColor: 'rgba(118, 75, 162, 0.3)',
                          backgroundColor: 'rgba(255, 255, 255, 0.7)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#39395e' }}>Description détaillée *</label>
                    <div className="input-group">
                      <span className="input-group-text align-items-start pt-2" style={{
                        backgroundColor: 'rgba(118, 75, 162, 0.3)',
                        borderColor: 'rgba(118, 75, 162, 0.3)'
                      }}>
                        <i className="fas fa-align-left" style={{ color: '#39395e' }}></i>
                      </span>
                      <textarea
                        className="form-control form-control-lg"
                        name="description"
                        rows="6"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Décrivez le problème en détail..."
                        required
                        style={{
                          borderColor: 'rgba(118, 75, 162, 0.3)',
                          backgroundColor: 'rgba(255, 255, 255, 0.7)'
                        }}
                      ></textarea>
                    </div>
                    <small className="text-muted">Minimum 20 caractères</small>
                  </div>

                  {/* Priorité et Catégorie */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold" style={{ color: '#39395e' }}>Priorité</label>
                      <div className="input-group">
                        <span className="input-group-text" style={{
                          backgroundColor: 'rgba(118, 75, 162, 0.3)',
                          borderColor: 'rgba(118, 75, 162, 0.3)'
                        }}>
                          <i className="fas fa-exclamation-triangle" style={{ color: '#39395e' }}></i>
                        </span>
                        <select
                          className="form-select form-select-lg"
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          style={{
                            borderColor: 'rgba(118, 75, 162, 0.3)',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)'
                          }}
                        >
                          <option value="low">Faible</option>
                          <option value="medium">Moyenne</option>
                          <option value="high">Élevée</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold" style={{ color: '#39395e' }}>Catégorie</label>
                      <div className="input-group">
                        <span className="input-group-text" style={{
                          backgroundColor: 'rgba(118, 75, 162, 0.3)',
                          borderColor: 'rgba(118, 75, 162, 0.3)'
                        }}>
                          <i className="fas fa-tag" style={{ color: '#39395e' }}></i>
                        </span>
                        <select
                          className="form-select form-select-lg"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          style={{
                            borderColor: 'rgba(118, 75, 162, 0.3)',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)'
                          }}
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
                      className="btn btn-lg fw-bold py-3 border-0"
                      style={{
                        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #39395e 100%)',
                        color: 'white',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 15px rgba(185, 87, 151, 0.3)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
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
      </div>
    </div>
  );
};

export default TicketForm;