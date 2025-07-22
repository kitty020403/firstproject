
'use client';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          <i className="fas fa-ticket-alt text-blue-500 mr-2"></i>
          SupportTick
        </h1>

        {!session ? (
          <div className="space-y-4">
            <p className="text-gray-600">Connectez-vous pour accéder au système</p>
            <button
              onClick={() => signIn('google')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center"
            >
              <i className="fab fa-google mr-2"></i>
              Se connecter avec Google
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={session.user?.image} 
                alt="Profil" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">Bonjour, {session.user?.name}</p>
                <p className="text-sm text-gray-500">{session.user?.email}</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="/tickets"
                className="block bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition"
              >
                <i className="fas fa-list mr-2"></i>
                Voir mes tickets
              </a>
              <a
                href="/tickets/new"
                className="block bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded transition"
              >
                <i className="fas fa-plus mr-2"></i>
                Créer un ticket
              </a>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full mt-4 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded transition"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </div>
  );
}