'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear user session or token here if needed
    // localStorage.removeItem('token');
    // sessionStorage.clear();
    // Redirect to login after 1 second
    const timer = setTimeout(() => {
      router.push('/login');
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div className="card shadow p-4 border-0" style={{ borderRadius: 16 }}>
        <h2 className="mb-3 text-primary">Déconnexion</h2>
        <p className="mb-0">Vous avez été déconnecté.<br />Redirection vers la page de connexion...</p>
      </div>
    </div>
  );
}