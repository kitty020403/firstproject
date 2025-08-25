export default function TestTailwind() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🎉 Tailwind fonctionne !</h1>
        <p className="text-gray-600">
          Si tu vois ce style, alors Tailwind CSS est bien configuré dans ton projet.
        </p>
      </div>
    </div>
  );
}
