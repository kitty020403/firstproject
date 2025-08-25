'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmationPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/tickets'); // Redirect to tickets list or home
    }, 3000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: '100vh', background: '#f8fafc' }}
    >
      <div className="card shadow p-4 border-0" style={{ borderRadius: 16 }}>
        <h2 className="mb-3" style={{ color: '#39395e' }}>Ticket envoyé ✅</h2>
        <p className="mb-0">
          Votre ticket a été soumis avec succès.<br />
          Redirection vers la liste des tickets...
        </p>
      </div>
    </div>
  );
}
