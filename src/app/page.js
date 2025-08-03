'use client';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <nav className="d-flex align-items-center justify-content-between px-4 py-3 bg-white border-bottom shadow-sm">
        <div className="d-flex align-items-center">
          <i className="fas fa-life-ring fa-2x text-primary me-2"></i>
          <span className="fw-bold fs-3 text-primary">ResolvePro</span>
        </div>
        <div>
          <button className="btn btn-outline-primary me-2" onClick={() => router.push('/login')}>Login</button>
          <button className="btn btn-primary" onClick={() => router.push('/signup')}>Sign Up</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <h1 className="fw-bold display-4 text-center mb-3" style={{ color: '#222' }}>
          Simplify Your Ticket Management
        </h1>
        <p className="lead text-center mb-4" style={{ color: '#555' }}>
          Plan, track, and resolve support tickets easily with ProjectTicket Assistance System.
        </p>
        <div className="d-flex flex-column flex-md-row align-items-center gap-3 mb-5">
          <input
            type="email"
            className="form-control form-control-lg rounded-pill shadow-sm"
            placeholder="Enter your email"
            style={{ maxWidth: 300 }}
          />
          <button className="btn btn-primary btn-lg rounded-pill px-4" onClick={() => router.push('/signup')}>
            Get Started
          </button>
        </div>
        {/* Optional: Illustration or Screenshot */}
        <img
          src="/dashboard-illustration.png"
          alt="Dashboard preview"
          className="img-fluid rounded shadow"
          style={{ maxWidth: 700, background: '#fff' }}
        />
      </div>
    </div>
  );
}