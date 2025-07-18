import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer/Footer";
import { Toaster, toast } from 'react-hot-toast';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.nameRequired");
      valid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = t("contact.errors.nameInvalid");
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired");
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.messageRequired");
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = t("contact.errors.messageShort");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error(t("contact.errors.correctForm"));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/AQJ.Direction@gmail.com ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _template: "box",
          _captcha: "false",
          _subject: "Nouveau message via le formulaire React"
        })
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Une erreur est survenue. Réessayez.");
      }
    } catch (error) {
      console.error("Erreur FormSubmit:", error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          },
          success: { iconTheme: { primary: '#06b6d4', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } }
        }}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-8"
      >
        <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-white">
          <h2 className="text-3xl font-bold text-cyan-500 mb-2">{t("contact.title")}</h2>
          <p className="text-gray-600 mb-6">{t("contact.subtitle")}</p>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder={t("contact.message")}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300`}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 ${
                isSubmitting ? 'bg-cyan-400' : 'bg-cyan-500 hover:bg-cyan-600'
              } text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-md w-full`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t("contact.sending")}
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  {t("contact.button")}
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
      
    </>
  );
}
