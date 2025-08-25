'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPassword() {
  const router = useRouter();
  
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{ 
           background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #39395e 100%)',
           padding: '2rem' 
         }}>
      <div className="card shadow-lg border-0" style={{ 
        width: '100%', 
        maxWidth: '500px',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
      }}>
        <div className="card-header border-0 bg-transparent pt-4">
          <h2 className="mb-0 text-center fw-bold" style={{ color: '#39395e' }}>
            <i className="fas fa-key me-2"></i>
            Mot de passe oublié
          </h2>
        </div>
        
        <div className="card-body p-4">
          <p className="text-muted mb-4 text-center">
            Entrez votre email pour réinitialiser votre mot de passe.
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-bold" style={{ color: '#39395e' }}>Email</label>
              <div className="input-group">
                <span className="input-group-text" style={{ 
                  backgroundColor: 'rgba(239, 145, 195, 0.2)',
                  borderColor: 'rgba(239, 145, 195, 0.3)'
                }}>
                  <i className="fas fa-envelope" style={{ color: '#39395e' }}></i>
                </span>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  required
                  placeholder="example@email.com"
                  style={{
                    borderColor: 'rgba(239, 145, 195, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                  }}
                />
              </div>
            </div>

            <div className="d-grid mt-5">
              <button
                type="submit"
                className="btn btn-lg fw-bold py-3 border-0"
                style={{
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #39395e 100%)',
                  color: 'white',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(185, 87, 151, 0.3)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                <i className="fas fa-paper-plane me-2"></i>
                Envoyer le lien
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <Link 
              href="/login" 
              className="text-decoration-none fw-bold"
              style={{ 
                color: '#1a1a2e ',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#1a1a2e '}
              onMouseOut={(e) => e.currentTarget.style.color = '#1a1a2e '}
            >
              <i className="fas fa-arrow-left me-2"></i>
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}