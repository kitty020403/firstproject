'use client';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #39395e 100%)',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header */}
      <nav className="d-flex align-items-center justify-content-between px-4 py-3" style={{
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="d-flex align-items-center">
          <i className="fas fa-2x text-primary me-2" style={{ color: '#4f46e5' }}></i>
          <span className="fw-bold fs-3" style={{ color: '#ffffff' }}>ResolvePro</span>
        </div>
        <div>
          <button 
            className="btn btn-outline-light me-2" 
            onClick={() => router.push('/login')}
            style={{ borderRadius: '8px', padding: '8px 16px' }}
          >
            Login
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => router.push('/signup')}
            style={{ 
              borderRadius: '8px', 
              padding: '8px 16px',
              background: '#4f46e5',
              border: 'none'
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content - Modified Layout */}
      <div className="container d-flex align-items-center" style={{ 
        minHeight: '80vh',
        padding: '2rem',
        gap: '4rem'
      }}>
        {/* Text Content - Left Side */}
        <div style={{ flex: 1 }}>
          <h1 className="fw-bold display-4 mb-4" style={{ 
            color: '#ffffff',
            lineHeight: '1.2',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Streamline Your Support Ticket Management
          </h1>
          <p className="lead mb-5" style={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.25rem'
          }}>
            Effortlessly track, prioritize, and resolve support tickets with our powerful Ticket Assistance System.
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-5">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              style={{ 
                borderRadius: '8px',
                border: 'none',
                padding: '12px 20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
            <button 
              className="btn btn-primary btn-lg px-4"
              onClick={() => router.push('/signup')}
              style={{ 
                borderRadius: '8px',
                background: '#4f46e5',
                border: 'none',
                padding: '12px 24px',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                whiteSpace: 'nowrap'
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Image - Right Side */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '100%'
          }}>
            <img
              src="/images/hd.png"
              alt="Dashboard preview"
              className="img-fluid"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '400px',
        background: 'linear-gradient(to bottom, rgba(79, 70, 229, 0.15) 0%, transparent 100%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
    </div>
  );
}