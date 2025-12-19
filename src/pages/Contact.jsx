import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.inquiry.trim()) newErrors.inquiry = "Votre demande est requise";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});

    // Encode les données pour Netlify Forms
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Succès - Netlify a reçu le formulaire
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiry: ''
        });
        
        // Optionnel: scroll vers le message de succès
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Erreur
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErrors({ submit: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou utiliser l'email directement." });
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Quels sont vos délais de réponse ?",
      answer: "Nous répondons généralement dans les 24 heures ouvrées suivant la réception de votre message."
    },
    {
      question: "Proposez-vous des tarifs professionnels ?",
      answer: "Oui, nous proposons des tarifs dégressifs pour les professionnels."
    },
    {
      question: "Puis-je visiter vos installations ?",
      answer: "Nous organisons des visites sur rendez-vous pour les professionnels et les groupes."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="bg-neutral-950 text-white py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Une question ? Notre équipe est à votre écoute pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Section Informations de contact */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">
                  Informations de contact
                </h2>
                
                <div className="space-y-8">
                  {/* Téléphone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="text-red-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                      <a 
                        href="tel:+261384214866"
                        className="text-white hover:text-red-400 transition-colors text-lg"
                      >
                        +261 38 42 148 66
                      </a>
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="text-red-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Adresse</h3>
                      <p className="text-gray-300">
                        Immeuble STOI Ankorondrano Village des jeux,<br />
                        Antananarivo 101, Madagascar
                      </p>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Clock className="text-red-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Horaires d'ouverture</h3>
                      <p className="text-gray-300">
                        Lundi - Vendredi<br />
                        9h00 - 18h00
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Samedi sur rendez-vous
                      </p>
                    </div>
                  </div>

                  {/* Email - Lien mailto pour mobile */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="text-red-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a 
                        href="mailto:contact@edolia-mada.com?subject=Demande%20d'information&body=Bonjour,%0A%0AJe%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.%0A%0ACordialement,"
                        className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 group"
                      >
                        contact@edolia-mada.com
                        <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
                      </a>
                      <p className="text-sm text-gray-400 mt-1">
                        Cliquez pour envoyer un email
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte de localisation */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Notre emplacement
                </h3>
                <div className="bg-gray-800 rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://maps.google.com/maps?q=Immeuble%20STOI%20Ankorondrano%20Village%20des%20jeux,%20Antananarivo,%20Madagascar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Carte de localisation"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Formulaire de contact - Version Netlify Forms */}
            <div>
              <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6 animate-scale-in" />
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Message envoyé avec succès ! ✓
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                      <p className="text-gray-300 mb-2">
                        <strong>Notification envoyée à :</strong>
                      </p>
                      <p className="text-red-400 text-lg font-semibold">
                        contact@edolia-mada.com
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Votre message sera envoyé directement à notre boîte email et vous recevrez une copie de confirmation.
                    </p>

                    {/* Formulaire Netlify - IMPORTANT : data-netlify="true" et netlify */}
                    <form 
                      name="contact" 
                      method="POST" 
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      netlify
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Champ caché pour Netlify */}
                      <input type="hidden" name="form-name" value="contact" />
                      
                      {/* Honeypot pour spam */}
                      <div className="hidden">
                        <label htmlFor="bot-field">Ne remplissez pas ce champ :</label>
                        <input name="bot-field" id="bot-field" />
                      </div>

                      {/* Nom complet */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`bg-gray-800 text-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                            errors.name ? 'border-red-500' : 'border-gray-700'
                          }`}
                          placeholder="Votre nom"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`bg-gray-800 text-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500' : 'border-gray-700'
                          }`}
                          placeholder="votre@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                      </div>

                      {/* Téléphone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="phone">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-800 text-white w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="+261 34 12 34 567"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="inquiry">
                          Votre message *
                        </label>
                        <textarea
                          id="inquiry"
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleChange}
                          required
                          rows="5"
                          className={`bg-gray-800 text-white w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none ${
                            errors.inquiry ? 'border-red-500' : 'border-gray-700'
                          }`}
                          placeholder="Comment pouvons-nous vous aider ?"
                        ></textarea>
                        {errors.inquiry && (
                          <p className="mt-1 text-sm text-red-400">{errors.inquiry}</p>
                        )}
                      </div>

                      {/* Erreur générale */}
                      {errors.submit && (
                        <div className="bg-red-900/30 border border-red-700 rounded-lg p-3">
                          <p className="text-red-300 text-sm">{errors.submit}</p>
                          <a 
                            href="mailto:contact@edolia-mada.com" 
                            className="text-red-400 hover:text-red-300 underline text-sm mt-1 inline-block"
                          >
                            Cliquez ici pour envoyer directement par email
                          </a>
                        </div>
                      )}

                      {/* Bouton d'envoi */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 w-5 h-5" />
                              Envoyer
                            </>
                          )}
                        </button>
                      </div>
                    </form>

                    {/* Alternative mailto pour mobile */}
                    <div className="mt-8 pt-8 border-t border-gray-800">
                      <div className="text-center">
                        <p className="text-sm text-gray-400 mb-3">
                          Préférez-vous utiliser directement votre application email ?
                        </p>
                        <a
                          href="mailto:contact@edolia-mada.com?subject=Demande de contact"
                          className="inline-flex items-center justify-center w-full max-w-md py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors hover:border-gray-600"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Ouvrir dans l'application email (Gmail/Outlook)
                        </a>
                        <p className="text-xs text-gray-500 mt-2">
                          Recommandé pour les pièces jointes
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Section FAQ */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Questions fréquentes
                </h3>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-xl"
                      >
                        <h4 className="font-medium text-white text-lg">
                          {faq.question}
                        </h4>
                        <div className="ml-4 flex-shrink-0">
                          {openFaqIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-red-500 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          openFaqIndex === index 
                            ? 'max-h-96 opacity-100 pb-4' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="border-t border-gray-800 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;