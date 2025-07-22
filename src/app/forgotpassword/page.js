// app/forgotpassword/page.js
'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPassword() {
  const router = useRouter();
  
  return (
    <div className="container-fluid bg-purple min-vh-100 d-flex align-items-center justify-content-center" 
         style={{ backgroundColor: '#6a0dad', padding: '2rem' }}>
      <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0 text-center">
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
              <label htmlFor="email" className="form-label fw-bold text-muted">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="fas fa-envelope text-muted"></i>
                </span>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="d-grid mt-5">
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
              style={{ color: '#764ba2' }}
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