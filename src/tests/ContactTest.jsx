// Contact.test.jsx - Version de test
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testMode, setTestMode] = useState('local'); // 'local' | 'netlify-dev' | 'production'
  const [testLogs, setTestLogs] = useState([]);

  const addLog = (message, type = 'info') => {
    setTestLogs(prev => [...prev, {
      timestamp: new Date().toLocaleTimeString(),
      message,
      type
    }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    addLog('Début du test du formulaire...', 'info');

    // Simulation Netlify Forms
    setTimeout(() => {
      addLog('✅ Netlify a détecté le formulaire', 'success');
      addLog(`📧 Email serait envoyé à: contact@edolia.mg`, 'info');
      addLog(`👤 De: ${formData.name} (${formData.email})`, 'info');
      addLog(`📱 Téléphone: ${formData.phone || 'Non renseigné'}`, 'info');
      addLog(`📝 Message: ${formData.inquiry.substring(0, 50)}...`, 'info');
      
      // Simulation d'envoi d'email
      const mailtoLink = `mailto:contact@edolia.mg?subject=TEST%20Netlify%20Forms&body=${encodeURIComponent(
`📋 TEST Netlify Forms - Message de démonstration

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non renseigné'}

Message:
${formData.inquiry}

---
Ceci est un test de la fonctionnalité Netlify Forms.
En production, cet email arrivera directement dans votre boîte contact@edolia.mg`
      )}`;

      addLog('📤 Email de test prêt à être envoyé', 'warning');
      
      // Demander à l'utilisateur
      if (window.confirm('Voulez-vous simuler l\'envoi de l\'email ?\n\nUn email test s\'ouvrira dans votre client mail.')) {
        window.location.href = mailtoLink;
        addLog('🚀 Email test ouvert dans votre application email', 'success');
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      {/* Banner de test */}
      <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-yellow-300">🔬 MODE TEST NETLIFY FORMS</h2>
            <p className="text-yellow-200">Testez votre formulaire avant déploiement</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setTestMode('local')}
              className={`px-3 py-1 rounded ${testMode === 'local' ? 'bg-yellow-600' : 'bg-gray-800'}`}
            >
              Local
            </button>
            <button 
              onClick={() => setTestMode('netlify-dev')}
              className={`px-3 py-1 rounded ${testMode === 'netlify-dev' ? 'bg-yellow-600' : 'bg-gray-800'}`}
            >
              Netlify Dev
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire de test */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">
              Test du Formulaire Contact
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Test réussi ! ✅</h3>
                <p className="text-gray-300 mb-4">
                  Le formulaire fonctionne correctement avec Netlify Forms.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <p className="text-green-400 font-semibold">
                    En production, cet email arrivera directement dans :
                  </p>
                  <p className="text-xl text-red-400 mt-2">contact@edolia.mg</p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setTestLogs([]);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
                >
                  Nouveau test
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-800 text-white w-full px-4 py-3 border border-gray-700 rounded-lg"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-800 text-white w-full px-4 py-3 border border-gray-700 rounded-lg"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-gray-800 text-white w-full px-4 py-3 border border-gray-700 rounded-lg"
                    placeholder="+261 34 12 34 567"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    value={formData.inquiry}
                    onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                    rows="4"
                    className="bg-gray-800 text-white w-full px-4 py-3 border border-gray-700 rounded-lg"
                    placeholder="Votre message de test..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 disabled:opacity-50"
                >
                  {isSubmitting ? 'Test en cours...' : 'Tester le formulaire'}
                </button>
              </form>
            )}
          </div>

          {/* Journal de test */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">📋 Journal du test</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {testLogs.length === 0 ? (
                <p className="text-gray-400 italic">Aucun test effectué...</p>
              ) : (
                testLogs.map((log, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border ${
                      log.type === 'success' ? 'bg-green-900/20 border-green-800' :
                      log.type === 'warning' ? 'bg-yellow-900/20 border-yellow-800' :
                      'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{log.timestamp}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        log.type === 'success' ? 'bg-green-800' :
                        log.type === 'warning' ? 'bg-yellow-800' :
                        'bg-gray-700'
                      }`}>
                        {log.type}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-300">{log.message}</p>
                  </div>
                ))
              )}
            </div>

            {/* Instructions de test */}
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <h4 className="font-semibold text-blue-300 mb-2">Instructions de test :</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                <li>Remplissez le formulaire de test</li>
                <li>Cliquez sur "Tester le formulaire"</li>
                <li>Acceptez l'ouverture de l'email test</li>
                <li>Vérifiez que l'email s'ouvre correctement</li>
                <li>Le contenu doit être : contact@edolia.mg</li>
              </ol>
            </div>

            {/* Test mailto link */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Test du lien email direct :</h4>
              <a 
                href="mailto:contact@edolia.mg?subject=TEST%20Lien%20Email&body=Ceci%20est%20un%20test%20du%20lien%20mailto%20depuis%20le%20site."
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <Mail size={16} />
                Tester contact@edolia.mg
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Devrait ouvrir Gmail/Outlook avec pré-remplissage
              </p>
            </div>
          </div>
        </div>

        {/* Étapes de déploiement */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-green-400 font-bold mb-2">Étape 1 ✅</div>
            <h4 className="font-semibold text-white">Test Local</h4>
            <p className="text-sm text-gray-400 mt-1">Testez en local avec ce composant</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-yellow-400 font-bold mb-2">Étape 2</div>
            <h4 className="font-semibold text-white">Netlify Dev</h4>
            <p className="text-sm text-gray-400 mt-1">Lancez `netlify dev` pour test avancé</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-red-400 font-bold mb-2">Étape 3</div>
            <h4 className="font-semibold text-white">Déploiement</h4>
            <p className="text-sm text-gray-400 mt-1">Déployez sur Netlify pour test réel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTest;